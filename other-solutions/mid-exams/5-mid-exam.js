function bonusScoringSystem(arr) {
    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let maxNumber = 0
    let maxAttendances = 0
    for (let i = 0; i < arr.length; i++) {
        let current = 0;
        current = Number(arr[i]) / lectures * (5 + initialBonus);
        if (current >= maxNumber) {
            maxNumber = current;
            maxAttendances = Number(arr[i]);
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxNumber)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}
// bonusScoringSystem([
//         '5', '25', '30',
//         '12', '19', '24',
//         '16', '20'
//     ])
// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
// ])

function muOnline(str) {
    let health = 100;
    let bitcoin = 0;
    let counter = 0
    arr = str.split('|');
    for (let i = 0; i < arr.length; i++) {
        let [command, amount] = arr[i].split(' ');
        amount = Number(amount)
        if (command === 'potion') {
            counter++
            if (health + amount > 100) {
                amount = 100 - health
                health = 100
            } else health += amount
            console.log(`You healed for ${amount} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else if (command === 'chest') {
            counter++
            bitcoin += amount
            console.log(`You found ${amount} bitcoins.`)
        } else {
            counter++
            health -= amount
            if (health > 0) console.log(`You slayed ${command}.`)
            else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${counter}`)
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoin}`)
        console.log(`Health: ${health}`)
    }
}
// muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')


function inventory(arr) {
    let inventory = arr.shift().split(', ');
    arr.forEach(row => {
        let [command, item] = row.split(' - ');
        if (command === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Drop') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index, 1, oldItem, newItem);
            }
        } else if (command === 'Renew') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let element = inventory.splice(index, 1);
                inventory.push(element)
            }
        } else {
            console.log(inventory.join(', '))
        }
    })

}
// inventory([
//         'Iron, Sword',
//         'Drop - Bronze',
//         'Combine Items - Sword:Bow',
//         'Renew - Iron',
//         'Craft!'
//     ])
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
// 'Craft!'
// ])