var body = document.getElementsByTagName("body")[0];
var reveals = document.querySelectorAll(".reveal");

body.style.backgroundColor = "#303030";

window.onscroll = function (event) {
  var scroll = window.pageYOffset;
  if (scroll < 500) {
    //grey
    body.style.backgroundColor = "#303030";
  } else if (scroll >= 500 && scroll < 2000) {
    //white
    body.style.backgroundColor = "#F5F5F5";
  } else if (scroll >= 600 && scroll < 600) {
    // .......
    body.style.backgroundColor = "#";
  } else if (scroll >= 1200 && scroll < 1800) {
  }

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

/*lottie-1 (knop-1)*/

const button = document.querySelector("button");

const svgContainer = document.getElementById("lottie");

const animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: "svg",
  loop: false,
  autoplay: false,
  path: "/animations/arrow.json",
});

button.addEventListener("mouseenter", () => {
  svgContainer.classList.remove("hide");
  animItem.goToAndPlay(0, true);
});

animItem.addEventListener("complete", () => {
  svgContainer.classList.add("hide");
});

/*lottie-2 (lijn-1)*/

const svgContainer2 = document.getElementById("lottie-2");

const animItem2 = bodymovin.loadAnimation({
  wrapper: svgContainer2,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/lijn.json",
});

animItem2.addEventListener("DOMLoaded", function () {
  animItem2.setSpeed(0.8);
});

/*lottie-3 (lijn-2)*/

const svgContainer3 = document.getElementById("lottie-3");

const animItem3 = bodymovin.loadAnimation({
  wrapper: svgContainer3,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/lijn.json",
});

animItem3.addEventListener("DOMLoaded", function () {
  animItem3.setSpeed(0.8);
});

/*lottie-4 (lijn-3)*/

const svgContainer4 = document.getElementById("lottie-4");

const animItem4 = bodymovin.loadAnimation({
  wrapper: svgContainer4,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/lijn.json",
});

animItem4.addEventListener("DOMLoaded", function () {
  animItem4.setSpeed(0.8);
});

/*lottie-5 (wiggle-1)*/

const svgContainer5 = document.getElementById("lottie-5");

const animItem5 = bodymovin.loadAnimation({
  wrapper: svgContainer5,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/line-2.json",
});

/*lottie-6 (lijn-4)*/

const svgContainer6 = document.getElementById("lottie-6");

const animItem6 = bodymovin.loadAnimation({
  wrapper: svgContainer6,
  animType: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/lijn.json",
});

animItem2.addEventListener("DOMLoaded", function () {
  animItem2.setSpeed(0.4);
});

/*lottie-7 (scroll to top)*/

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const animation = bodymovin.loadAnimation({
  container: scrollToTopBtn,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/animations/scroll_up.json",
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function scrollToElement(id) {
  var element = document.getElementById(id);
  var offset = element.offsetTop;
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

var frmvalidator = new Validator("contact_form");
frmvalidator.addValidation("name", "req", "Vul alsjeblieft je naam in.");
frmvalidator.addValidation("email", "req", "Vul een geldige email in.");
frmvalidator.addValidation("phone");
frmvalidator.addValidation("subject");
frmvalidator.addValidation("message", "req", "Vul een bericht in.");
frmvalidator.addValidation(
  "email",
  "email",
  "Please enter a valid email address"
);

const navItems = document.querySelectorAll('.nav-underline');
const menuToggleCheckbox = document.querySelector('#check');

function closeMenu() {
  menuToggleCheckbox.checked = false;
}

navItems.forEach((navItem) => {
  navItem.addEventListener('click', closeMenu);
});