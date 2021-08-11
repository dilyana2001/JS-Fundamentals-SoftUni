function pirates(arr) {
    let pirateTreasure = {};
    let commandParser = {
        'Plunder': (town, people, gold) => {
            pirateTreasure[town].people -= Number(people);
            pirateTreasure[town].gold -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (pirateTreasure[town].gold <= 0 || pirateTreasure[town].people <= 0) {
                delete pirateTreasure[town];
                console.log(`${town} has been wiped off the map!`);
            }
        },
        'Prosper': (town, gold) => {
            if (gold > 0) {
                pirateTreasure[town].gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${pirateTreasure[town].gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        },
        'End': () => {
            console.log(`Ahoy, Captain! There are ${Object.entries(pirateTreasure).length} wealthy settlements to go to:`);
            Object.entries(pirateTreasure).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].gold - a[1].gold)
                .map(x => console.log(`${x[0]} -> Population: ${x[1].people} citizens, Gold: ${x[1].gold} kg`));
        }
    }

    arr.forEach(line => {
        if (line.includes('||')) {
            let [town, people, gold] = line.split('||');
            people = Number(people);
            gold = Number(gold);
            if (!pirateTreasure.hasOwnProperty(town)) {
                pirateTreasure[town] = { people, gold };
            } else {
                pirateTreasure[town].people += people
                pirateTreasure[town].gold += gold
            }
        } else if (line.includes('=>')) {
            let [command, town, people, gold] = line.split('=>');
            commandParser[command](town, people, gold);
        } else if (line === 'End') {
            commandParser['End']();
        }
    })
}
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])