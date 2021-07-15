function softUniReception(strArr) {
    strArr = strArr.map(Number);
    let firstEmployee = strArr.shift();
    let secondEmployee = strArr.shift();
    let thirdEmployee = strArr.shift();
    let students = strArr.shift();
    let hours = students / (firstEmployee + secondEmployee + thirdEmployee);
    hours = Math.ceil(hours);
    let breakHours = 0;
    for (let i = 1; i <= hours; i++) {
        if (i % 3 === 0) {
            breakHours++
        }

    }
    return `Time needed: ${hours+breakHours}h.`
}
// console.log(softUniReception(['5', '6', '4', '20']));
// console.log(softUniReception(['1', '2', '3', '45']));

function arrayModifier(strArr) {
    let arr = strArr.shift();
    arr = arr.toString().split(' ').map(Number);
    for (let line of strArr) {
        let [command, index1, index2] = line.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        if (command === 'swap') {
            let temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;
        } else if (command === 'multiply') {
            arr[index1] *= arr[index2]
        } else if (command === 'decrease') {
            arr = arr.map(x => x - 1)
        } else {
            break;
        }
    }
    return arr.join(', ');
}
// console.log(arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ]));
// console.log(arrayModifier(['23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ]))


function numbers(input) {
    let arr = input
        .split(' ')
        .map(Number)
        .filter((x, i, newArr) => {
            let avg = newArr.reduce((previous, current) =>
                previous + current, 0) / newArr.length;
            return x > avg
        })
        .sort((a, b) => b - a)
        .splice(0, 5);
    return arr.length === 0 ? `No` : arr.join(' ');
}
// console.log(numbers('1'))
// console.log(numbers('10 20 30 40 50'))



function shopingList(strArr) {
    let list = strArr.shift().split('!')
    for (let line of strArr) {
        let [command, ...product] = line.split(' ')
        if (command === 'Urgent') {
            if (!list.includes(...product)) {
                list.unshift(...product)
            }
        } else if (command === 'Unnecessary') {
            if (list.includes(...product)) {
                let index = list.indexOf(...product)
                list.splice(index, 1)
            }
        } else if (command === 'Correct') {
            let [oldItem, newItem] = product
            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem)
                list.splice(index, 1, newItem)
            }
        } else if (command === 'Rearrange') {
            if (list.includes(...product)) {
                let index = list.indexOf(...product)
                let newItem = list.splice(index, 1)
                list.push(newItem)
            }
        } else {
            console.log(list.join(', '))
        }
    }


}
// shopingList([
//     'Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!'
// ])
// shopingList([
//     'Milk!Pepper!Salt!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Grapes',
//     'Correct Pepper Onion',
//     'Rearrange Grapes',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
// ])\


function heartDelivery(strArr) {
    let count = 0
    let path = strArr.shift().split('@').map(Number)
    while (strArr[0] !== 'Love!') {
        let [jump, index] = strArr[0].split(' ').map(Number)
        count += index
        if (count >= path.length) {
            count = 0
        }
        let number = path[count]
        if (number > 0) {
            path.splice(count, 1, number -= 2)
            if (number === 0) {
                console.log(`Place ${count} has Valentine's day.`)
            }
        } else if (number <= 0) {
            console.log(`Place ${count} already had Valentine's day.`)
        }
        strArr.shift()
    }
    let failed = path.filter(x => x > 0)
    if (strArr[0] === 'Love!')
        console.log(`Cupid's last position was ${count%path.length}.`)
    if (failed.length <= 0) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${failed.length} places.`)
    }
}
// heartDelivery([
//     '10@10@10@2',
//     'Jump 1',
//     'Jump 2',
//     'Love!'
// ])
// heartDelivery([
//     '2@4@2',
//     'Jump 2', 
//     'Jump 2', 
//     'Jump 8', 
//     'Jump 3', 
//     'Jump 1', 
//     'Love!' 
// ])