function sumFirstAndLast(strArr) {
    strArr = strArr.map((x) => Number(x));
    let first = strArr.shift();
    let last = strArr.pop();
    return first + last
}
// console.log(sumFirstAndLast(['20', '30', '40']))

function negativeNpositive(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr.join('\n');
}
// console.log(negativeNpositive([7, -2, 8, 9]))

function firstNlastKNumbers(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);
    return firstK.join(' ') + '\n' + lastK.join(' ')
}
// console.log(firstNlastKNumbers([2, 7, 8, 9]))

function lastKNumbersSequence(n, k) {
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let innerSeq = seq.slice(-k);
        let sum = 0;
        for (let j = 0; j < innerSeq.length; j++) {
            sum += innerSeq[j];
        }
        seq[i] = sum;
    }
    return seq.join(' ')
}

function processOddNumbers(arr) {
    return arr.filter((n, i) => i % 2 !== 0) //wzemame indeksa
        .map((x) => x * 2)
        .reverse()
        .join(' ');
}
// console.log(processOddNumbers([10, 15, 20, 25]))
// console.log(processOddNumbers([3, 0, 10, 4, 7, 3]))

function smallestTqoNumbers(arr) {
    arr.sort((a, b) => a - b);
    return `${arr[0]} ${arr[1]}`
}
// console.log(smallestTqoNumbers([30, 15, 50, 5]))

function listOfProducts(strArr) {
    return strArr.sort()
        .map((p, i) => `${i+1} ${p}`)
        .join('\n')
}
// console.log(listOfProducts(['Potatoes',
//     'Tomatoes',
//     'Onions',
//     'Apples'
// ]))

function arrayManipulations(arr) {
    let array = arr.shift().split(' ')
    arr.forEach(line => {
        let [command, ...args] = line.split(' ');
        if (command === 'Add') {
            array.push(args[0]);
        } else if (command === 'Remove') {
            if (array.indexOf(args[0]) !== -1) {
                array.splice(array.indexOf(args[0]), 1);
            }
        } else if (command === 'RemoveAt') {
            array.splice(args[0], 1)
        } else if (command === 'Insert') {
            array.splice(args[1], 0, args[0]);
        }
    })
    return array.map(Number).join(' ');
}
// console.log(arrayManipulations(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'
// ]));

// exercise


function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());
    for (let line of arr) {
        let [commandOne, commandTwo] = line.split(' ');
        if (commandOne === 'Add') {
            wagons.push(Number(commandTwo));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                let current = wagons[i];
                commandOne = Number(commandOne)
                if (current + commandOne <= capacity) {
                    wagons[i] += commandOne;
                    break;
                }
            }
        }
    }
    return wagons.join(' ')
}
// console.log(train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'
// ]))

function distinctArray(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (!newArr.includes(current)) {
            newArr.push(current);
        }
    }
    return newArr
}
// console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]))

function sorting(arr) {
    let newArr = []
    arr.sort((a, b) => b - a)
    for (let i = 0; arr.length; i++) {
        newArr.push(arr.shift(arr[i]))
        newArr.push(arr.pop(arr[i]))
    }
    return newArr.join(' ')
}
// console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));



function bombNumbers(numbers, theBomb) {
    let [bombN, power] = theBomb;
    let copyNumbers = numbers.slice(0);
    for (let i = 0; i < copyNumbers.length; i++) {
        if (copyNumbers[i] === bombN) {
            let index = numbers.indexOf(bombN);
            let start = Math.max(0, index - power);
            let deleteCount = 2 * power + 1;
            if (index !== -1) {
                numbers.splice(start, deleteCount);
            }
        }

    }
    let sum = 0;
    for (j = 0; j < numbers.length; j++) {
        sum += numbers[j];
    }
    return sum; // 80/100
}
// console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])); 
// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));



function searchForANumber(numbers, conditions) {
    let [amount, startDelete, element] = conditions;
    let newNumbers = [];
    for (let i = 0; i < amount; i++) {
        newNumbers.push(numbers[i]);
    }
    newNumbers.splice(0, startDelete);
    let counter = 0;

    for (let j = 0; j < newNumbers.length; j++) {
        if (newNumbers[j] === element) {
            counter++
        }
    }

    return `Number ${element} occurs ${counter} times.`
}
// console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]))


function arrayManipulationsExercises(arr, conditions) {
    let contains = '';
    for (let line of conditions) {
        let [command, index, ...elements] = line.split(' ');
        index = Number(index);
        elements = elements.map(Number); // za6toto elements e masiv i s map iskame da obyrnem vsi4ki elementi v number
        if (command === 'add' || command === 'addMany') {
            arr.splice(index, 0, ...elements);
        } else if (command === 'contains') {
            contain = arr.indexOf(index);
            contains += `${contain}\n`;
        } else if (command === 'remove') {
            arr.splice(index, 1);
        } else if (command === 'shift') {
            let rotations = index % arr.length;
            let shiftArr = arr.splice(0, rotations);
            arr.push(...shiftArr);
        } else if (command === 'sumPairs') {
            for (let i = 0; i < arr.length; i++) {
                let secondEl = arr[i + 1] ? arr[i + 1] : 0;
                arr[i] += secondEl;
                arr.splice(i + 1, 1)
            }
        } else if (command === 'print') {
            return contains + `[ ${arr.join(', ')} ]`
        }
    }
}

// console.log(arrayManipulationsExercises([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']))
// console.log(arrayManipulationsExercises([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
//     'shift 1', 'print', 'sumPairs'
// ]))

// console.log(arrayManipulationsExercises([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]))



function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    arr.map(row => {
        let [command, item] = row.split(' ');
        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1)
            }
        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1);
                inventory.push(item);
            }
        } else if (command === 'Upgrade') {
            let exist = item.split('-');
            if (inventory.includes(exist[0])) {
                item = exist.join(':')
                inventory.splice(inventory.indexOf(exist[0]) + 1, 0, item);
            }
        }
    })
    return inventory.join(' ');
}

console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']))
console.log(gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]))

function equalNeighbors(arr) {
    let count = 0;
    let numberOfColumns = arr.length; // 2D  
    let numberOfRows = arr[0].length; // matrix 
    arr = arr.toString().split('').join('').split(',');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && (i + 1) % numberOfRows !== 0) {
            count++
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[j + numberOfRows]) {
            count++
        }
    }

    return count;
}
// console.log(equalNeighbors([
//     [2, 2, 5, 7, 4],
//     [4, 0, 5, 3, 4],
//     [2, 5, 5, 4, 2],
// ]))
// console.log(equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]))
// console.log(equalNeighbors([
//     ['test', 'yes', 'yo',

//         'ho'
//     ],
//     ['well', 'done', 'yo',
//         '6'
//     ],
//     ['not', 'done', 'yet',
//         '5'
//     ]
// ]))


// function bunnyKill(arr) {
//     let coordinates = arr.pop().split(' ')
//     let numberOfColumns = arr.length; // 2D  
//     let numberOfRows = arr[0].split(' ').length; // matrix
//     let position = 0
//     let result = 0
//         // arr = arr.join(' ').split(' ').map(Number)
//     for (let line of coordinates) {
//         let [col, row] = line.split(',').map(Number)
//         position = Number(arr[col].split(' ')[row])
//             // console.log(position)
//             //up
//         col -= 1
//         let up = 0
//         up = Number(arr[col].split(' ')[row])

//         result = position - up
//         arr = arr.splice(col, 1, result)


//     }

//     return arr
// }
function bunnyKill(arr) {
    let bombCells = arr.pop().split(' ').map(str => str.split(',').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));
    let damage = 0;
    let killCounter = 0;
    for (let i = 0; i < bombCells.length; i++) {
        let bombRow = bombCells[i][0];
        let bombCol = bombCells[i][1];
        let bombValue = matrix[bombRow][bombCol];
        if (bombValue <= 0) {
            continue;
        }
        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, arr.length - 1);
        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, arr[row].length - 1);
            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue;
            }
        }
        killCounter++;
        damage += bombValue;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                damage += matrix[row][col];
                killCounter++;
            }
        }
    }
    console.log(damage);
    console.log(killCounter);
}
// console.log(bunnyKill([ // 60 6
//     '10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0'
// ]));
// bunnyKill([ // 70 7
//     '5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1'
// ])


function houseParty(strArr) {

}
// houseParty([
//     'Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!'
// ])


function sortArrayTwoCriteria(strArr) {
    strArr = strArr.sort((a, b) => {
        a.length - b.length
        if (a.length === b.length) {
            return a.localeCompare(b)
        } else {
            return a.length - b.length
        }
    })
    return strArr.map(a => `${a}`).join('\n')
}
// console.log(sortArrayTwoCriteria([
//     'gamma',
//     'alpha',
//     'beta',

// ]))

// function orbit(arr){
// let col = arr[0]
// let row = arr[1]
// let colPosition = arr[2]
// let rowPosition = arr[3]
// for(let i=colPosition)
//
// }
// // orbit([4, 4, 0, 0])
// // orbit([5, 5, 2, 2])
// // orbit([3, 3, 2, 2])