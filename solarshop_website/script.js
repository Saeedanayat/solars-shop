document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const backTop = document.querySelector(".back-top");
  const form = document.querySelector("#quote-form");
  const feedback = document.querySelector("#form-feedback");
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
  };
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opening = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
      nav.classList.toggle("open", opening);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${(index % 4) * 60}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const updateBackTop = () => backTop?.classList.toggle("visible", window.scrollY > 450);
  window.addEventListener("scroll", updateBackTop, { passive: true });
  updateBackTop();

  // Demo form validation only. Connect a backend/form service to receive real enquiries.
  if (form && feedback) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      feedback.textContent = "";
      feedback.className = "form-feedback";
      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = "Please complete the required fields with valid details.";
        feedback.classList.add("error");
        return;
      }
      feedback.textContent = "Thanks! The demo form is working. Connect a form service or backend to receive real enquiries.";
      feedback.classList.add("success");
      form.reset();
    });
  }

  // Accessible native FAQ details remain keyboard-operable without extra dependencies.
  document.querySelectorAll(".faq-list details").forEach(item => {
    item.addEventListener("toggle", () => {
      const marker = item.querySelector("summary span");
      if (marker) marker.textContent = item.open ? "−" : "+";
    });
  });
});
