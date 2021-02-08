import alphabetSoup from '../data.js';
import { arr1, arr2, arr3, arr4 } from './arrayData.js';

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

export function printArr1() {
    let arrayData = arr1;
    let variable = '';
    
    for (let i = 0; i < arrayData.length; i ++) {
       
        variable += `${Object.keys(arrayData[i])}: ${Object.values(arrayData[i])}\n`;
    }
        
    return variable;
}

export function printTheValue() { 
    let theData = arr1; 
    let variable = ''; 

    for (let i = 0; i < theData.length; i ++) {
        variable += `${Object.values(theData[i])}\n,`;
    }
    return variable;
}

export function valueAndDataType() { 
    let secondArr = arr2;
    let empArr = '';

    for (let i = 0; i < secondArr.length; i ++) {
        empArr += `${typeof(secondArr[i])} :`;
        if (typeof(secondArr[i]) === 'object') {
            empArr += `${Object.values(secondArr[i])} , `;
        }
        if (typeof(secondArr[i]) === 'boolean') {
            empArr += `${secondArr[i]} , `;
        } if (typeof(secondArr[i]) === 'string') {
            empArr += `${secondArr[i]} , `;
        } if (typeof(secondArr[i]) === 'number') {
            empArr += `${secondArr[i]} , `;
        }  
    }
    return empArr;
}
export function nestedArrayElements() { 
    let nestedArray = arr3;
    let empArr = '';

    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            empArr += `${nestedArray[i][j]}, `;
        }
    }
    return empArr;
}
export function secondElement() { 
    let arr4Data = arr4;
    let empString = '';
    for (let elem2 of arr4Data) {
        empString += `${elem2[1]}, `;
    }
    // for (let i = 0; i < arr4Data.length; i++) {
    //     empArr += `${arr4Data[i][1]}, `;
    // }
    return empString;
}


