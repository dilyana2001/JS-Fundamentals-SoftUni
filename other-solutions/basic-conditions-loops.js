function print(num1, num2, num3) {
    console.log(num1, num2, num3)
    console.log(num1, num2, num3)
    console.log(num1, num2, num3)
}
// print(1, 2, 3)
// print(['1', 'animani'])

// повдигане на степен : х на у степен -> х ** у

function solve(dayOfWeek) {
    console.log(dayOfWeek > 5 ? 'Weekend' : 'Work day')
        //  (condition ? true : false)
        // day = 0;
        // if(day > 5 ){
        //     console.log('Weekend')
        // } else {
        //     console.log('Work day')
        // }
}

function solve1() {
    let num = -2
    do { // влиза, изпълнява , докато ....
        console.log(num);
        num++
    } while (num >= 1 && num <= 10)

}

function student(name, age, grade) {
    console.log(`name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
} // input with some values

function last(n) {
    let sum = 0
        // for (let current = 1; current <= Number.MAX_SAFE_INTEGER; current += 2) {
        //     if (n === 0) {
        //         break;
        //     }
        //     console.log(current);
        //     sum += current
        //     n--
        // }
        // console.log(`Sum: ${sum}`)
    let currentNumber = 1
    for (let i = 0; i < n; i++, currentNumber += 2) {
        console.log(currentNumber)
        sum += currentNumber
    }
    console.log(`Sum: ${sum}`)
}

function stringToArray(str) {
    console.log(str.split())
}


function removeFirstElement(arr) {
    let a = arr[0];
    console.log(a, arr)
    a = arr.shift()
    console.log(a, arr)
}

// removeFirstElement(["Ivo", "Joanna", "Petter", "Nasko", "Didi"])


function numbers(n) {
    // 1
    // 2 2
    // 3 3 3
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += i + ' '
        }
        console.log(line);
    }
}

// numbers(9)

function password(arr) {
    let username = arr.shift()
    let pass = username.split('').reverse().join('')
    for (let i = 0; i < arr.length; i++) {
        if (i >= 3) {
            console.log(`User ${username} blocked!`)
            break
        }
        if (arr[i] === pass) {
            console.log(`User ${username} logged in.`)
        } else {
            console.log(`Incorrect password. Try again.`)
        }
    }
}
// password(['Acer', 'login', 'go', 'let me in', 'recA'])


function match(toReplace, symbol, toCompare) {
    // let finalText = '';
    // for (let index = 0; index < toReplace.length; index++) {
    //     if (toReplace[index] === '_') {
    //         finalText += symbol
    //     } else {
    //         finalText += toReplace[index]
    //     }
    // }
    // console.log(finalText === toCompare ? 'Matched' : 'Not Matched')
    toReplace = toReplace.replace('_', symbol)
    console.log(toReplace === toCompare ? 'Matched' : 'Not Matched')

}
// match('Str_ng', 'I', 'StrIng')

function test(n1, n2, n3) {
    console.log(n1 + n2 + n3 % 1 === 0 ? n1 + n2 + n3 + ' - Integer' : n1 + n2 + n3 + ' - Float')
}
// test(9, 100, 1.1)

function names(first, second, arrow) {
    console.log(`${first}${arrow}${second}`)
}
// names(
//     'John',
//     'Smith',
//     '->')