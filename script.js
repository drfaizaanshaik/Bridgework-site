// Bridgework Dental Advisory — small site behaviors, no framework needed.

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after tapping a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Friendly console nudge for the TODOs left in this template
  var bookingLink = document.getElementById("booking-link");
  if (bookingLink && bookingLink.getAttribute("href") === "#") {
    console.info(
      "Bridgework site: the 'Book a call' button is still a placeholder. " +
      "Set up a Calendly link and update the href in index.html (search for TODO)."
    );
  }
});
