function clock() {
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    let year = document.querySelector('#year');
    
    let h = new Date().getHours();
    hours.innerHTML = (h < 10) ? `0${h}`: h;

    let min = new Date().getMinutes();
    minutes.innerHTML = (min < 10) ? `0${min}` : min;
    let sec = new Date().getSeconds();
    seconds.innerHTML = (sec < 10) ? `0${sec}` : sec;
    day.innerHTML = new Date().getDate();
    year.innerHTML = new Date().getFullYear();

    //Month number to month name conversion
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let i = new Date().getMonth();
    month.innerHTML = monthNames[i];

    let y = new Date().getFullYear();
    let d = new Date().getDate();
    let now = [i, d, y, h, min, sec];
    //[11, 31, 2019, 10, 5, 25]
    // clockChime();
    let theNow = [11, 31, 2019, 23, 59, 59];
    if( JSON.stringify(now) == JSON.stringify(theNow)) {
        clockChime();
        playGreetings();
    }
   
}
let interval = setInterval(clock, 1000);
function clockChime() {
   const chime = document.querySelector('#chime');
   chime.play();
}

function playGreetings(e) {
    const audio = document.querySelector("audio");
    audio.play();
}
