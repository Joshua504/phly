/* -------------------------------- elements -------------------------------- */

let loader = document.querySelector(".preloader");
const openPopup = document.querySelector(".btn--chg");
const popUp = document.querySelector(".popup__bg");
const closePopup = document.querySelector(".close__btn");
const overlay = document.querySelector(".overlay");
const sideBar = document.querySelector(".sidebar");
const openSidebar = document.querySelector(".open__sidebar");
const closeSidebar = document.querySelector(".close__sidebar");
const backgroundCon = document.querySelector(".wrapper");

/* ---------------------------------- popup --------------------------------- */

const showPopup = () => {
	popUp.classList.add("show-popup");
};
openPopup.addEventListener("click", showPopup);

const removePopup = () => {
	popUp.classList.remove("show-popup");
};
closePopup.addEventListener("click", removePopup);

/* --------------------------------- sidebar -------------------------------- */

const showSidebar = () => {
	sideBar.classList.add("active");
  overlay.classList.add("shape")
};
openSidebar.addEventListener("click", showSidebar);

const removeSidebar = () => {
	sideBar.classList.remove("active");
  overlay.classList.remove("shape");
};
closeSidebar.addEventListener("click", removeSidebar);

/* ------------------------------- background ------------------------------- */

const images = ["/img/qslide-1.jpg", "/img/qslide-2.jpg", "/img/qslide-3.jpg"];

let currentIndex = 0;

setInterval(() => {
  backgroundCon.style.backgroundImage = `url("${images[currentIndex]}")`;
  currentIndex = (currentIndex + 1) % images.length;
}, 5000);

/* -------------------------------- preloader ------------------------------- */


window.addEventListener("load", function(){
  loader.style.display = "none"
})