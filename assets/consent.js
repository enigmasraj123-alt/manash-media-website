// ============================================================
// MANASH MEDIA — COOKIE CONSENT
// Analytics/advertising tags (GTM, which fires GA4 + Meta Pixel)
// only load after the visitor clicks "Accept". Nothing is set
// before that. Choice is remembered in localStorage and can be
// changed anytime via "Manage Cookie Preferences" in the footer.
// ============================================================
(function () {
  var CONSENT_KEY = "manash_cookie_consent";

  function getConsent() { return localStorage.getItem(CONSENT_KEY); }
  function setConsent(v) { localStorage.setItem(CONSENT_KEY, v); }

  function loadGTM() {
    if (window.__gtmLoaded) return;
    var id = window.SITE_CONFIG && window.SITE_CONFIG.GTM_CONTAINER_ID;
    if (!id || id.indexOf("XXXX") !== -1) return; // not configured yet, skip silently
    window.__gtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = document.getElementsByTagName("script")[0];
    var j = document.createElement("script");
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + id;
    f.parentNode.insertBefore(j, f);
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted"
      });
    }
  }

  function showBanner() {
    var b = document.getElementById("cookie-consent-banner");
    if (b) b.classList.remove("hidden");
  }
  function hideBanner() {
    var b = document.getElementById("cookie-consent-banner");
    if (b) b.classList.add("hidden");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consent = getConsent();
    if (consent === "granted") {
      loadGTM();
    } else if (consent !== "denied") {
      showBanner();
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var rejectBtn = document.getElementById("cookie-reject");
    var manageLink = document.getElementById("manage-cookie-preferences");

    if (acceptBtn) acceptBtn.addEventListener("click", function () {
      setConsent("granted"); hideBanner(); loadGTM();
    });
    if (rejectBtn) rejectBtn.addEventListener("click", function () {
      setConsent("denied"); hideBanner();
    });
    if (manageLink) manageLink.addEventListener("click", function (e) {
      e.preventDefault(); showBanner();
    });
  });
})();
