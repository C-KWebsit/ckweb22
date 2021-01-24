export function countLetters(input1) {
    const string = input1.value;
    // console.log(string);
    const letsSee = string.length;
    // console.log(letsSee);
    return letsSee;  
}

export function countSpaces(input2) {
    const space = input2.value;
    
    const whiteSpaces = (space.split(' ').length - 1);

    return whiteSpaces;

}

export function everyOtherLetter(input3) {
    const letters = input3.value; 
    let result = '';
    
    for (let i = 0; i < letters.length; i = i + 2) { 
        result += letters[i];
        console.log((letters[i]));
    }

    return result;
}

export function reverseIt(input4) {
    const word = input4.value; 
    let result = '';

    for (let i = word.length - 1; i >= 0; i --) {
        result += word[i];
    }

    return result;
}

export function wordCount(input5) {
    const count = input5.value; 
    
    return count.trim().split(/\s+/).length; //why does this work??
}