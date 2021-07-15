function recursion(x) { // Рекурсия е самоповикваща се функция
    console.log(x);
    if (x > 0) { //Дъно на рекурсията, без него ще имаме бездънна функция.
        recursion(x - 1); // Функцията изпълнява същото като фор цикъл за принтиране на числата от 10 до 0
    }
}
// recursion(10)

function printHeader() {
    console.log('~~~~- {@} -~~~~');
    console.log('~ Certificate ~');
    console.log('~~~- ~---~ -~~~');
}
// printHeader();

function printName(nameArr) {
    console.log(`~~${nameArr[0]} ${nameArr[1]}~`);
}
// printName(['John', 'Smith']);

function formatGrade(grade) {
    if (grade < 3.00) {
        return `Fail (2)`;
    } else if (grade < 3.5) {
        return `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.5) {
        return `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.5) {
        return `Very good (${grade.toFixed(2)})`;
    } else {
        return `~~Excellent (${grade.toFixed(2)})~~`
    }
}
// console.log(formatGrade(4.6))

let mathPower = (a, b) => (a ** b);
// console.log(mathPower(2, 8))
// function pow(num, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//         result *= num;
//     }
//     console.log(result);
// }
// pow(2, 8)


//Functional Declaration
// printText('Upper SoftUni!')
// function printText(text) {
//     console.log(text);
// }
// printText('Lower SoftUni!')

// Functional Expression
// printText('SoftUni!') // Не може да се инициализира, защото трябва да се изнесе под функцията, която е създаддена с ЛЕТ
// let printText = function(text) {
//     console.log(text);
// }
// printText('SoftUni!');

function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));

    function swap(elements, i, j) { //nested function
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
}
// swapElements([2, 3, 4, 5, 6, 7, 8, 9]) //9 8 7 6 5 4 3 2


function pass(grade) {
    return grade >= 3;
}

function printCertificate(grade, nameArr) {
    if (pass(grade)) {
        printHeader();
        printName(nameArr);
        console.log(formatGrade(grade));
    } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
    }
}
// printCertificate(6, ['D', 'Nedelcheva'])

function getPrice(fruit) {
    if (fruit === 'banana') {
        return 0.5; // The String 'banana', returns number in totalPrice, because of the 'return' command in ifs
    } else if (fruit === 'apple') {
        return 0.2;
    }
}
let totalPrice = getPrice('banana') * 11;
// console.log(totalPrice);

//  coffee - 1.50
//  water - 1.00
//  coke - 1.40
//  snacks - 2.00
function order(str, n) {
    if (str === 'coffee') {
        return (1.5 * n).toFixed(2);
    } else if (str === 'water') {
        return (1 * n).toFixed(2);
    } else if (str === 'coke') {
        return (1.4 * n).toFixed(2);
    } else if (str === 'snacks') {
        return (2 * n).toFixed(2);
    }
}
// console.log(order('water', 5))




function getMax(firstNum, secondNum) {
    return Math.max(firstNum, secondNum);
}

function multiply(max, other) {
    return max * other;
}
let result = multiply(getMax(10, 20), 5);
// console.log(result);
let resultSecond = getMax(10, 20) * getMax(20, 50);
// console.log(resultSecond);


function isValid(i, arr) {
    return i >= 0 && i < arr.length;

}
let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(isValid(11, arr)) //false  proverka za element v masiv
// console.log(isValid(4, arr)) //true


//not a pure function
function multiplySecond(firstNum, secondNum, thirdNum) {
    let max = getMax(firstNum, secondNum)
    return max * thirdNum;
}
// console.log(multiplySecond(1, 2, 3, 4))

//PURE FUNCTION               doesn't contents console.log.
function example(a, b) {
    return a ** b;
}
// console.log(example(2, 8));


// number, strin , boolean - Primitive
// Array, objects - Refferent

//Primitive:
let text = 'SoftUni!';

function printText(myText) {
    console.log(myText);
}
// printText(text)  Wikame function i pri povikvaneto i slagame za input promenlivata 'text', koqto e deklarirana. 'myText' priema stoinostta na 'text'


//Arrow frunction
let add = (a, b) => a + b
    // console.log(add(2, 9))



function repeatString(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}
// console.log(repeatString('abc', 3))
// console.log(repeatString('Srting', 2))

function calculator(numOne, numTwo, operator) {
    // multiply, divide, add, subtract
    switch (operator) {
        case 'add':
            return numOne + numTwo
        case 'subtract':
            return numOne - numTwo
        case 'multiply':
            return numOne * numTwo
        case 'divide':
            return numOne / numTwo
    }
}
// console.log(calculator(5, 5, 'multiply'))


function signCheck(numOne, numTwo, numThree) {
    let result = ''
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive'
    } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Negative'
    } else if (numOne < 0 && numTwo < 0 && numThree >= 0) {
        result = 'Positive'
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative'
    } else if (numOne >= 0 && numTwo < 0 && numThree >= 0) {
        result = 'Negative'
    } else if (numOne >= 0 && numTwo >= 0 && numThree < 0) {
        result = 'Negative'
    } else if (numOne < 0 && numTwo >= 0 && numThree < 0) {
        result = 'Positive'
    } else {
        result = 'Positive'
    }
    return result
}




//exercise:




let getMin2 = (numOne, numTwo, numThree) => Math.min(numOne, numTwo, numThree);

function getMin3(numOne, numTwo, numThree) {
    return Math.min(numOne, numTwo, numThree);
}
// console.log(getMin3(2, 5, 3))




function addandSubtract(numOne, numTwo, numThree) {
    return (numOne + numTwo) - numThree
}


function oddAndEvenSum(num) {
    let sumOdd = 0;
    let sumEven = 0;
    num = num.toString().split('');
    for (i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        (n % 2 === 0 ? sumEven += n : sumOdd += n);
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
// console.log(oddAndEvenSum(1000435));