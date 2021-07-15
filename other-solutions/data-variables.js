function sumMultiplieByTwo(n) {
    n = Number(n)
    console.log(n * 2)
}
// sumMultiplieByTwo(['20'])

function grade(n) {
    n = Number(n)
    console.log(n >= 5.5 ? 'Excellent' : 'Not excellent')
}
// grade(5.5)

function numbersToFive() {
    for (let i = 1; i < 6; i++) {
        console.log(i)
    }
}
// numbersToFive()

function fromNToOne(n) {
    n = Number(n)
    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
}
// fromNToOne(16)

function fromNToM(n, m) {
    n = Number(n)
    m = Number(m)
    for (let i = n; i >= m; i--) {
        console.log(i)
    }
}
// fromNToM('6', '2')

function student(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}
// student('Marry', 16, 2.1426)

function months(n) {
    n = Number(n)
    let day = ''
    switch (n) {
        case 1:
            day = 'January'
            break
        case 2:
            day = 'February'
            break
        case 3:
            day = 'March'
            break
        case 4:
            day = 'April'
            break
        case 5:
            day = 'May'
            break
        case 6:
            day = 'June'
            break
        case 7:
            day = 'July'
            break
        case 8:
            day = 'August'
            break
        case 9:
            day = 'September'
            break
        case 10:
            day = 'October'
            break
        case 11:
            day = 'November'
            break
        case 12:
            day = 'December'
            break
        default:
            day = 'Error!'
            break
    }
    console.log(day)
}
// months('12')

function languages(language) {
    switch (language) {
        case 'USA':
        case 'England':
            language = 'English'
            break
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            language = 'Spanish'
            break
        default:
            language = 'unknown'
            break
    }
    console.log(language)
}
// languages('USA')
// languages('Germany')

function theatrePromotion(day, age) {
    let price = ''
    if (age >= 0 && age <= 18) {
        if (day === 'Weekday') {
            price = '12$'
        } else if (day === 'Weekend') {
            price = '15$'
        } else if (day === 'Holiday') {
            price = '5$'
        } else {
            price = 'Error!'
        }
    } else if (age > 18 && age <= 64) {
        if (day === 'Weekday') {
            price = '18$'
        } else if (day === 'Weekend') {
            price = '20$'
        } else if (day === 'Holiday') {
            price = '12$'
        } else {
            price = 'Error!'
        }
    } else if (age > 64 && age <= 122) {
        if (day === 'Weekday') {
            price = '12$'
        } else if (day === 'Weekend') {
            price = '15$'
        } else if (day === 'Holiday') {
            price = '10$'
        } else {
            price = 'Error!'
        }
    } else {
        price = 'Error!'
    }
    console.log(price)
}
// theatrePromotion('Holiday', -12)

function divisibleByTree() {
    for (let i = 3; i < 100; i++) {
        if (i % 3 === 0) {
            console.log(i)
        }
    }
}
// divisibleByTree()

function sumOfOddNumbers(n) {
    let sum = 0
    for (let i = 1; i < 2 * n; i += 2) {
        console.log(i)
        sum += i
    }
    console.log(`Sum: ${sum}`)
}
// sumOfOddNumbers(3)

function ages(age) {
    age = Number(age)
    if (age >= 0 && age <= 2) {
        console.log('baby')
    } else if (age >= 3 && age < 14) {
        console.log('child')
    } else if (age >= 14 && age < 20) {
        console.log('teenager')
    } else if (age >= 20 && age < 66) {
        console.log('adult')
    } else if (age >= 66) {
        console.log('elder')
    } else {
        console.log('out of bounds')
    }
}
// ages('20')
// ages('1')
// ages('100')

function rounding(n, m) {
    console.log(parseFloat(n.toFixed(m)))
}
// rounding(10.5, 3)

function division(n) {
    n = Number(n)
    if (n % 10 === 0) {
        console.log(`The number is divisible by 10`)

    } else if (n % 7 === 0) {
        console.log(`The number is divisible by 7`)

    } else if (n % 6 === 0) {
        console.log(`The number is divisible by 6`)

    } else if (n % 3 === 0) {
        console.log(`The number is divisible by 3`)

    } else if (n % 2 === 0) {
        console.log(`The number is divisible by 2`)

    } else {
        console.log(`Not divisible`);
    }
}
// division(30)


function vacation(n, group, day) {
    let sum = n
    if (group === 'Students') {
        if (day === 'Friday') {
            sum *= 8.45
        } else if (day === 'Saturday') {
            sum *= 9.8
        } else if (day === 'Sunday') {
            sum *= 10.46
        }
        if (n >= 30) {
            sum *= .85
        }
    } else if (group === 'Business') {
        if (n >= 100) {
            n -= 10
            sum = n
        }
        if (day === 'Friday') {
            sum *= 10.9
        } else if (day === 'Saturday') {
            sum *= 15.6
        } else if (day === 'Sunday') {
            sum *= 16
        }
    } else if (group === 'Regular') {
        if (day === 'Friday') {
            sum *= 15
        } else if (day === 'Saturday') {
            sum *= 20
        } else if (day === 'Sunday') {
            sum *= 22.5
        }
        if (n >= 10 && n <= 20) {
            sum *= .95
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
// vacation(40,
//     'Regular',
//     'Saturday')

function leapYear(year) {
    year = Number(year)
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            console.log('yes')
        } else {
            console.log('no')
        }
    } else {
        console.log('no')
    }
}
// leapYear('1900')
// leapYear('2000')
// leapYear('1984')
// leapYear('2003')
// leapYear('4')

function bitcoin(input) {
    let bitcoinCounter = 0
    let dayCounter = 0
    let total = 0
    let isTheDay = false
    for (let index = 0; index < input.length; index++) {
        if ((index + 1) % 3 === 0 && index != 0) {
            input[index] = input[index] * .7
            total += input[index]
        } else {
            total += input[index]
        }
        if (!isTheDay) {
            if (input[index] * 67.51 > 11949.16) {
                dayCounter = index + 1
                isTheDay = true
            }
        }
    }
    total *= 67.51
    while (total >= 11949.16) {
        total -= 11949.16
        bitcoinCounter++
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`)
    if (dayCounter !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayCounter} `)
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`)


}
// bitcoin([100, 200, 300])





function pyramid(width, increment) {
    let stepsCounter = 0
    let gold = 0
    let stone = 0
    let marble = 0
    let lazuri = 0
    let area = 0
    let totalStone = 0
    let totalMarble = 0
    let totalLazuri = 0
    if (width % 2 === 0) {
        gold = 2 * 2
    } else {
        gold = 1 * 1
    }
    for (let i = width; i > 2; i -= 2) {
        stepsCounter++
        if (stepsCounter % 5 === 0) {
            area = i * i
            stone = i - 2
            stone *= stone
            lazuri = area - stone
            totalLazuri += lazuri
            totalStone += stone
        } else {
            area = i * i
            stone = i - 2
            stone *= stone
            marble = area - stone
            totalMarble += marble
            totalStone += stone
        }
    }

    console.log(`Stone required: ${Math.ceil(totalStone*increment)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble*increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLazuri*increment)}`)
    console.log(`Gold required: ${Math.ceil(gold*increment)}`)
    console.log(`Final pyramid height: ${Math.floor(((stepsCounter + 1) * increment))}`)
}
// pyramid(11, 1)
// pyramid(12, 1)
// pyramid(23, 0.5)
// pyramid(11, 0.75)

// The pyramid is built with 1x1 blocks with height equal to the given increment. The first step of the pyramid has
// width and length equal to the given base and every next step is reduced by 2 blocks (1 from each side). The height
// of every step equals the given increment. See the drawing for an example. White steps are covered in marble, blue
// steps are covered in lapis lazuli (every fifth layer from the bottom), and yellow steps are made entirely out of gold
// (top-most step).

function biggestNumber(a, b, c) {
    let max = Math.max(a, b, c);

    let min = -Math.max(-a, -b, -c);

    let mid = (a + b + c) -
        (max + min);

    console.log(`${max}`)
    console.log(`${mid}`)
    console.log(`${min}`)
}

// biggestNumber(-2, 1, 3)
// biggestNumber(0, 0, 2)
// biggestNumber(2, 1, 3)


function lastDigit(n) {
    let data = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }
    let last = n.toString().split('').pop()
    console.log(data[last])
}
// lastDigit(456)

function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000; //86400000 milliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay);
    console.log(`${nextDate.getFullYear()}-${(nextDate.getMonth() + 1)}-${nextDate.getDate()}`);
}
// calcNextDay(2016, 9, 30) 
// calcNextDay(1988, 10, 29)

function reverseString(string) {
    let reversedString = string.split('').reverse('').join('')
    console.log(reversedString);
}
// reverseString('SoftUni') //inUtfoS


function distance(x1, y1, x2, y2) {
    x1 -= x2
    y1 -= y2
    console.log(Math.sqrt(x1 * x1 + y1 * y1))
}
// distance(2.34, 15.66, -13.55, -2.9985)


function symbol(string, symbol, result) {
    let res = string.replace('_', symbol)
    console.log(res === result ? 'Matched' : 'Not Matched')
}
// symbol('Str_ng', 'I', 'Strong')
// symbol('Str_ng', 'i', 'String')

function ingOrFloat(n1, n2, n3) {
    let result = n1 + n2 + n3;
    console.log(result % 1 === 0 ? `${result} - Integer` : `${result} - Float`)
}
// ingOrFloat(9, 100, 1.1)
// ingOrFloat(100, 200, 303)

function amazingNumbers(n) {
    let amazing = n.toString().split('')
    let sum = 0
    for (let i = 0; i < amazing.length; i++) {
        sum += Number(amazing[i])
    }
    console.log(sum.toString().includes('9') ? `${n} Amazing? True` : `${n} Amazing? False`)
}
// amazingNumbers(1233)
// amazingNumbers(999)

function gramophone(band, album, song) {
    let sum = (band.length * album.length) * (song.length / 2)
    sum /= 2.5
    console.log(`The plate was rotated ${Math.ceil(sum)} times.`);
}
// gramophone('Black Sabbath', 'Paranoid', 'War Pigs')

function fuelMoney(distance, passengers, price) {
    let liter = 0
    liter = ((passengers * 0.100) + 7) * distance
    price *= liter / 100

    console.log(`Needed money for that trip is ${price.toFixed(2)} lv`)
}
// fuelMoney(260, 9, 2.49)

function centureisToMinutes(centure) {
    // 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
    let years = Math.floor(100 * centure)
    let days = Math.floor(365.2422 * years)
    let hours = Math.floor(days * 24)
    let minutes = Math.floor(hours * 60)
    console.log(`${centure} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
// centureisToMinutes(5)
// centureisToMinutes(1)

function sumDigits(n) {
    let num = n.toString().split('')
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    console.log(sum)
}
// sumDigits(245678)

function lowerUpper(l) {
    if (l === l.toUpperCase()) {
        console.log('upper case');
    } else {
        console.log('lower case');
    }
}
// lowerUpper('l')


function calculator(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
    }
    console.log(result.toFixed(2));
}
// calculator(2, '-', 4)


function gladiatorExpenses(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = 0;
    let sword = 0;
    let shield = 0;
    let armor = 0;
    while (lostCount > 0) {
        for (let lost = lostCount; lost >= 1; lost--) {
            if (lost % 2 === 0) {
                helmet++;
            }
            if (lost % 3 === 0) {
                sword++;
            }
            if (lost % 6 === 0) {
                shield++;
            }
            if (lost % 12 === 0) {
                armor++;
            }
            lostCount--;
        }
    }
    console.log(`Gladiator expenses: ${(helmetPrice * helmet + swordPrice * sword + shieldPrice * shield + armorPrice * armor).toFixed(2)} aureus`)
}
// gladiatorExpenses(7, 2, 3, 4, 5)
// gladiatorExpenses(23, 12.50, 21.50, 40, 200)


function spiceMustFlow(n) {
    let dayCounter = 0;
    let totalAmount = 0;
    let middleAmount = 0;
    while (n >= 100) {
        middleAmount = n - 26
        n -= 10;
        totalAmount += middleAmount
        dayCounter++;
    }
    console.log(dayCounter);
    console.log(totalAmount -= 26);
}
// spiceMustFlow(111)
// spiceMustFlow(450)
// spiceMustFlow(200)


function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let result = ''
        for (let j = 1; j <= i; j++) {
            result += `${i} `
        }
        console.log(result)
    }
}
// triangle(3)

function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let number = i.toString().split('')
        let sum = 0
        for (let j = 0; j < number.length; j++) {
            sum += Number(number[j])
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }
    }
}
// specialNumbers(15)

// function tripleLatinas(n) {
//     let start = String.fromCharCode(97)
//     let end = String.fromCharCode(97 + n)
//     let string = ''
//     for (let i = start; i < end; i++) {
//         string += i
//     }
//     console.log(end)
// }
// tripleLatinas(3)

function digitswithWords(string) {
    switch (string) {
        case 'zero':
            console.log(0)
            break
        case 'one':
            console.log(1)
            break
        case 'two':
            console.log(2)
            break
        case 'three':
            console.log(3)
            break
        case 'four':
            console.log(4)
            break
        case 'five':
            console.log(5)
            break
        case 'six':
            console.log(6)
            break
        case 'seven':
            console.log(7)
            break
        case 'eight':
            console.log(8)
            break
        case 'nine':
            console.log(9)
            break
    }
}
// digitswithWords('nine')




function primeNumberChecker(n) {
    // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
    switch (n) {
        case 2:
        case 3:
        case 5:
        case 7:
        case 11:
        case 13:
        case 17:
        case 19:
        case 23:
        case 29:
        case 31:
        case 37:
        case 41:
        case 43:
        case 47:
        case 53:
        case 59:
        case 61:
        case 67:
        case 71:
        case 71:
        case 73:
        case 79:
        case 83:
        case 89:
        case 97:
            console.log('true')
            break
        default:
            console.log('false')
            break

    }
}
primeNumberChecker('41')

function countTheWords(input) {
    let text = input[0];
    let counter = 1;
    for (i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            counter++;
        }
    }
    if (counter <= 10) {
        console.log(`The message was sent successfully!`);
    } else {
        console.log(`The message is too long to be send! Has ${counter} words.`);
    }
}
// countTheWords(["This message has ten words and you can send it 66 ggg!"])