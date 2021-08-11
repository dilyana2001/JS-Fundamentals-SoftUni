function heroesOfCodeAndLogicVII(arr) {

    let heroNumber = Number(arr.shift())
    let heroes = {}
    arr.splice(0, heroNumber).map(row => row.split(' ')).map(row => {
        heroes[row[0]] = { hp: Number(row[1]), mp: Number(row[2]) }
    })

    let commandParser = { // obekt s komandi:funkciite im 
        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal
    }

    arr.forEach(line => {
        let [command, ...args] = line.split(' - ')
        if (command !== 'End') {
            console.log(commandParser[command](heroes, ...args)) // printirame ot obekta[komanda]: FUNKCIQTA w koqto podawame (heroes(obekta s geroite) i ...args(argumentite))
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



function solve(input) {
    let heroes = {}
    let n = Number(input.shift())
    input.splice(0, n).forEach(line => {
        let [heroName, hp, mp] = line.split(' ')
        hp = Number(hp)
        mp = Number(mp)
        heroes[heroName] = { hp, mp }
    })
    input.forEach(line => {
        let [command, ...tokens] = line.split(' - ')
        if (command !== 'End') {
            if (command === 'CastSpell') {
                return castSpell(heroes, ...tokens)
            } else if (command === 'Recharge') {
                return recharge(heroes, ...tokens)
            } else if (command === 'TakeDamage') {
                return takeDamage(heroes, ...tokens)
            } else if (command === 'Heal') {
                return heal(heroes, ...tokens)
            }
        }
    })
    let sortedHeroes = Object.entries(heroes)
        .sort(compareHeroes)
    for (let [heroName, heroInfo] of sortedHeroes) {
        let { hp, mp } = heroInfo
        console.log(heroName)
        console.log(`  HP: ${hp}`)
        console.log(`  MP: ${mp}`)
    }

    function compareHeroes(a, b) {
        let [aName, aInfo] = a
        let [bName, bInfo] = b
        let byHealthDescending = bInfo.hp - aInfo.hp
        if (byHealthDescending === 0) {
            return aName.localeCompare(bName)
        }
        return byHealthDescending
    }

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
        hero.mp = Math.min(200, hero.mp + oldValue)
        return `${heroName} recharged for ${hero.mp - oldValue} MP!`
    }

    function heal(heroes, heroName, amount) {
        amount = Number(amount)
        let hero = heroes[heroName]
        let oldValue = hero.hp
        hero.hp = Math.min(100, hero.hp + oldValue)
        return `${heroName} healed for ${hero.hp - oldValue} HP!`
    }
}
// solve([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ])


function heroesOfCodeAndLogic(arr) {
    let heroNumber = Number(arr.shift())
    let heroes = {}
    arr.splice(0, heroNumber).map(row => row.split(' ')).map(row => {
        heroes[row[0]] = { hp: Number(row[1]), mp: Number(row[2]) }
    })
    arr.forEach(line => {
        let [command, ...tokens] = line.split(' - ')
        if (command !== 'End') {
            let output;
            if (command === 'CastSpell') {
                output = castSpell(heroes, ...tokens)
            } else if (command === 'Recharge') {
                output = recharge(heroes, ...tokens)
            } else if (command === 'TakeDamage') {
                output = takeDamage(heroes, ...tokens)
            } else if (command === 'Heal') {
                output = heal(heroes, ...tokens)
            }
            console.log(output)
        }
    })

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

    Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].hp - a[1].hp)
        .map(row => console.log(`${row[0]}\n  HP: ${row[1].hp}\n  MP: ${row[1].mp}`))
}


function fancyBarcodes(input) {
    input.shift()
    let regex = /@[#]+(?<word>[A-Z][[a-zA-Z0-9]{4,}[A-Z])@[#]+/
    input.forEach(row => {
        if (regex.test(row)) {
            let match = regex.exec(row)
            let numbers = [...match.groups.word]
                .filter(char => /\d/.test(char))
                .join('')
            console.log(`Product group: ${numbers === '' ? '00' : numbers}`)
        } else {
            console.log(`Invalid barcode`)
        }
    })
}


// fancyBarcodes([
//     '3',
//     '@#FreshFisH@#',
//     '@###Brea0D@###',
//     '@##Che46sE@##',
// ])
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
//         '2',
//         'Solmyr 85 120',
//         'Kyrre 99 50',
//         'Heal - Solmyr - 10',
//         'Recharge - Solmyr - 50',
//         'TakeDamage - Kyrre - 66 - Orc',
//         'CastSpell - Kyrre - 15 - ViewEarth',
//         'End'
//     ])
// heroesOfCodeAndLogicVII([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ])

function passReset(arr) {
    let password = arr.shift()
    arr.forEach(row => {
        if (row !== 'Done') {
            let [command, ...args] = row.split(' ')
            if (command === 'TakeOdd') {
                password = [...password]
                    .filter((c, i) => i % 2 !== 0)
                    .join('')
                console.log(password)
            } else if (command === 'Cut') {
                let index = Number(args[0])
                let length = Number(args[1])
                let firstPart = password.substring(0, index)
                let secondPart = password.substring(index + length)
                password = firstPart + secondPart
                console.log(password)
            } else if (command === 'Substitute') {
                if (password.includes(args[0])) {
                    password = password.replace(new RegExp(`${args[0]}`, 'g'), args[1])
                    console.log(password)
                } else {
                    console.log(`Nothing to replace!`)
                }
            }
        }
    })
    console.log(`Your password is: ${password}`)
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