const heroCta = document.querySelector("#hero-cta");
const stickyCta = document.querySelector(".catalog-landing .sticky-mobile");
const mobile = matchMedia("(max-width: 767px)");

function syncSticky() {
  if (!stickyCta.contains(document.activeElement)) {
    stickyCta.hidden = !mobile.matches || heroCta.getBoundingClientRect().bottom >= 0;
  }
}

if (heroCta && stickyCta && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(syncSticky);
  observer.observe(heroCta);
  mobile.addEventListener("change", syncSticky);
  stickyCta.addEventListener("focusout", () => requestAnimationFrame(syncSticky));
}
