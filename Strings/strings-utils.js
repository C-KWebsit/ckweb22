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
    
    for (let i = 0; i < letters.length; i = i + 2) { 
        
        console.log((letters[i]));
    }

    return letters;
}