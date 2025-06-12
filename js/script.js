// Cookie Management
document.addEventListener("DOMContentLoaded", function () {
  const cookieModal = document.getElementById("cookieModal");
  const saveCookiePref = document.getElementById("saveCookiePref");
  const cookieAccepte = document.getElementById("cookieAccepte");

  // Check if cookie preferences are already set
  if (!localStorage.getItem("cookiePreferences")) {
    cookieModal.classList.remove("hidden");
  }

  // Save cookie preferences
  saveCookiePref.addEventListener("click", function () {
    const preferences = {
      performance: cookieAccepte.checked,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    cookieModal.classList.add("hidden");

    // Initialize Google Analytics if performance cookies are accepted
    if (preferences.performance) {
      initializeGoogleAnalytics();
    }
  });
});

// Google Analytics Initialization
function initializeGoogleAnalytics() {
  // Google Analytics code
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX"); // Replace with your actual GA4 ID
}

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("border-red-500");
        } else {
          field.classList.remove("border-red-500");
        }
      });

      // Email validation
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          isValid = false;
          emailField.classList.add("border-red-500");
        }
      }

      // Phone validation
      const phoneField = form.querySelector('input[type="tel"]');
      if (phoneField && phoneField.value) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneField.value.replace(/\s/g, ""))) {
          isValid = false;
          phoneField.classList.add("border-red-500");
        }
      }

      if (isValid) {
        // Here you would typically send the form data to your server
        console.log("Form is valid, submitting...");
        // form.submit();
      }
    });
  }
});

// Responsive Navigation
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector("[data-mobile-menu]");
  const mobileMenu = document.querySelector("[data-mobile-menu-items]");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
