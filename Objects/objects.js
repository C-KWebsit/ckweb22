import { findObjectKeys, findObjectValues, findFruitAndColor, findRedFruit, findVeggies, findTheFoods, findUsernames, findPasswords, enterUserName } from './object-utils.js';

const exerciseButton1 = document.getElementById('submit1');
const answer1 = document.getElementById('exercise-box-1');

const exerciseButton2 = document.getElementById('submit2');
const answer2 = document.getElementById('exercise-box-2');

const exerciseButton3 = document.getElementById('submit3');
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
const input9 = document.getElementById('input9');
const answer9 = document.getElementById('exercise-box-9');

exerciseButton1.addEventListener('click', () => { 
    //  console.log('you can do all things');

    const displayKeys = findObjectKeys();

    answer1.innerHTML += displayKeys;

});

exerciseButton2.addEventListener('click', () => { 
    // console.log('through Christ');
    const displayValues = findObjectValues();

    answer2.innerHTML += displayValues;

});

exerciseButton3.addEventListener('click', () => { 
    const displayFandC = findFruitAndColor(); 

    answer3.innerHTML += displayFandC;

});

exerciseButton4.addEventListener('click', () => { 
    const displayRedFruit = findRedFruit();
    
    answer4.innerHTML += displayRedFruit;

});

exerciseButton5.addEventListener('click', () => { 
    const displayVeggies = findVeggies();
    // console.log('help meeeee');
    answer5.innerHTML += displayVeggies;
});

exerciseButton6.addEventListener('click', () => { 
    const displayFoods = findTheFoods();

    answer6.innerHTML += displayFoods;
});

exerciseButton7.addEventListener('click', () => { 
    const displayUserNames = findUsernames();
    // console.log('hello from the other sideeee');
    answer7.innerHTML += displayUserNames;
});

exerciseButton8.addEventListener('click', () => { 
    const displayPasswords = findPasswords();
    answer8.innerHTML += displayPasswords; 
});

exerciseButton9.addEventListener('click', () => { 
    const userNameCheck = enterUserName(input9);
    // console.log('yo yo yooooo');

    answer9.innerHTML += userNameCheck;

});