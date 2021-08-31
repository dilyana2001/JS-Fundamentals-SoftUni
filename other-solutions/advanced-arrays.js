

function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let exist = '';
    for (let line of arr) {
        let [command, item] = line.split(' ');
        if (command === 'Buy') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(item)) {
                exist = inventory.indexOf(item);
                inventory.splice(exist, 1)
            }
        } else if (command === 'Repair') {
            if (inventory.includes(item)) {
                exist = inventory.indexOf(item);
                inventory.splice(exist, 1);
                inventory.push(item);
            }
        } else if (command === 'Upgrade') {
            exist = item.split('-');
            if (inventory.includes(exist[0])) {
                let upgradeItem = inventory.indexOf(exist[0]);
                item = exist.join(':')
                inventory.splice(upgradeItem + 1, 0, item);
            }
        }
    }
    return inventory.join(' ')
}
// // expected output:
// // SWORD SWORD:Steel Bag
// // Spear
// console.log(gladiatorInventory([
//     'SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel'
// ]))




function arrayManipulationsExercises(arr, conditions) {
    let contains = '';
    for (let line of conditions) {
        let [command, index, ...elements] = line.split(' ');
        index = Number(index);
        elements = elements.map(Number);
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
// // expected output:
// // -1
// // [ 2, 3, 5, 9, 8, 7, 6,
// // 5, 1 ]
// console.log(arrayManipulationsExercises([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
//     'shift 1', 'print'
// ]))



function arrayManipulations(arr) {
    let array = arr.shift().split(' ');
    for (let line of arr) {
        let [command, firstArg, secondArg] = line.split(' ');
        if (command === 'Add') {
            array.push(firstArg);
        } else if (command === 'Remove') {
            let index = array.indexOf(firstArg);
            if (index !== -1) {
                array.splice(index, 1);
            }
        } else if (command === 'RemoveAt') {
            let index = Number(firstArg);
            array.splice(index, 1)
        } else if (command === 'Insert') {
            let index = Number(secondArg);
            array.splice(index, 0, firstArg);
        }

    }
    return array.map(Number).join(' ');
}
// // expected output:
// // 4 53 6 8 43 3
// console.log(arrayManipulations([
//     '4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'
// ]))





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

//expected output
// Place 2 has Valentine's day.
// Place 0 has Valentine's day.
// Place 0 already had Valentine's
// day.
// Place 0 already had Valentine's
// day.
// Cupid's last position was 1.
// Cupid has failed 1 places.
// heartDelivery([
//     '2@4@2',
//     'Jump 2', 
//     'Jump 2', 
//     'Jump 8', 
//     'Jump 3', 
//     'Jump 1', 
//     'Love!' 
// ])
