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
	overlay.classList.add("shape");
};
openSidebar.addEventListener("click", showSidebar);

const removeSidebar = () => {
	sideBar.classList.remove("active");
	overlay.classList.remove("shape");
};
closeSidebar.addEventListener("click", removeSidebar);

/* -------------------------------- preloader ------------------------------- */

window.addEventListener("load", function () {
	loader.style.display = "none";
});

/* ---------------------------- background-slider --------------------------- */

const images = ["/img/qslide-1.jpg", "/img/qslide-2.jpg", "/img/qslide-3.jpg"];
const loaderBar = document.querySelector(".loader-bar");

let animationId;
let width = 0;

function animateLoaderBar() {
	if (width >= 100) {
		width = 0;
	} else {
		width += 1;
		loaderBar.style.width = `${width}%`;
	}

	animationId = requestAnimationFrame(animateLoaderBar);
}

function startAnimation() {
	animationId = requestAnimationFrame(animateLoaderBar);
}

function resetAnimation() {
	cancelAnimationFrame(animationId);
	width = 0;
	loaderBar.style.width = "0%";
	setTimeout(startAnimation, 3200); 
}

startAnimation();
setInterval(resetAnimation, 5000); 

function backgroundSlider() {
	let currentIndex = 0;
	let intervalId;

	function changeBackgroundImage() {
		backgroundCon.style.backgroundImage = `url(${images[currentIndex]})`;
		currentIndex = (currentIndex + 1) % images.length;
	}

	function startAnimation() {
		intervalId = setInterval(changeBackgroundImage, 5000);
	}

	startAnimation();
}

backgroundSlider()

