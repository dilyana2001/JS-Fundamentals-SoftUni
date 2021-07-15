function counterStrike(arr) {
    let energy = Number(arr.shift());
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'End of battle') {
            console.log(`Won battles: ${count}. Energy left: ${Math.max(0,energy)}`);
            break;
        }
        if (energy - Number(arr[i]) < 0) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;
        }
        energy -= Number(arr[i]);
        count++;
        if (count % 3 === 0 && count != 0) energy += count;
    }
}



// counterStrike(([
//         "100",
//         "10",
//         "10",
//         "10",
//         "1",
//         "2",
//         "3",
//         "73",
//         "10"
//     ]))
    // counterStrike(([
    //     "200",
    //     "54",
    //     "14",
    //     "28",
    //     "13",
    //     "End of battle"
    // ]))

// function softuniRecep(input) {
//     let allStudents = Number(input.pop())
//     let studentPerHour = input.map(Number).reduce((a, b) => a + b, 0)
//     let time = 0

//     while (allStudents > 0) {
//         time++
//         if (time % 4 != 0) allStudents -= studentPerHour
//     }
//     console.log(`Time needed: ${time}h.`)
// }

function shootForWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'End') {
            console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
            break;
        }
        let index = Number(arr[i]);
        let number = targets[index]
        if (index != -1 && index < targets.length && number != -1) {
            for (j = 0; j < targets.length; j++) {
                if (targets[j] === -1) continue;
                targets[j] <= number ? targets[j] += number : targets[j] -= number;
            }
            targets[index] = -1
            count++;
        }
    }
}


// shootForWin(["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"
// ])


function movingTarget(arr) {
    let numbers = arr.shift().split(' ').map(Number);
    arr.forEach(row => {
        let [command, index, power] = row.split(' ');
        index = Number(index);
        power = Number(power);
        if (command == 'End') {
            console.log(numbers.join('|'));
        } else if (command == 'Shoot' && numbers[index] != undefined) {
            if (power < numbers[index]) {
                numbers[index] -= power;
            } else {
                numbers.splice(index, 1);
            }
        } else if (command == 'Add') {
            if (index < numbers.length && index > -1) {
                numbers.splice(index, 0, power);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command == 'Strike') {
            let start = index - power;
            let end = index + power;
            if (start < 0 || end >= numbers.length) {
                console.log(`Strike missed!`);
            } else {
                numbers.splice(start, power * 2 + 1);
            }
        }
    })
}
// movingTarget([
//         "52 74 23 44 96 110",
//         "Shoot 5 10",
//         "Shoot 1 80",
//         "Strike 2 1",
//         "Add 22 3",
//         "End"
//     ])
// movingTarget([
//     "1 2 3 4 5",
//     "Strike 0 1",
//     "End"
// ])