window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  console.log("Scrool");
}

// --------------Adding intersection observer-----------------
const bar = document.querySelectorAll(".bar");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("skillBar", entry.isIntersecting);
    });
  },
  { threshold: 0.6 }
);

bar.forEach((skill) => {
  observer.observe(skill);
});
