// As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of
// his equipment -&gt; strings, separated by whitespace.
// You may receive the following commands:
//  Buy {equipment}
//  Trash {equipment}
//  Repair {equipment}
//  Upgrade {equipment}-{upgrade}
// If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't
// bought already.
// If you receive Trash command, delete the equipment if it exists.
// If you receive Repair command, you should repair the equipment if it exists and place it on last position.
// If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the
// following format: &quot;{equipment}:{upgrade}&quot;;
// Input / Consrtaints
// You will receive an array of strings. Each element of the array is a command.
//  In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by
// space.

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


// =================================================================================================================================================

// Write a function that receives an array of integers and array of string commands and executes them over the
// array. The commands are as follows:
//  add &lt;index&gt; &lt;element&gt; – adds element at the specified index (elements right from this position
// inclusively are shifted to the right).
//  addMany &lt;index&gt;&lt;element 1&gt; &lt;element 2&gt; … &lt;element n&gt; – adds a set of elements at the
// specified index.
//  contains &lt;element&gt; – prints the index of the first occurrence of the specified element (if exists) in the
// array or -1 if the element is not found.
//  remove &lt;index&gt; – removes the element at the specified index.
//  shift &lt;positions&gt; – shifts every element of the array the number of positions to the left (with
// rotation).
// o For example, [1, 2, 3, 4, 5] -&gt; shift 2 -&gt; [3, 4, 5, 1, 2]
//  sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o For example, [1, 2, 4, 5, 6, 7, 8] -&gt; [3, 9, 13, 8].
// print – stop receiving more commands and print the last state of the array.

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


// ====================================================================================================================================================

// Write a function that manipulates an array of numbers.
//  Add {number}: add a number to the end of the array
//  Remove {number}: remove number from the array
//  RemoveAt {index}: removes number at a given index
//  Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// Print the final state of the array (separated by single space).
// The input comes as array of strings. First element will be a string containing the array to manipulate. Every other
// command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.

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