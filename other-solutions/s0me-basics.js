function ages(age) {
    if (age < 0) {
        console.log('out of bounds')
    } else if (age < 3) {
        console.log('baby')
    } else if (age < 14) {
        console.log('child')
    } else if (age < 20) {
        console.log('teenager')
    } else if (age < 66) {
        console.log('adult')
    } else {
        console.log('elder')
    }
}
// ages(65)

function rounding(n, p) {
    console.log(parseFloat(n.toFixed(p)))
}
// rounding(3.1415926535897932384626433832795, 2)


function division(n) {
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
        console.log(`Not divisible`)
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
        if (day === 'Friday') {
            sum *= 10.9
        } else if (day === 'Saturday') {
            sum *= 15.6
        } else if (day === 'Sunday') {
            sum *= 16
        }
        if (n >= 100) {
            sum *= .9
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
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log('yes')
    } else {
        console.log('no')
    }
}
// leapYear(1984) //yes 
// leapYear(2003) //no
// leapYear(4) //yes

function prinNSum(start, end) {
    let sum = 0
    let sequence = ''
    for (let i = start; i <= end; i++) {
        sequence += `${i} `
        sum += i
    }
    console.log(sequence)
    console.log(`Sum: ${sum}`)
}
// prinNSum(0, 26)

function triangleNumbers(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i + ' ') // za izpisvane na edin red
        }
    }
}
// triangleNumbers(3)


function multiplicationTable(n) {
    for (let i = 1; i < 11; i++) {
        console.log(`${n} X ${i} = ${n*i}`)
    }
}
// multiplicationTable(5)

function login(strArr) {
    let pass = strArr[0]
    for (let i = 1; i < strArr.length; i++) {
        for (let k = 0; k < pass.length; k++) {

        }
        for (let r = (strArr[i].length - 1); r > 0; r--)
            if (strArr[i][r] === pass[i])
                console.log(strArr[i][r])
    }
}
// login(['Acer', 'login', 'go', 'let me in', 'recA'])

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