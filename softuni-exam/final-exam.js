function passReset(arr) {
    let password = arr.shift()
    let result = ''
    while (arr[0] != 'Done') {
        let [command, ...args] = arr[0].split(' ')
        if (command === 'TakeOdd') {
            password = password.split('')
            password.forEach((e, i) => i % 2 == 1 ? result += password[i] : false)
            console.log(result)
            password = result
        } else if (command === 'Cut') {
            let [index, length] = args
            index = Number(index)
            length = Number(length)
            let firstPart = password.substring(0, index)
            let secondPart = password.substring(index + length)
            password = firstPart + secondPart;
            console.log(password)
        } else if (command === 'Substitute') {
            let [substring, substitute] = args
            if (password.includes(substring)) {
                password = password.replace(new RegExp(`${substring}`, 'g'), substitute)
                console.log(password)
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        arr.shift()
    }
    arr[0] === 'Done' ? console.log(`Your password is: ${password}`) : false
}
// passReset([
//         'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
//         'TakeOdd',
//         'Cut 15 3',
//         'Substitute :: -',
//         'Substitute | ^',
//         'Done'
//     ])
// passReset([
//     'up8rgoyg3r1atmlmanaiunagt!-irs7!1fgulnnnqy',
//     'TakeOdd',
//     'Cut 18 2',
//     'Substitute ! ***',
//     'Substitute ? .!.',
//     'Done'
// ])


function fancyBarcodes(input) {
    let result = []
    for (let i = 1; i <= Number(input[0]); i++) {
        let regex = /@[#]+(?<word>[A-Z][[a-zA-Z0-9]{4,}[A-Z])@[#]+/
        let currentResult = regex.exec(input[i])
        if (currentResult !== null) {
            result.push(currentResult.groups.word)
        } else {
            result.push(null)
        }
    }
    for (let command of result) {
        if (command !== null) {
            let match = command.match(/[\d]?[\d+]/g)
            if (match !== null) {
                console.log(`Product group: ${match.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`)
        }
    }
}
// fancyBarcodes([
//         '3',
//         '@#FreshFisH@#',
//         '@###Brea0D@###',
//         '@##Che46sE@##',
//     ])
// fancyBarcodes([
//     '6',
//     '@###Val1d1teM@###',
//     '@#ValidIteM@#',
//     '##InvaliDiteM##',
//     '@InvalidIteM@',
//     '@#Invalid_IteM@#',
//     '@#ValiditeM@#'
// ])



function heroesOfCodeAndLogicVII(arr) {

    let heroNumber = Number(arr.shift())
    let heroes = {}
    arr.splice(0, heroNumber).map(row => row.split(' ')).map(row => {
        heroes[row[0]] = { hp: Number(row[1]), mp: Number(row[2]) }
    })

    let commandParser = {
        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal
    }

    arr.forEach(line => {
        let [command, ...args] = line.split(' - ')
        if (command !== 'End') {
            console.log(commandParser[command](heroes, ...args))
        }
    })

    Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].hp - a[1].hp)
        .map(row => console.log(`${row[0]}\n  HP: ${row[1].hp}\n  MP: ${row[1].mp}`))

    function castSpell(heroes, heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded)
        let hero = heroes[heroName]
        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }
        return `${heroName} does not have enough MP to cast ${spellName}!`
    }

    function takeDamage(heroes, heroName, damage, attacker) {
        damage = Number(damage)
        let hero = heroes[heroName]
        hero.hp -= damage
        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }
        delete heroes[heroName]
        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes, heroName, amount) {
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.mp
        hero.mp = Math.min(200, hero.mp + amount)
        return `${heroName} recharged for ${hero.mp - oldValue} MP!`
    }

    function heal(heroes, heroName, amount) {
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.hp
        hero.hp = Math.min(100, hero.hp + amount)
        return `${heroName} healed for ${hero.hp - oldValue} HP!`
    }
}

// heroesOfCodeAndLogicVII([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ])
heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])