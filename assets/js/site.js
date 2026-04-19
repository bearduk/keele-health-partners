const storageKeys = {
  cookieConsent: "khp-cookie-consent",
};

const body = document.body;
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.getElementById("site-navigation");
const banner = document.querySelector("[data-cookie-banner]");
const cookieButtons = document.querySelectorAll("[data-cookie-action]");

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // If storage is unavailable, the banner will reappear on reload.
  }
}

function setNavState(isOpen) {
  if (!navToggle || !siteNav) return;

  navToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("nav-open", isOpen);
}

function initNavigation() {
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavState(!isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavState(false);
    }
  });
}

function enableNonEssentialScripts() {
  // Placeholder hook for future analytics or embeds.
  // No non-essential scripts are loaded in this MVP before consent.
}

function saveCookieChoice(choice) {
  writeStorage(storageKeys.cookieConsent, choice);

  if (banner) {
    banner.hidden = true;
  }

  if (choice === "accepted") {
    enableNonEssentialScripts();
  }
}

function initCookieBanner() {
  if (!banner) return;

  const savedChoice = readStorage(storageKeys.cookieConsent);

  if (!savedChoice) {
    banner.hidden = false;
    return;
  }

  if (savedChoice === "accepted") {
    enableNonEssentialScripts();
  }
}

function initCookieActions() {
  cookieButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.getAttribute("data-cookie-action");
      saveCookieChoice(action === "accept" ? "accepted" : "rejected");
    });
  });
}

initNavigation();
initCookieBanner();
initCookieActions();
