// import functions and grab DOM elements
const stringButton = document.getElementById('string-button');
const numButton = document.getElementById('num-button');
const booButton = document.getElementById('boo-button');
const arrButton = document.getElementById('arr-button');
const objButton = document.getElementById('obj-button');



// initialize state

// set event listeners to update state and DOM
stringButton.addEventListener('click', function() {
    document.location.href = 'Strings/strings.html';

    // <a href="Strings/strings.html"> </a>;
});

numButton.addEventListener('click', function() {
    document.location.href = 'Numbers/numbers.html';
});
booButton.addEventListener('click', () => {
    console.log('whatup');

});
arrButton.addEventListener('click', () => {
    document.location.href = 'Arrays/array.html';
});

objButton.addEventListener('click', () => {
    document.location.href = 'Objects/objects.html';
    
});