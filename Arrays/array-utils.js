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
    const empArr = [];

    for (let i = 0; i < poemArray.length; i ++) {
        let letter = poemArray[i];
        let alphaWord = alphaLets[letter];
        empArr.push(alphaWord);
    }
    return empArr;
}

export function gen5rdElement() { 
    const twentyArray = new Array(20);
    let emptyArray = [];

    for (let i = 0; i < twentyArray.length; i++) {
        emptyArray.push(Math.floor(Math.random() * 50));
    }
    let fifthElement = emptyArray[5];

    return [emptyArray, fifthElement];

}

export function genLowestNumber() { 

    const twentyArray = new Array(20);
    let randArray = [];
    
    for (let i = 0; i < twentyArray.length; i++) {
        randArray.push(Math.floor(Math.random() * 100));
    }
    let smallestNum = Math.min.apply(Math, randArray);

    return [randArray, smallestNum];  
}
