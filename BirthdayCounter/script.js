const daysEl  = document.getElementById("days");
const hoursEl  = document.getElementById("hours");
const minutesEl  = document.getElementById("minutes");
const secondsEl  = document.getElementById("seconds");

const birthday = new Date("06/05/2023")

function countDown(){
    const currentDate = new Date();

    const distance= (birthday.getTime()-currentDate.getTime());


    let days = Math.floor(distance / (1000 * 60 * 60 * 24 ));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}




countDown()
var a = setInterval(countDown, 1000)

