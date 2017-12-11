const secHand = document.querySelector('.second');
const minHand = document.querySelector('.minute');
const hrHand = document.querySelector('.hour');

function setDate() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const minutes = currentTime.getMinutes();
  const minuteDegrees = ((minutes/60) * 360) + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  
  const hour = currentTime.getHours();
  const hourDegrees = ((hour/12) * 360 + 90);
  hrHand.style.transform = `rotate(${hourDegrees}deg)`;
  
  
  console.log('Time ' + hour + ":" + minutes + ":" + seconds);
}

setInterval(setDate, 1000);