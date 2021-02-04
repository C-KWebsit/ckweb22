import { arrayElements, oddIndex, genAcrostic, genLowestNumber, gen5rdElement } from './array-utils.js';
import alphabetSoup from '../data.js';


const exerciseButton1 = document.getElementById('submit1'); 
const input1 = document.getElementById('input1');
const answer1 = document.getElementById('exercise-box-1');

const exerciseButton2 = document.getElementById('submit2');
const input2 = document.getElementById('input2');
const answer2 = document.getElementById('exercise-box-2');

const exerciseButton3 = document.getElementById('submit3');
const input3 = document.getElementById('input3');
const answer3 = document.getElementById('exercise-box-3');

const exerciseButton4 = document.getElementById('submit4');
const input4 = document.getElementById('input4');
const answer4 = document.getElementById('exercise-box-4');

const exerciseButton5 = document.getElementById('submit5');
const input5 = document.getElementById('input5');
const answer5 = document.getElementById('exercise-box-5');


exerciseButton1.addEventListener('click', () => { 
    // console.log('im in the buttonw!');

    answer1.textContent += arrayElements(input1);

});

exerciseButton2.addEventListener('click', () => { 
    // console.log('yellow mellow fellow');

    answer2.textContent += oddIndex(input2);
});

exerciseButton3.addEventListener('click', () => {
    
    // console.log(acrostic);

    answer3.textContent += genAcrostic(input3);
});
exerciseButton4.addEventListener('click', () => {

    let res = gen5rdElement();

    answer4.textContent += `In the array of ${res[0]} the fifth element is ${res[1]}`;
});


exerciseButton5.addEventListener('click', () => { 
    let res = genLowestNumber();

    answer5.textContent += `${res[0]} and the smallest number of this array is ${res[1]}`;
});