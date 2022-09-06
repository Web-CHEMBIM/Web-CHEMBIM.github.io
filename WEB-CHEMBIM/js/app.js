// BodyMovinData
var indexbodymovin = document.querySelector("#indexbodymovin");
bodymovin.loadAnimation({
  container: indexbodymovin, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/animatedIndexIcon.json", // the path to the animation json
});

var featurebodymovin = document.querySelector("#featurebodymovin");
bodymovin.loadAnimation({
  container: featurebodymovin, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/features.json", // the path to the animation json
});

var lessonbodymovin = document.querySelector("#lesson-bodymovin");
bodymovin.loadAnimation({
  container: lessonbodymovin, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/lesson.json", // the path to the animation json
});

var quizbodymovin = document.querySelector("#quiz-bodymovin");
bodymovin.loadAnimation({
  container: quizbodymovin, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/quiz.json", // the path to the animation json
});

var aboutbodymovin = document.querySelector("#about-bodymovin");
bodymovin.loadAnimation({
  container: aboutbodymovin, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/about.json", // the path to the animation json
});

let img001 = document.getElementById("51-IonicBonding-img-001");
bodymovin.loadAnimation({
  container: img001, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/5.1-IonicBonding-img-001.json", // the path to the animation json
});

let img002 = document.getElementById("51-IonicBonding-img-002");
bodymovin.loadAnimation({
  container: img002, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/bodyMovinData/5.1-IonicBonding-img-002.json", // the path to the animation json
});

let button = document.querySelector("#menu-btn");
let sidebar = document.querySelector(".sidebar");

button.onclick = function () {
  sidebar.classList.toggle("active");
  console.log("Clicked");
};

//DropDown Interactive
let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
  });
});

// scroll-top
function scrollToTheTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
