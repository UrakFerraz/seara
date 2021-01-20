{
  let totalSlides = document.querySelectorAll('.section1SlidesWrapper');

  slideBtnLeft = document.querySelector('.section1SlidesLeftBtn');
  slideBtnRight = document.querySelector('.section1SlidesRightBtn');

  totalSlides = Array.from(totalSlides);

  let x = totalSlides.length - 1;

  let contSlides = 0;

  document.querySelector('.section1SlidesOverflow').style.gridTemplateColumns = `repeat(${totalSlides.length}, 100%)`;

  let dotsContainer = document.querySelector('.section1SlidesDotsWrapper');

  for(let i = 0; i <= x; i++) {
    let btn = document.createElement('button');
    btn.className = 'section1SlidesDots';
    document.createAttribute(`data-dot-num`);
    btn.setAttribute(`data-dot-num`, i)
    if(i === 0) {
      btn.classList.add('dotSelected');
    };
    dotsContainer.appendChild(btn);
  };

  let dotsBtns = document.querySelectorAll('.section1SlidesDots');

  dotsBtns = [...dotsBtns];

  dotsContainer.addEventListener('click', el => {
    if(el.target.classList.contains('section1SlidesDots')) {
      dotsBtns.forEach(el => el.classList.remove('dotSelected'));
      // el.target.classList.add('dotSelected');
      slideDots(el.target);
      autoArrows(contSlides);
    };
  });

  function autoArrows(indic) {
    if(indic == x) {
      slideBtnRight.classList.add('section1SlidesBtnNot');
      slideBtnLeft.classList.remove('section1SlidesBtnNot');
    } else if(indic < 1) {
       slideBtnRight.classList.remove('section1SlidesBtnNot');
      slideBtnLeft.classList.add('section1SlidesBtnNot');
    } else {
      slideBtnRight.classList.remove('section1SlidesBtnNot');
      slideBtnLeft.classList.remove('section1SlidesBtnNot');
    };
  };

  function scrollSlide(tot) {
    console.log(totalSlides[tot])
    totalSlides[tot].scrollIntoView(false);
    contSlides = tot;
    slidesArrowsRight(contSlides, totalSlides);
    slidesArrowsLeft(contSlides);
  };

  function slideDots(dot) {
    let indice = dot.getAttribute(`data-dot-num`);
    autoArrows(indice);
    scrollSlide(indice);
    contSlides = indice;
  };

  function slidesArrowsRight(contador, total) {
      slideBtnLeft.classList.remove('section1SlidesBtnNot');
      (contador === total.length - 1) ? slideBtnRight.classList.add('section1SlidesBtnNot') : slideBtnRight.classList.remove('section1SlidesBtnNot');
  };

  function slidesArrowsLeft(contador) {
      slideBtnRight.classList.remove('section1SlidesBtnNot');
      (contador === 0) ? slideBtnLeft.classList.add('section1SlidesBtnNot') : slideBtnLeft.classList.remove('section1SlidesBtnNot');
  };

  document.querySelector('.section1SlidesContainer').addEventListener('click', el => {
    if(el.target.classList.contains('section1SlidesRightBtn')) {
      if(contSlides < x) {
        contSlides++;
        console.log(contSlides)
        scrollSlide(contSlides);
        slidesArrowsRight(contSlides, totalSlides);
      };
    } else if (el.target.classList.contains('section1SlidesLeftBtn')) {
      if(contSlides > 0) {
        slideBtnRight.classList.remove('section1SlidesBtnNot');
        contSlides--;
        console.log(contSlides)
        scrollSlide(contSlides);
        slidesArrowsLeft(contSlides);
      };
    };
  });



const options = {
  rootMargin: '0px',
  threshold: 0.25
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.25) {
        console.log(entry)
        console.log(entry.target.id)
        let contDots = Number(entry.target.id.match(/\d/g).join(''));
        console.log(contDots)
        dotsBtns.forEach(el => el.classList.remove('dotSelected'));
        dotsBtns[contDots - 1].classList.add('dotSelected');
    };
  });
};

const observer = new IntersectionObserver(callback, options)

totalSlides.forEach((section, index) => {
  observer.observe(section)

})



}
