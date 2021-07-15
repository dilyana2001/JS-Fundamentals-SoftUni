function getMin() {
    let min = Number.MAX_SAFE_INTEGER;

    function minNum(num) {
        if (num < min) {
            min = num
        }
    }
    for (let current of arguments) {
        minNum(current)
    }
    return min
}
// let getMinResult = getMin(2, 5, 10, 6, 34, 2, 6, -6, 4444, 12, -83);
// console.log(getMinResult)


function addNSubtr(a, b, c) {
    let add = (a, b) => a + b;
    let subtr = (a, b) => a - b
    return subtr(add(a, b), c)
}
// let result = addNSubtr(2, 5, 10);
// console.log(result)


function charInRange(a, b) {
    let first = a.charCodeAt();
    let second = b.charCodeAt();

    function charInLine(first, second) {
        let line = '';
        for (let i = first + 1; i < second; i++) {
            line += String.fromCharCode(i) + ' ';
        }
        return line
    }
    return first < second ? charInLine(first, second) : charInLine(second, first);
}
// let result = charInRange('g', 'b');
// console.log(result)


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

function oddEvenSum(num) {
    function splitNum(num) {
        let arr = num.toString().split('');
        return arr;
    }

    function evenOddSum(arr) {
        let sumOdd = 0;
        let sumEven = 0;
        for (i = 0; i < arr.length; i++) {
            let n = Number(arr[i]);
            (n % 2 === 0 ? sumEven += n : sumOdd += n);
        }
        return [sumEven, sumOdd]
    }
    let first = splitNum(num);
    let second = evenOddSum(first);
    let result = `Odd sum = ${second[1]}, Even sum = ${second[0]}`
    return result;
}
// console.log(oddEvenSum(1000435))




function palindrome(arr) {
    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('')
        return Number(reversedN) === n ? true : false
    }
    let result = '';
    for (let current of arr) {
        result += isPalindrome(current) + '\n'
    }
    return result;
}
// console.log(palindrome([123, 323, 421, 121]))



function passwordValidator(pass) {
    function passLength(str) {
        return str.length >= 6 && str.length <= 10 ? '' : 'Password must be between 6 and 10 characters\n';
    }

    function letterDigit(str) {
        let isCorrect = true;
        for (let char of str) {
            let code = char.charCodeAt();
            if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122) {
                isCorrect = false;
            }
        }
        return isCorrect ? '' : 'Password must consist only of letters and digits\n';
    }

    function twoDigit(str) {
        let count = 0;
        for (let digit of str) {
            digit = digit.charCodeAt();
            if (digit >= 48 && digit <= 57) {
                count++;
            }
        }
        return count >= 2 ? '' : 'Password must have at least 2 digits\n';
    }
    let errors = passLength(pass) + letterDigit(pass) + twoDigit(pass);
    return errors ? errors : 'Password is valid';
}
// console.log(passwordValidator('logIn'))
// console.log(passwordValidator('MyPass123'))
// console.log(passwordValidator('%%1h'))
// console.log(passwordValidator('MyPass3'))



function matrixNxN(n) {
    let row = (n) => `${n}  `.repeat(n)
    return (row(n) + '\n').repeat(n)
}
// console.log(matrixNxN(7))


function loadingBar(n) {
    function percents(n) {
        return '%'.repeat(n / 10);
    }

    function dots(n) {
        return '.'.repeat(10 - n / 10);
    }
    if (n === 100) {
        return `100% Complete!\n[${percents(n)}]`;
    } else if (n % 10 === 0) { // ako sa zakrygleni do desetica 4isla (10,20,30...)
        return `${n}% [${percents(n)}${dots(n)}]\nStill loading...`;
    }
}
// console.log(loadingBar(50));


function perfectNumber(n) {
    function findingDivisors(num) {
        let numbers = [1, ]
        for (let i = 2; i < num; i++) {
            if (num >= 1 && num % i === 0) {
                numbers.push(i)
            }
        }
        return numbers
    }

    function sumTheDivisors(arr) {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
        }
        return result
    }

    function printResult(n, result) {
        if (result === n) {
            return `We have a perfect number!`
        } else {
            return `It's not so perfect.`
        }
    }
    return printResult(n, sumTheDivisors(findingDivisors(n)))
}
// console.log(perfectNumber(6))
// console.log(perfectNumber(28))
// console.log(perfectNumber(1236498))



function factorialDivision(n1, n2) {
    function factorial(n) {
        let sum = 1;
        for (let i = 1; i <= n; i++) {
            sum *= i;
        }
        return sum;
    }

    function division(sum1, sum2) {
        sum1 = sum1 / sum2;
        return sum1;
    }
    return division(factorial(n1), factorial(n2)).toFixed(2);
}
// console.log(factorialDivision(5, 2))




function carWash(array) {
    function commands(array) {
        let value = 0;
        for (i = 0; i < array.length; i++) {
            let command = array[i];
            if (command === 'soap') {
                value += 10;
            } else if (command === 'water') {
                value *= 1.2;
            } else if (command === 'vacuum cleaner') {
                value *= 1.25;
            } else if (command === 'mud') {
                value *= .9;
            } else {
                return 'Error';
            }
        }
        return value;
    }
    return `The car is ${commands(array).toFixed(2)}% clean.`
}
// console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))


function numberModitification(n) {
    while (getAvrg(n) < 5) {
        n += '9'
    }
    return n

    function checkForAvrg(num) {
        let result = 0
        num = num.toString()
        for (let i = 0; i < num.length; i++) {
            result += Number(num[i])
        }
        return result
    }

    function getAvrg(n) {
        return checkForAvrg(n) / n.toString().length
    }
}

function numberModification(number) {
    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length; // reduce((a,b)=>a+b,0) // sybira do edna stoinost, kato zapo4va ot 0
    while (getDigitsAverage(number) < 5) number += '9';
    return number
}
// console.log(numberModification2(101))