function clock() {
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();
    day.innerHTML = new Date().getDate();
    year.innerHTML = new Date().getFullYear();
//Month number to month name conversion
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let i = new Date().getMonth();
    month.innerHTML =  monthNames[i] ;
}
let interval = setInterval(clock, 1000);

function playGreetings(e) {
    const audio = document.querySelector("audio");
    audio.play();
    }
