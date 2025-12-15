const els = document.querySelectorAll("[data-reveal]");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
);

els.forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});