const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-links");
window.onscroll = function () {
	if (window.scrollY > 1300) {
		navLeft.classList.add("nav-box-shadow");
		navRight.classList.add("nav-box-shadow");
	} else {
		navLeft.classList.remove("nav-box-shadow");
		navRight.classList.remove("nav-box-shadow");
	}
};
