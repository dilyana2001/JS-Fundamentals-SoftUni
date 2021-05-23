// You have initial health 100 and initial coins 0. You will be given a string, representing the dungeons rooms. Each
// room is separated with &#39;|&#39; (vertical bar): 'room1|room2|room3…'
// Each room contains item or a monster and a number, separated by space. ('item/monster number')
//  If the first part is 'potion': you are healed with the number in the second part. But your health cannot
// exceed your initial health (100). Print: 'You healed for {0} hp.'
// After that, print your current health: 'Current health: {0} hp.'
//  If the first part is 'chest': You&#39;ve found some coins, the number in the second part. Print: 'You found {0}
// coins.'
//  In any other case you are facing a monster, you are going to fight.
// The second part of the room, contains the attack of the monster. You should remove the monster&#39;s attack
// from your health.
// o If you are not dead (health &lt;= 0) you&#39;ve slain the monster, and you should print ('You slayed
// {monster}.')
// o If you&#39;ve died, print 'You died! Killed by {monster}.' and your quest is over.
// Print the best room you`ve manage to reach: 'Best room: {room}'.
// If you managed to go through all the rooms in the dungeon, print on the next three lines:
// 'You&#39;ve made it!', 'Coins: {coins}', 'Health: {health}'.

function dungeonestDark(array) {
    array = array.join(',').split('|').join(' ').split(' ');
    let health = 100;
    let roomCounter = 0;
    let coins = 0;
    let healed = 0;
    for (let index = 0; index < array.length; index += 2) {
        let string = array[index];
        let number = Number(array[index + 1]);
        if (string === 'potion') {
            roomCounter++;
            healed = health;
            health += number;
            if (health > 100) {
                health = 100;
            }
            current = health;
            healed = current - healed
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${current} hp.`);
        }
        if (string === 'chest') {
            roomCounter++;
            coins += number;
            console.log(`You found ${number} coins.`);
        }
        if (string !== 'chest' && string !== 'potion') {
            roomCounter++;
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${string}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            } else {
                console.log(`You slayed ${string}.`);
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
// // expected output:
// // You slayed cat.
// // You healed for 10 hp.
// // Current health: 100 hp.
// // You slayed orc.
// // You found 10 coins.
// // You slayed snake.
// // You found 110 coins.
// // You&#39;ve made it!
// // Coins: 120
// // Health: 65
// dungeonestDark([
//     'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'
// ])