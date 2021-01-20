{
	let slides = document.querySelectorAll('.galeriaImgsUnit');

	slides = [...slides];

	let slidesContainer = document.querySelector('.galeriaImgsOverflow');

	slidesContainer.addEventListener('touchstart', el => {
		console.log(el);
	});
}




{
	let slidesSwipe = [...document.querySelectorAll('.section1SlidesWrapper')];

	console.log(slidesSwipe);

	
}