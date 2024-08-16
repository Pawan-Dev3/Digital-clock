const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const ampmEle = document.getElementById("am-pm");
const body = document.getElementById("clock");
const greeting = document.getElementById("greeting");

setInterval(() => {
  const date = new Date();
  const currentTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const timeAndAmPm = currentTime.split(" ");
  const time = timeAndAmPm[0].split(":");

  hoursEle.innerText = time[0];
  minutesEle.innerText = time[1];
  secondsEle.innerText = time[2];

  ampmEle.innerText = timeAndAmPm[1];

  if (currentTime >= "06:00:00 AM" && currentTime < "05:00:00 PM") {
    body.style.backgroundImage = "url('images/morning.avif')";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.overflow = "hidden";
  } 
}, 10);
