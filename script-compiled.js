'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
	var today = new Date(),
	    links = document.querySelectorAll('.header-menu .link'),
	    scroll = new SmoothScroll(),
	    contactTop = document.querySelector('.clients').getBoundingClientRect().top + window.scrollY;

	document.querySelector('.current-year').textContent = today.getFullYear();
	Array.prototype.forEach.call(links, function (link) {
		var section = link.getAttribute('data-class');
		var top = document.querySelector('.' + section).getBoundingClientRect().top + window.scrollY;

		link.onclick = function () {
			scroll.animateScroll(top);
		};
	});

	document.querySelector('.header-logo').onclick = function () {
		scroll.animateScroll(0);
	};

	document.querySelector('.hero-button').onclick = function () {
		scroll.animateScroll(contactTop);
	};
});