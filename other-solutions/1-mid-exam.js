function computerStore(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > 0) sum += Number(arr[i])
        else if (Number(arr[i]) <= 0) console.log(`Invalid price!`)
        if (arr[i] === 'special' && sum !== 0 || arr[i] === 'regular' && sum !== 0) {
            console.log(`Congratulations you've just bought a new computer!`)
            console.log(`Price without taxes: ${sum.toFixed(2)}$`)
            let taxes = sum * .2
            if (arr[i] === 'special') sum = (sum + taxes) - (sum + taxes) * .1
            else if (arr[i] === 'regular') sum += taxes
            console.log(`Taxes: ${taxes.toFixed(2)}$`)
            console.log('-----------');
        }
    }
    sum === 0 ? console.log(`Invalid order!`) : console.log(`Total price: ${(sum).toFixed(2)}$`)
}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])
// computerStore([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ])
// computerStore([
//     'regular'
// ])


function numbers(input) {
    let arr = input.split(' ').map(Number).filter((x, i, newArr) => {
        let avg = newArr.reduce((previous, current) => previous + current, 0) / newArr.length;
        return x > avg;
    }).sort((a, b) => b - a).splice(0, 5);
    return arr.length === 0 ? `No` : arr.join(' ');
}



function theLift(arr) {
    let passengers = Number(arr.shift());
    let wagon = arr.shift().split(' ').map(Number);
    for (let i = 0; i < wagon.length; i++) {
        while (passengers >= 1 && wagon[i] <= 3) passengers-- && wagon[i]++;
    }
    if (passengers > 0) console.log(`There isn't enough space! ${passengers} people in a queue!\n${wagon.join(' ')}`);
    else if (passengers === 0 && !wagon.includes(3) && !wagon.includes(2) && !wagon.includes(1) && !wagon.includes(0)) console.log(wagon.join(' '));
    else if (passengers <= 0) console.log(`The lift has empty spots!\n${wagon.join(' ')}`);
}
// theLift([
//     "15",
//     "0 0 0 0 0"
// ])
// theLift([
//     "20",
//     "0 2 0"
// ])
// theLift([
//     "20",
//     "0 0 0 0 0"
// ])





function blackFlag(arr) {
    let days = Number(arr.shift());
    let amount = Number(arr.shift());
    let target = Number(arr.shift());
    let total = 0;

    for (let i = 1; i <= days; i++) {
        total += amount;
        if (i % 3 == 0) total += amount / 2
        if (i % 5 == 0) total -= total * .3
    }

    if (total < target) console.log(`Collected only ${(100/(target / total)).toFixed(2)}% of the plunder.`)
    else console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`)
}

// blackFlag(([
//     "5",
//     "40",
//     "100"
// ]))
// blackFlag(([
//     "10",
//     "20",
//     "380"
// ]))





function treasureHunt(arr) {
    let chest = arr.shift().split('|');
    arr.forEach(row => {
        let [command, ...args] = row.split(' ');
        if (command === 'Yohoho!') {
            if (chest.length !== 0) {
                let averageGain = 0;
                chest.forEach(item => averageGain += item.length);
                console.log(`Average treasure gain: ${(averageGain/chest.length).toFixed(2)} pirate credits.`);
            } else console.log(`Failed treasure hunt.`);
        } else if (command === 'Loot') loot(...args);
        else if (command === 'Drop') drop(...args);
        else if (command === 'Steal') steal(...args);
    })

    function loot(...items) {
        items.forEach(item => {
            if (!chest.includes(item)) chest.unshift(item);
        })
    }

    function drop(index) {
        if (index < chest.length && index > -1) {
            let item = chest.splice(index, 1);
            chest.push(item);
        }
    }

    function steal(count) {
        if (count > chest.length) count = chest.length;
        let stolen = chest.splice(chest.length - count, count);
        console.log(stolen.join(', '));
    }
}
// treasureHunt([
//     "Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"
// ])




function manOWar(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maximumHC = Number(arr.shift());

    for (let row of arr) {
        let [command, ...args] = row.split(' ');
        if (command == 'Retire') {
            console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
            console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
        } else if (command == 'Fire') {
            let index = Number(args[0]);
            let damage = Number(args[1]);
            if (index < warShip.length && index > -1) {
                if (warShip[index] - damage > 0) warShip.splice(index, 1, warShip[index] - damage);
                else {
                    warShip[index] = 0;
                    console.log(`You won! The enemy ship has sunken.`);
                    return
                }
            }
        } else if (command == 'Defend') {
            let startIndex = Number(args[0]);
            let endIndex = Number(args[1]);
            let damage = Number(args[2])
            if (startIndex < pirateShip.length && startIndex > -1 && endIndex < pirateShip.length && endIndex > -1) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return
                    }
                }
            }
        } else if (command == 'Repair') {
            let index = Number(args[0]);
            let health = Number(args[1])
            if (index < pirateShip.length && index > -1) pirateShip[index] = Math.min((pirateShip[index] + health), maximumHC);
        } else if (command == 'Status') {
            console.log(`${pirateShip.filter(x => x < (maximumHC * 0.2)).length} sections need repair.`);
        }
    }
}


//3 sections need repair.
//You lost! The pirate ship has sunken.
// manOWar([
//     "2>3>4>5>2",
//     "6>7>8>9>10>11",
//     "20",
//     "Status",
//     "Fire 2 3",
//     "Defend 0 4 11",
//     "Repair 3 18",
//     "Retire"
// ])

//2 sections need repair.
// Pirate ship status: 135
// Warship status: 205
// manOWar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"
// ])



function manOWar(arr) {
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maximumHC = Number(arr.shift());

    for (let row of arr) {
        let [command, ...args] = row.split(' ');
        if (command == 'Retire') {
            let pirateShipReduce = pirateShip.reduce((a, b) => a + b, 0);
            let warshipReduce = warShip.reduce((a, b) => a + b, 0);
            console.log(`Pirate ship status: ${pirateShipReduce}`);
            console.log(`Warship status: ${warshipReduce}`);
        } else if (command == 'Fire') {
            let hasFinished = fire(...args);
            if (hasFinished) {
                return;
            }
        } else if (command == 'Defend') {
            let hasFinished = defend(...args);
            if (hasFinished) {
                return;
            }
        } else if (command == 'Repair') repair(...args);
        else if (command == 'Status') console.log(`${pirateShip.filter(x => x < (maximumHC * 0.2)).length} sections need repair.`);
    }

    function fire(index, damage) {
        index = Number(index);
        damage = Number(damage);
        if (index < warShip.length && index > -1) {
            if (warShip[index] - damage > 0) warShip.splice(index, 1, warShip[index] - damage);
            else {
                warShip[index] = 0;
                console.log(`You won! The enemy ship has sunken.`);
                return true;
            }
        }
    }

    function defend(startIndex, endIndex, damage) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        damage = Number(damage);
        if (startIndex < pirateShip.length && startIndex >= 0 && endIndex < pirateShip.length && endIndex >= 0) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return true;
                }
            }
        }
    }

    function repair(index, health) {
        index = Number(index);
        if (index < pirateShip.length && index > -1) pirateShip[index] = Math.min((pirateShip[index] + Number(health)), maximumHC);
    }
}



function memoryGame(arr) {
    let sequence = arr.shift().split(' ')
    let count = 0
    for (let row of arr) {
        let [first, second] = row.split(' ')
        if (first != 'end') {
            first = Number(first)
            second = Number(second)
            if (first < sequence.length && first > -1 && second < sequence.length && second > -1) {
                if (sequence[first] == sequence[second]) {
                    count++
                    console.log(`Congrats! You have found matching elements - ${sequence[first]}!`)
                    sequence.splice(first, 1, null)
                    sequence.splice(second, 1)
                    let index = sequence.indexOf(null)
                    sequence.splice(index, 1)
                } else {
                    count++
                    console.log(`Try again!`)
                }
            } else if (sequence.length == 0) {
                continue
            } else {
                count++
                sequence.splice(sequence.length / 2, 0, `-${count}a`, `-${count}a`)
                console.log(`Invalid input! Adding additional elements to the board`)

            }
        } else {
            if (sequence.length == 0) {
                console.log(`You have won in ${count} turns!`)
            } else {
                console.log(`Sorry you lose :(\n${sequence.join(' ')}`)
            }
        }
    }
}
// memoryGame([
//         "1 1 2 2 3 3 4 4 5 5",
//         "1 0",
//         "-1 0",
//         "1 0",
//         "1 0",
//         "1 0",
//         "end"
//     ])
memoryGame([
        "a 2 4 a 2 4",
        "0 3",
        "0 2",
        "0 1",
        "0 1",
        "end"
    ])
    // memoryGame([
    //     "a 2 4 a 2 4",
    //     "4 0",
    //     "0 2",
    //     "0 1",
    //     "0 1",
    //     "end"
    // ])