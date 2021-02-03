import { arrayElements, oddIndex, genAcrostic } from './array-utils.js';
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

exerciseButton1.addEventListener('click', () => { 
    // console.log('im in the buttonw!');

    answer1.textContent += arrayElements(input1);

});

exerciseButton2.addEventListener('click', () => { 
    // console.log('yellow mellow fellow');

    answer2.textContent += oddIndex(input2);
});

exerciseButton3.addEventListener('click', () => {
    const acrostic = alphabetSoup;
    // console.log(acrostic);

    answer3.textContent += genAcrostic(input3);
});