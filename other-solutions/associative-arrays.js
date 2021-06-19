// You are given a sequence of people and for every person what cards he draws from the deck. The input will be array
// of strings. Each string will be in format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can
// contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to
// check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards
// it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by
// the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following
// way (S -&gt; 4, H-&gt; 3, D -&gt; 2, C -&gt; 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

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
// // expected output:
// // Peter: 167
// // Tomas: 175
// // Andrea: 197
// console.log(cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]))


// =========================================================================================================================================



// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to
// the party check if he/she exists in any of the two reservation lists.
// The input will come as array of strings. You will be given the list with the guests before you receive a command
// &quot;PARTY&quot;
// All VIP numbers start with digit
// When you receive the command &quot;PARTY&quot; the guests start coming.
// Print the count of guests then all guest, who didn't come to the party (VIP must be first)

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
// // expected output:
// // 2
// // 7IK9Yo0h
// // tSzE5t0p
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


// =========================================================================================================================================

// Write a function that receives list of neighborhoods and then some people, who are going to live in it. The input will
// come as array of strings. The first element will be the list of neighborhoods separated by &quot;, &quot;. The rest of the
// elements will be a neighborhood followed by a name of a person in the format &quot;{neighborhood} - {person}&quot;.
// Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods. The order of the
// elements as they are created should stay the same. At the end print the neighborhoods sorted by the count of
// inhabitants in descending order. Print them in the following format:
// &quot;{neighborhood}: {inhabitants count}
// --{1 st inhabitant}
// --{2 nd inhabitant}
// …&quot;

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
// // expected output:
// // Bright Mews: 2
// // --Garry
// // --Andrea
// // Abbey Street: 1
// // --Billy
// // Herald Street: 0
// neighbors([
//     'Abbey Street, Herald Street, Bright Mews',
//     'Bright Mews - Garry',
//     'Bright Mews - Andrea',
//     'Invalid Street - Tommy',
//     'Abbey Street - Billy'
// ])


// =========================================================================================================================================

// Write a function to store students with all of their grades. If a student appears more than once, add the new grades.
// At the end print the students sorted by average grade. The input comes as array of strings.

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
// // expected output:
// // Tammy: 2, 4, 3
// // Lilly: 4, 6, 6, 5
// // Tim: 5, 6, 6, 6
// schoolGrades([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// ])


// ===============================================================================================================================================