const modalTriger = document.querySelectorAll('[data-modal]'),
      modalClose = document.querySelector('[data-close]'),
      modal = document.querySelector('.modal');

//функция открытия модального окна.
//при вызове можно передавать любое окно в параметр функции
const open = elem => {
    elem.classList.add('show');
    elem.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

//функция закрытия модального окна.
const close = elem => {
    elem.classList.add('hide');
    elem.classList.remove('show');
    document.body.style.overflow = '';
}

     
    
modalTriger.forEach(btn => {
    btn.addEventListener('click', ()=>{
        open(modal);
    });
});

modalClose.addEventListener('click', () => {
    close(modal)
});

modal.addEventListener('click', (e)  => {
    if(e.target === modal){
        close(modal);
    }
})

document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape'){
        close(modal);
    }
})