


{

	let imgArr = [
	'img/img1.jpg',
	'img/img2.jpg',
	'img/img3.jpg',
	'img/img4.jpg',
	'img/img5.jpg',
	'img/img6.jpg',
	'img/img7.jpg',
	'img/img8.jpg',
	'img/img9.jpg',
	'img/img10.jpg',
	'img/img11.jpg',
	'img/img12.jpg',
	'img/img13.jpg',
	'img/img14.jpg',
	'img/img15.jpg',
	'img/img16.jpg',
	'img/img17.jpg',
	'img/img18.jpg',
	'img/img1.jpg',
	'img/img2.jpg',
	'img/img3.jpg',
	'img/img4.jpg',
	'img/img5.jpg',
	'img/img6.jpg'
	]
	let thumbsContainer = document.querySelector('.galeriaThumbsOverflow');

	let contLines = 0;

	let contThumbsImg = imgArr.length;

	let total = 0;

	contadora = 0;


	function myFunction(x) {
		if (x.matches) { // If media query matches
			contLines = 4;
		} else {
			contLines = 8;
		}
		total = contThumbsImg / contLines;
		thumbsContainer.style.gridTemplateColumns = `repeat(${total}, 100%)`;
		console.log(total);
		for (let i = 0; i < total; i++) {
			const div = document.createElement('div');
			div.className = 'galeriaThumbsLine grid';
			console.log(div);
			console.log(thumbsContainer);
			for(let x = 0; x < contLines; x++) {
				div.appendChild(createThumb(contadora));
				contadora++
			}
			div.style.gridTemplateColumns = `repeat(${contLines}, 1fr)`;
			thumbsContainer.appendChild(div);
			console.log(contadora);
		}
	}

	function createThumb(num) {
		const button = document.createElement('button');
		button.className = 'galeriaThumbsUnit';
		button.id = `galeriaThumbsUnit-${num + 1}`;
		const imagem = document.createElement('img');
		imagem.className = 'cover';
		imagem.src = imgArr[num];
		button.appendChild(imagem);
		return button;
	}

	var x = window.matchMedia("(max-width: 600px)")
	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
}
















{

let leftBtn = document.querySelector('.galeriaThumbsBtnLeft');
let rightBtn = document.querySelector('.galeriaThumbsBtnRight');

let contThumbs = 0;

let thumbsLines = document.querySelectorAll('.galeriaThumbsLine');

thumbsLines = [...thumbsLines];

leftBtn.addEventListener('click', () => {
	if(contThumbs > 0) {
		contThumbs--;
		console.log(contThumbs);
		thumbsLines.forEach(thumb => thumb.style.transform = `translateX(-${contThumbs}00%)`);
	}
});

rightBtn.addEventListener('click', () => {
	if(contThumbs < thumbsLines.length - 1) {
		contThumbs++;
		console.log(contThumbs);
		thumbsLines.forEach(thumb => thumb.style.transform = `translateX(-${contThumbs}00%)`);
	}
});

let thumbsBtns = document.querySelectorAll('.galeriaThumbsUnit');

thumbsBtns = [...thumbsBtns];

let slides = document.querySelectorAll('.galeriaImgsUnit');

slides = Array.from(slides);

document.querySelector('.galeriaThumbsWrapper').addEventListener('click', el => {
	if(el.target.classList.contains('galeriaThumbsUnit')) {
		let img = el.target.id;
		console.log(img);
		let contThumbs = img.match(/\d/g).join('');
		slides.forEach(el => {
			el.style.transform = `translateX(-${contThumbs - 1}00%)`;
		})
	}
});


let thumbsArr = [];
let thumbsImgSrc = [];


function gridThumbs(quant, id) {
	
}

}