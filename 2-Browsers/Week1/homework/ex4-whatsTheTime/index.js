'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/

function addCurrentTime() {
  const createDiv = document.createElement('div');
  createDiv.style.padding = '2rem';
  createDiv.style.backgroundColor = 'tomato';
  createDiv.style.color = 'white';
  createDiv.style.fontSize = '4rem';
  const body = document.querySelector('body');
  body.style.display = 'flex';
  body.style.justifyContent = 'center';
  body.style.alignItems = 'center';
  body.style.height = '90vh';
  body.appendChild(createDiv);
  function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.querySelector('div').textContent = `${
      hour < 10 ? '0' + hour : hour
    }:${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  }
  setInterval(getTime, 1000);
}

window.addEventListener('load', addCurrentTime);
