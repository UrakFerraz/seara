{
	let container = document.querySelector('.socialMediaContentOverflow');
	let verMaisBtn = document.querySelector('.verMaisInfluenciadoresBtn');

	let altura = container.getBoundingClientRect().height / 2;

	verMaisBtn.addEventListener('click', () => {
		console.log('is')
		console.log(container.getBoundingClientRect().height)
		container.style.height = container.getBoundingClientRect().height + altura + 'px';
	})

}