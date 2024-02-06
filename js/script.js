function userScroll() {
  const navBg = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navBg.classList.add("bg-dark");
    } else {
      navBg.classList.remove("bg-dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
