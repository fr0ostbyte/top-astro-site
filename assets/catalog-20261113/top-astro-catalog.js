const heroCta = document.querySelector("#hero-cta");
const stickyCta = document.querySelector(".catalog-landing .sticky-mobile");
const inlineCtas = [...document.querySelectorAll(".catalog-landing a[data-placement]:not([data-placement='sticky'])")];
const mobile = matchMedia("(max-width: 767px)");

function syncSticky() {
  if (!stickyCta.contains(document.activeElement)) {
    const inlineVisible = inlineCtas.some((cta) => {
      const box = cta.getBoundingClientRect();
      return box.bottom > 0 && box.top < innerHeight;
    });
    stickyCta.hidden = !mobile.matches || inlineVisible || heroCta.getBoundingClientRect().bottom >= 0;
  }
}

if (heroCta && stickyCta && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(syncSticky);
  inlineCtas.forEach((cta) => observer.observe(cta));
  mobile.addEventListener("change", syncSticky);
  stickyCta.addEventListener("focusout", () => requestAnimationFrame(syncSticky));
}
