'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/
const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';
const nickName = document.querySelector('#nickname');
nickName.textContent = 'Ally';
const favFood = document.querySelector('#fav-food');
favFood.textContent = 'Pizza';
const homeTown = document.querySelector('#hometown');
homeTown.textContent = 'Turkey';
const liList = document.querySelectorAll('li');
liList.forEach((li) => li.classList.add('list-item'));
