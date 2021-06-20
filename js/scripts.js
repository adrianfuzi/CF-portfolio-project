// ! Burger behavior

const burger = document.querySelector(".header__burger");
const drawer = document.querySelector(".drawer");
const navItem = document.querySelectorAll(".drawer ul li");

//  Animate burger icon and open/close drawer
burger.addEventListener("click", () => {
  (() => {
    burger.classList.toggle("header__burger-change");
    drawer.classList.toggle("drawer-visible");
  })();
});

// Animate burger icon and close drawer menu when clicking on nav item
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    (() => {
      burger.classList.remove("header__burger-change");
      drawer.classList.remove("drawer-visible");
    })();
  });
});

// ! Smooth scrolling (jQuery)

// Scroll to projects section
$(".p").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#projects-scroll").offset().top - 82,
    },
    800
  );
});

// Scroll to about section
$(".a").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#about-scroll").offset().top - 100,
    },
    800
  );
});

// Scroll to footer contact
$(".c").click(() => {
  $("html, body").animate(
    {
      scrollTop: $("#contact-scroll").offset().top,
    },
    800
  );
});
