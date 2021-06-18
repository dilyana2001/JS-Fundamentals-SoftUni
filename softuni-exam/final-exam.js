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
        heroes[row[0]] = { health: Number(row[1]), mana: Number(row[2]) }
    })
    let line = arr.shift()
    while (line !== 'End') {
        let command = line.split(' - ')
        switch (command[0]) {
            case 'CastSpell':
                castSpell(command[1], command[2], command[3])
                break
            case 'TakeDamage':
                takeDamage(command[1], command[2], command[3])
                break
            case 'Recharge':
                recharge(command[1], command[2])
                break
            case 'Heal':
                heal(command[1], command[2])
                break
        }
        line = arr.shift()
    }

    function castSpell(heroName, manaNeeded, spellName) {
        manaNeeded = Number(manaNeeded)
        if (heroes[heroName].mana - manaNeeded >= 0) {
            heroes[heroName].mana -= manaNeeded
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`)
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }

    function takeDamage(heroName, dmg, attacker) {
        dmg = Number(dmg)
        if (heroes[heroName].health - dmg > 0) {
            heroes[heroName].health -= dmg
            console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${heroes[heroName].health} HP left!`)
        } else {
            delete heroes[heroName]
            console.log(`${heroName} has been killed by ${attacker}!`)
        }
    }

    function recharge(heroName, amount) {
        amount = Number(amount)
        if (heroes[heroName].mana + amount > 200) {
            let gift = 200 - heroes[heroName].mana
            heroes[heroName].mana = 200
            console.log(`${heroName} recharged for ${gift} MP!`)
        } else {
            heroes[heroName].mana += amount
            console.log(`${heroName} recharged for ${amount} MP!`)
        }
    }

    function heal(heroName, amount) {
        amount = Number(amount)
        if (heroes[heroName].health + amount > 100) {
            let healed = 100 - heroes[heroName].health
            heroes[heroName].health = 100
            console.log(`${heroName} healed for ${healed} HP!`)
        } else {
            heroes[heroName].health += amount
            console.log(`${heroName} healed for ${amount} HP!`)
        }
    }

    Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].health - a[1].health)
        .map(row => console.log(`${row[0]}\n  HP: ${row[1].health}\n  MP: ${row[1].mana}`))
}
heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])