import { obj1, obj2, obj3 } from './objectsData.js';

export function findObjectKeys() {
    const firstObj = obj1;
    // console.log(firstObj);
    let empString = '';

    empString += `The keys of this object are: ${Object.keys(firstObj)}.`;

    return empString;
}

export function findObjectValues() { 
    const firstObj = obj1; 

    let empString = Object.values(firstObj);
    let blueBowl = JSON.stringify(empString);
    blueBowl = blueBowl.replace('[', '');
    blueBowl = blueBowl.replace(']', '');
    blueBowl = blueBowl.replace(/"/g, '\'');
    console.log(blueBowl);

    return `The values of this object are: ${blueBowl}`; 

}

export function findFruitAndColor() {
    const firstObj = obj1;
    let empBowl = '';
    let theFruit = '';
    let theColor = '';
    let catchFruit = Object.keys(firstObj);
    // console.log(catchFruit);
    for (let item of catchFruit) {
        theFruit = (item);
        theColor = (firstObj[item]['color']);
        empBowl += (` ${theFruit}: ${theColor}, `);
    }

    return empBowl;
}

export function findRedFruit() { 
    const firstObj = obj1;
    // console.log(firstObj);
    let empBowl = '';
    let theFruit = '';
    let theColor = '';
    let catchFruit = Object.keys(firstObj);
    // console.log(catchFruit);
    for (let item of catchFruit) {
        theFruit = (item);
        theColor = firstObj[item]['color'];
        if (firstObj[item]['color'] === 'red') {
            empBowl += (`${theFruit}: ${theColor} `);
        }
    }
    return empBowl;
}

export function findVeggies() { 
    const secondObj = obj2;
    const theVeggies = secondObj.veggies;

    return theVeggies;
}

export function findTheFoods() {
    const secondObj = obj2; 
    const theFoods = Object.values(secondObj);

    return ` ${theFoods} `;

}

export function findUsernames() {
    const thirdObj = obj3;
    // let theName = '';
    let theUsername = '';
    let userPeople = Object.keys(thirdObj);
    
    for (let item of userPeople) { 
        // theName = (item);
        // console.log(theName);
        theUsername += ` ${thirdObj[item]['username']} , `;
        // console.log(theUsername);
        
    }
    return theUsername;
}

export function findPasswords() { 
    const thirdObj = obj3; 
    let thePasswords = ''; 
    let userPeople = Object.keys(thirdObj);
    // console.log(userPeople);
    for (let item of userPeople) { 
        thePasswords += ` ${thirdObj[item]['password']} ,\n`;
    }
    
    return thePasswords;
}

export function enterUserName(input9) { 
    const thirdObj = obj3;
    // console.log(thirdObj);
    const userInput = input9.value;
    // console.log(userInput);
    // let theUsername = '';
    let userPeople = Object.keys(thirdObj);

    for (let item of userPeople) { 
        if (userInput === thirdObj[item]['username']) {
            return `${thirdObj[item]['security_question']}`;
        }   
    }
    return 'user not found' ; 
}