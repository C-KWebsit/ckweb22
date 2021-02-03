import alphabetSoup from '../data.js';

export function arrayElements(input1) { 
    const elementLength = input1.value; 
    let randomArray = []; 

    for (let i = 0; i < elementLength; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }

    return randomArray;
}

export function oddIndex(input2) { 
    const elementIndex = arrayElements(input2); 
    const oddArray = [];
    
    for (let i = 0; i < elementIndex.length; i += 2) { 
        oddArray.push((elementIndex[i]));   
       
    }
    return oddArray;
}

export function genAcrostic(input3) { 
    const poemArray = input3.value;
    const alphaLets = alphabetSoup;
    // console.log(alphaLets);
    // console.log(poemArray);
    const empArr = [];

    for (let i = 0; i < poemArray.length; i ++) {
        let letter = poemArray[i];
        console.log(letter);
        let alphaWord = alphaLets[letter];
        console.log(alphaWord);
        empArr.push(alphaWord);
    }





    // const poemArray = input3; 
    // let alphaObject = Object.entries(alphabetSoup);
    // alphabetSoup.a;
    // alphabetSoup['a'];

    // let alphaLets = [];
    // console.log(alphaLets.j);
    // console.log(array[19]);

    return empArr;
}

export function gen5rdNumber() { 

    const twentyArray = new Array(20);
    let randArray = [];
    
    for (let i = 0; i < twentyArray.length; i++) {
        randArray.push(Math.floor(Math.random() * 100));
    }
    let smallestNum = Math.min.apply(Math, randArray);

    return [randArray, smallestNum];  
}
