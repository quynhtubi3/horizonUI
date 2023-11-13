function showMenu() {
  const lstMenu = document.querySelector(".lstMenu");
  lstMenu.classList.remove("hidden");
}
function closeMenu() {
  const lstMenu = document.querySelector(".lstMenu");
  lstMenu.classList.add("hidden");
}
function showSignInScr() {
  const scr = document.querySelector(".signInScr");
  scr.classList.remove("hidden");
}
function closeSignInScr() {
  const scr = document.querySelector(".signInScr");
  scr.classList.add("hidden");
}

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const lstTitle = document.querySelectorAll(".lstTitle .title");

  if (scrollPosition >= 0 && scrollPosition <= 600) {
    lstTitle.forEach((data) => {
      data.classList.remove("active-title");
    });
    lstTitle[0].classList.add("active-title");
  } else if (scrollPosition > 600 && scrollPosition <= 1400) {
    lstTitle.forEach((data) => {
      data.classList.remove("active-title");
    });
    lstTitle[1].classList.add("active-title");
  } else if (scrollPosition > 1400 && scrollPosition <= 2100) {
    lstTitle.forEach((data) => {
      data.classList.remove("active-title");
    });
    lstTitle[2].classList.add("active-title");
  } else if (scrollPosition > 2100 && scrollPosition <= 2800) {
    lstTitle.forEach((data) => {
      data.classList.remove("active-title");
    });
    lstTitle[3].classList.add("active-title");
  } else {
    lstTitle.forEach((data) => {
      data.classList.remove("active-title");
    });
  }
  lstTitle.forEach((data) => {
    console.log(data);
  });
});
