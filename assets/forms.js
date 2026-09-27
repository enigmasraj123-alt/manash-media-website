// ============================================================
// MANASH MEDIA — FORM SUBMISSION (Web3Forms)
// Any <form data-web3forms="true"> on the site is wired up here.
// Access key comes from site-config.js — change it in one place.
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  var COOLDOWN_MS = 10000; // 10 seconds between submissions per form
  var forms = document.querySelectorAll('form[data-web3forms="true"]');
  forms.forEach(function (form) {
    form.dataset.lastSubmit = "0";
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var now = Date.now();
      var last = parseInt(form.dataset.lastSubmit, 10) || 0;
      var statusEl = form.querySelector(".form-status");
      if (now - last < COOLDOWN_MS) {
        if (statusEl) {
          statusEl.classList.remove("hidden");
          statusEl.textContent = "Please wait a few seconds before sending another message.";
        }
        return;
      }

      var honeypot = form.querySelector('input[name="botcheck"]');
      if (honeypot && honeypot.value !== "") { return; } // bot caught, drop silently

      var submitBtn = form.querySelector('button[type="submit"]');
      var key = window.SITE_CONFIG && window.SITE_CONFIG.WEB3FORMS_ACCESS_KEY;

      if (!key || key.indexOf("YOUR-WEB3FORMS") !== -1) {
        if (statusEl) {
          statusEl.classList.remove("hidden");
          statusEl.textContent = "Form isn't connected yet — add a Web3Forms access key in assets/site-config.js.";
        }
        return;
      }

      form.dataset.lastSubmit = String(now);

      var formData = new FormData(form);
      formData.append("access_key", key);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (statusEl) {
            statusEl.classList.remove("hidden");
            statusEl.textContent = data.success
              ? "Message sent — we'll get back to you soon."
              : "Something went wrong. Please email hello@manashmedia.com directly.";
          }
          if (data.success) form.reset();
        })
        .catch(function () {
          if (statusEl) {
            statusEl.classList.remove("hidden");
            statusEl.textContent = "Network error — please email hello@manashmedia.com directly.";
          }
        })
        .finally(function () {
          // Re-enable the button once the cooldown window has passed, not immediately —
          // this is what actually prevents rapid repeat submissions.
          setTimeout(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = submitBtn.dataset.originalText;
            }
          }, COOLDOWN_MS);
        });
    });
  });
});
