// As a gladiator, Peter has cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of
// his equipment -&gt; strings, separated by whitespace.
// You may receive the following commands:
//  Buy {equipment}
//  Trash {equipment}
//  Repair {equipment}
//  Upgrade {equipment}-{upgrade}
// If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't
// bought already.
// If you receive Trash command, delete the equipment if it exists.
// If you receive Repair command, you should repair the equipment if it exists and place it on last position.
// If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the
// following format: '{equipment}:{upgrade}';
// Input / Consrtaints
// You will receive an array of strings. Each element of the array is a command.
//  In the first input element, you will receive Peter's inventory – sequence of equipment names, separated by
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
//  add &lt;index&gt; &lt;element&gt; – adds element at the specified index (elements right from this position
// inclusively are shifted to the right).
//  addMany &lt;index&gt;&lt;element 1&gt; &lt;element 2&gt; … &lt;element n&gt; – adds a set of elements at the
// specified index.
//  contains &lt;element&gt; – prints the index of the first occurrence of the specified element (if exists) in the
// array or -1 if the element is not found.
//  remove &lt;index&gt; – removes the element at the specified index.
//  shift &lt;positions&gt; – shifts every element of the array the number of positions to the left (with
// rotation).
// o For example, [1, 2, 3, 4, 5] -&gt; shift 2 -&gt; [3, 4, 5, 1, 2]
//  sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
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
//  Add {number}: add a number to the end of the array
//  Remove {number}: remove number from the array
//  RemoveAt {index}: removes number at a given index
//  Insert {number} {index}: inserts a number at a given index
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


// ==============================================================================================================================


// You will receive a string with even integers, separated by a '@'. This is our neighborhood. After that a series of
// Jump commands will follow, until you receive 'Love!' Every house in the neighborhood needs a certain number of
// hearts delivered by Cupid, in order to be able to celebrate Valentine’s Day. Those needed hearts are indicated by
// the integers in the neighborhood.
// Cupid starts at the position of the first house (index 0) and must jump by a given length. The jump commands will
// be in this format: 'Jump {length}'.
// Every time he jumps from one house to another, the needed hearts for the visited house are decreased by 2. If the
// needed hearts for a certain house become equal to 0 , print on the console 'Place {houseIndex} has
// Valentine's day.' If Cupid jumps to a house where the needed hearts are already 0, print on the console
// 'Place {houseIndex} already had Valentine's day.'.
// Keep in mind that Cupid can have a bigger jump length than the size of the neighborhood and if he does jump
// outside of it, he should start from the first house again.
// For example, we are given this neighborhood: 6@6@6. Cupid is at the start and jumps with a length of 2. He will end
// up at index 2 and decrease the needed hearts there by 2: [6, 6, 4]. Next he jumps again with a length of 2 and goes
// outside the neighborhood, so he goes back to the first house (index 0) and again decreases the needed hearts there:
// [4, 6, 4].
// Input
//  On the first line you will receive a string with even integers separated by '@' – the neighborhood and the
// number of hearts for each house.
//  On the next lines, until 'Love!' is received, you will be getting jump commands in this format: 'Jump
// {length}'.
// Output
// At the end print Cupid's last position and whether his mission was successful or not:
//  'Cupid's last position was {lastPositionIndex}.'
//  If each house has had a Valentine's day, print:
// o 'Mission was successful.'
//  If not, print the count of all houses that didn`t celebrate a Valentine's Day:
// o 'Cupid has failed {houseCount} places.'

// Constraints
//  The neighborhood`s size will be in the range [1…20]
//  Each house will need an even number of hearts in the range [2 … 10]
//  Each jump length will be an integer in the range [1 … 20]


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