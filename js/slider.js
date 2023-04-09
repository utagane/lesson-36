const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),

      slidesContainer = document.getElementById('offer__slider-wrapper'), //контейнер со слайдами
      slideWidth = slidesContainer.clientWidth; //ширина контейнера
      

let slideIndex = 1;

if(slides.length < 10){
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

prev.addEventListener('click', () => {
    slidesContainer.scrollLeft -= slideWidth; //скролим вправо на ширину контейнера
    plusSlides(-1);    
});

next.addEventListener('click', () => {
    slidesContainer.scrollLeft += slideWidth; //скролим влево на ширину контейнера
    plusSlides(1);
});

showSlides(slideIndex);

function showSlides(n){
    if(n > slides.length){
        slideIndex = 1;
        slidesContainer.scrollLeft -= slideWidth * slides.length; //если слайды закончились, то скролим до первого
    }
    if(n < 1){
        slideIndex = slides.length;
        slidesContainer.scrollLeft += slideWidth * slides.length; // если переходим с 1 слайда к последнему, скролим до последнего
    }

    if(slideIndex < 10){
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

function plusSlides(n){
    showSlides(slideIndex += n);
}


