function cardGame(strArr) {

    let type = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let power = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    let players = {}
    for (let line of strArr) {
        let [name, cards] = line.split(': ')
        if (players.hasOwnProperty(name)) {
            players[name].push(...cards.split(', '))
        } else {
            players[name] = cards.split(', ')
        }
    }
    Object.keys(players)
        .forEach(name => {
            let cardSet = new Set(players[name])
            let total = 0
            for (let card of cardSet) {
                card = card.split('')
                let cardType = card.pop()
                let cardPower = card.join('')
                let points = 0
                if (isNaN(cardPower)) {
                    points = type[cardType] * power[cardPower]
                } else {
                    points = type[cardType] * Number(cardPower)
                }
                total += points
            }
            players[name] = total
        })
    return Object.keys(players)
        .map(name => `${name}: ${players[name]}`).join('\n')

}

// console.log(cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]))




function partyTime(strArr) {
    let list = {
        vip: [],
        regular: []
    }
    let name = strArr.shift()
    while (name !== 'PARTY') {
        let char = name[0]
        if (isNaN(char)) {
            list.regular.push(name)
        } else {
            list.vip.push(name)
        }
        name = strArr.shift()
    }
    strArr.forEach(guest => {
        if (list.vip.includes(guest)) {
            let index = list.vip.indexOf(guest)
            list.vip.splice(index, 1)
        } else if (list.regular.includes(guest)) {
            let index = list.regular.indexOf(guest)
            list.regular.splice(index, 1)
        }
    })
    console.log(list.vip.length + list.regular.length)
    console.log(`${list.vip.join('\n')}\n${list.regular.join('\n')}`)
}

// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ])



function neighbors(strArr) {
    let neighborhoods = strArr.shift().split(', ')
    let listOfHoods = new Map()
    for (let el of neighborhoods) {
        listOfHoods.set(el, [])
    }
    for (let el of strArr) {
        let line = el.split(' - ')
        let street = line[0]
        let name = line[1]
        if (listOfHoods.has(street)) {
            listOfHoods.set(street, listOfHoods.get(street).concat(name))
        }
    }
    let sorted = Array.from(listOfHoods).sort((a, b) => b[1].length - a[1].length)
    for (let el of sorted) {
        console.log(`${el[0]}: ${el[1].length}`)
        for (let names of el[1]) {
            console.log(`--${names}`)
        }
    }
}

// neighbors([
//     'Abbey Street, Herald Street, Bright Mews',
//     'Bright Mews - Garry',
//     'Bright Mews - Andrea',
//     'Invalid Street - Tommy',
//     'Abbey Street - Billy'
// ])



function schoolGrades(strArr) {
    function average(a, b) {
        let aSum = 0
        let bSum = 0
        for (let i = 0; i < a[1].length; i++) { // a[1] sa ocenkite
            aSum += a[1][i]
        }
        for (let i = 0; i < b[1].length; i++) { // b[1] sa ocenkite
            bSum += b[1][i]
        }
        let averageA = aSum / a[1].length
        let averageB = bSum / b[1].length
        return averageA - averageB
    }
    let schoolGrades = new Map()
    for (let el of strArr) {
        let line = el.split(' ')
        let name = line[0]
        let grades = line.splice(1, line.length).map(Number)
        if (!schoolGrades.has(name)) {
            schoolGrades.set(name, []);
        }
        schoolGrades.set(name, schoolGrades.get(name).concat(grades))
    }
    let schoolGradesSorted = Array.from(schoolGrades).sort((a, b) => average(a, b))
    for (let el of schoolGradesSorted) {
        console.log(`${el[0]}: ${el[1].join(', ')}`)
    }
}

// schoolGrades([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// ])