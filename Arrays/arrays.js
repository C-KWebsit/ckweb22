import { arrayElements, oddIndex, genAcrostic, genLowestNumber, gen5rdElement, printArr1, printTheValue, valueAndDataType, nestedArrayElements, secondElement } from './array-utils.js';

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
const answer4 = document.getElementById('exercise-box-4');

const exerciseButton5 = document.getElementById('submit5');
const answer5 = document.getElementById('exercise-box-5');

const exerciseButton6 = document.getElementById('submit6');
const answer6 = document.getElementById('exercise-box-6');

const exerciseButton7 = document.getElementById('submit7');
const answer7 = document.getElementById('exercise-box-7');

const exerciseButton8 = document.getElementById('submit8');
const answer8 = document.getElementById('exercise-box-8');

const exerciseButton9 = document.getElementById('submit9');
const answer9 = document.getElementById('exercise-box-9');

const exerciseButton10 = document.getElementById('submit10');
const answer10 = document.getElementById('exercise-box-10');


exerciseButton1.addEventListener('click', () => { 
   
    answer1.textContent += arrayElements(input1);

});

exerciseButton2.addEventListener('click', () => { 
    
    answer2.textContent += oddIndex(input2);
});

exerciseButton3.addEventListener('click', () => {
    
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

exerciseButton6.addEventListener('click', () => { 
    let array = printArr1();
    
    answer6.innerHTML += array;
    
});

exerciseButton7.addEventListener('click', () => {
    let kValue = printTheValue();
    
    answer7.innerHTML += kValue;
});

exerciseButton8.addEventListener('click', () => {
    let dValue = valueAndDataType();
   
    answer8.innerHTML += dValue;
});

exerciseButton9.addEventListener('click', () => {
    let arrValue = nestedArrayElements();
    
    answer9.innerHTML += arrValue;

});

exerciseButton10.addEventListener('click', () => { 
    let elementTwo = secondElement();
    
    answer10.innerHTML += elementTwo;
});



