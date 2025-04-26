// let targetDate = new Date("April 26 2025 00:00:00").getTime()

// function timer(){
//     let today = new Date().getTime()
//     let distance = targetDate - todayDate;
//     let days = Math.floor(distance/1000/60/60/24);
//     let hours = Math.floor(distance/1000/60/60)%24;
//     let minits = Math.floor(distance/1000/60)%60;
//     let secends = Math.floor(distance/1000)%60;
// }

// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// setInterval(()=>{

   
    
     
// let currentTime = new Date();


// hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
// min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
// sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();


// },1000)


let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Set countdown time (e.g., 1 hour, 30 minutes, 0 seconds)
let totalSeconds = (1 * 60 * 60) + (30 * 60); // 1hr 30min

const countdown = setInterval(() => {
  if (totalSeconds <= 0) {
    clearInterval(countdown);
    hrs.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    return;
  }

  totalSeconds--;

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hrs.innerHTML = String(hours).padStart(2, '0');
  min.innerHTML = String(minutes).padStart(2, '0');
  sec.innerHTML = String(seconds).padStart(2, '0');
}, 1000);


