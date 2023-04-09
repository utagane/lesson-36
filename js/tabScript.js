// Попробовал реализовать свой вариант для табов через data.
// В html для каждой кнопки был прописан атрибут data-tab со своим значением.
// Для табов с контентом так же прописан атрибут data-tab с таким же значением, как и у кнопки, которая на него ссылается.

window.addEventListener('DOMContentLoaded', () => {
    const tabsButtons = document.querySelectorAll('.tabheader__item'); // берем все div с классом .tabheader__item (наши кнопки)
  
    tabsButtons.forEach((trigger) => {  // callback функция которая применяется для каждой кнопки из массива tabsButtons
        trigger.addEventListener('click', function() { // вешаем обработчик событий click на наши кнопки, если было нажатие, то выполняется функция function()

            let id = this.getAttribute('data-tab'), // берем значение атрибута data-tab У нажатой кнопки
                content = document.querySelector('.tabcontent[data-tab="'+ id +'"]'), // берем таб с контентом для этой кнопки. т.е. с таким же значением data-tab
                activeButton = document.querySelector('.tabheader__item_active'),  // берем активную в данный момент кнопку по классу .tabheader__item_active
                activeContent = document.querySelector('.tabcontent_active'); // берем активный в данный момент таб с контентом. по классу .tabcontent_active
            
            activeButton.classList.remove('tabheader__item_active'); // убераем класс актив у текущей кнопки
            trigger.classList.add('tabheader__item_active'); // добавляем класс актив для нажатой кнопки 

            activeContent.classList.remove('tabcontent_active'); // убераем класс актив у текущего таба
            content.classList.add('tabcontent_active'); // добавляем класс актив табу от нажатой кнопки
            
        });
    }); // Все стили display прописаны в css



    // const tabsButtons = document.querySelectorAll('.tabheader__item');
    // const tabsContent = document.querySelectorAll('.tabcontent');
    // const tabsHeader = document.querySelector('.tabheader');

    // function hideTabContent(){
    //     tabsContent.forEach(element => {
    //         element.style.display = 'none';
    //     });

    //     tabsButtons.forEach(element => {
    //         element.classList.remove('tabheader__item_active');
    //     })
    // }
    
    // function showTabContent(i = 0){
    //     tabsContent[i].style.display = 'block';
    //     tabsButtons[i].classList.add('tabheader__item_active');
    // }

    // console.log(tabsButtons);
    // console.log(tabsContent);
    // console.log(tabsHeader);

    // hideTabContent();
    // showTabContent();

    // tabsHeader.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if(target && target.classList.contains('tabheader__item')){
    //         tabsButtons.forEach((element, i) => {
    //             if(target == element){
    //                 hideTabContent();
    //                 showTabContent(i); 
    //             }
    //         });
    //     }
    // });


});

