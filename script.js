document.addEventListener("DOMContentLoaded", (event) => {
	const today = new Date(),
				links = document.querySelectorAll('.header-menu .link'),
				scroll = new SmoothScroll(),
				contactTop = document.querySelector(`.clients`).getBoundingClientRect().top + window.scrollY
	
	document.querySelector('.current-year').textContent = today.getFullYear();
	links.forEach(link => {
		const section = link.getAttribute('data-class');
		const top = document.querySelector(`.${section}`).getBoundingClientRect().top + window.scrollY;

		link.onclick = () => {
			scroll.animateScroll(top);
		}
	});

	document.querySelector('.header-logo').onclick = () => {
		scroll.animateScroll(0)
	}

	document.querySelector('.hero-button').onclick = () => {
		scroll.animateScroll(contactTop)
	}
});