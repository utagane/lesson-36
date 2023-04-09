const promotionEnd = '2023-04-20';

function getRemainingTime(timeEnd){
    const t = Date.parse(timeEnd) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60);
    
    return{
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }
}

function setClock(selector, timeEnd){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer(){
        const t = getRemainingTime(timeEnd);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total <= 0){
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', promotionEnd);