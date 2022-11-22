// Slider Variable
const sliderList = document.querySelectorAll('.slider');
const navList = document.querySelectorAll('.slider__nav');
let currentSlide = document.querySelector('.slider.active');
let currentNav = document.querySelector('.slider__nav.active');
let current = 0;

// Navbar Variable
const navbar = document.querySelector('nav');
let lastScrollTop;

// Hamburger Variable
const menu = document.querySelector('.nav__items');
const hamburger = document.querySelector('.hamburger-menu');
const on = document.querySelector('.on');
const off = document.querySelector('.off');

// Slider Function
function changeSlide(sliderIndex, nav){
	currentSlide.classList.remove('active');
	currentSlide = sliderList[sliderIndex];
	currentSlide.classList.add('active');
	currentNav.classList.remove('active');
	currentNav = nav;
	currentNav.classList.add('active');
}

navList.forEach( (nav,index) => {
	nav.addEventListener( 'click', () => {
		if(!nav.classList.contains('active')){
			changeSlide(index, nav);
			current = index;
		}
	})
})

setInterval( function() {
	if(current > sliderList.length - 1){
		current = 0;
	}
	changeSlide(current, navList[current]);
	current++;
}, 3000);


// Navbar Function
window.addEventListener('scroll', () => {
	let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
	scrollTop > lastScrollTop ? navbar.style.top = '-100px' : navbar.style.top = '0';
	lastScrollTop = scrollTop;

	let bgColor = '';
	window.scrollY > 0 ? bgColor = '#1B1A17' : bgColor = 'transparent';
	navbar.style.backgroundColor = bgColor;
})

// Function Hamburger Menu
hamburger.addEventListener('click', () => {
	if(menu.classList.contains("show-menu")) {
		menu.classList.remove("show-menu");
		on.style.display = "block";
		off.style.display = "none";
	} else {
		menu.classList.add("show-menu");
		on.style.display = "none";
		off.style.display = "block";
	}
})