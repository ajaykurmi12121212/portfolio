let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
// whats chat 
function chatwa(){
  window.open("https://wa.link/i2pa09")
}
// download cv 
function downcv()
{
  window.open("https://drive.google.com/file/d/102XCQahLT6kM_-aCYRGodfSWKmQ2zLl4/view?usp=sharing")
}
// go to linked in 
function gmailh()
{
  window.open("https://www.linkedin.com/in/ajay-kumar-75721b225/overlay/contact-info/")
}
