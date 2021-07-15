function objects() {
    let cat = {
            name: 'Macka',
            age: 5,
            cage: true,
            eyes: 'green',
            owners: ['Didi', 'Lubo', ' Eli'],
            walk: () => 'Step, Step',
            friend: {
                name: 'Max'
            }
        }
        //prezapisvane:
    cat.age = 6;
    cat['age'] = 7;
    cat.color = 'tiger'
    cat['color'] = 'yellow tiger'
        // console.log(cat)
    delete cat.eyes;
    // console.log(cat)
    let cat2 = { //copy v razli4en adres, s razli4na referentna stoijnost
        ...cat
    }
    let cat3 = {
        ...cat2
    }
    let keys = Object.keys(cat)
    let values = Object.values(cat2)
    let entries = Object.entries(cat)
        // console.log(entries)
    isHas = cat.hasOwnProperty('name') //true . keys se slaga v '', za da izleze pravilen otgowor
        // console.log(isHas)
    for (let el in cat) { // in se polzva za obekti, a of za masivi
        // console.log(cat[el]) // wry6ta values ot obekta cat
    }
}
// objects()



function phonebook(strArr) {
    let phonebook = {}
    for (let current of strArr) {
        let line = current.split(' ');
        let name = line[0];
        let number = line[1]
        phonebook[name] = number; // prezapisva posledniq element
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`)
    }
}
// phonebook([
//     'Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344'
// ])


function players() {
    let player = {
        Lora: 25,
        Peter: 130,
        Max: 30
    }
    let points = Object.values(player)
    let sorted = points.sort((a, b) => b - a)
    return `Player with ${sorted[0]} is the winner`
}
// console.log(players())


//44
//sorting key-value pairs
function person() {
    let person = new Map();
    person.set('name', 'Ivo') // sys set, setvame dvoika v obekt ot tip MAP. Ne s : a sys ,
    person.set('age', 27)
    let personName = person.get('name') // vzemame stoinostta na person, key name i q zapisvame na promenliva
        // console.log(personName)
        // person.delete('age')
        // console.log(person)
        // console.log(person.size) // vry6ta dyljinata dvoiki
    let keys = person.keys()
    let values = person.values()
        // console.log(values)
    if (person.has('carColor')) { // tuk s .has , funkciq na MAP , proverqvame dali imame dadena dvoika v  obekta
        console.log(person.get('carColor')) // ako imame , logni
    } else {
        person.set('carColor', 'red') // ako nqmame, setni (key, value)
    }
    // console.log(person) // logni person s ve4e setnata dvoika
    // person.clear() // izchistvame MAP
    // console.log(person)

}
// person()

function storage(strArr) { // storage.get(product) => kliu4ovata komanda. NA storage ,vzemame producta, qwno vytre s imeto i quantitito?
    let storage = new Map()
    for (let el of strArr) {
        let line = el.split(' ')
        let product = line[0]
        let quantity = Number(line[1])
        if (!storage.has(product)) {
            storage.set(product, quantity) // ako nqmame tozi product, izvedi vsqka dvoika bez promqna
        } else {
            let currentQuantity = storage.get(product); // ako go imame , syzdavame promenliva, koqto da GETVA produkta ot storage-a ni
            let newQuantity = currentQuantity + quantity // druga promenliva, koqto da dobavq kym veche sy6testvuvashta dvoika koli4estvoto
            storage.set(product, newQuantity) // SETVAME veche novata PREZAPISANA dvoika
        }
    }
    for (let keyValuePair of storage) {
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`) // dvoiki of storage se logvat izvyn gorniq cikyl for
    }
}
// storage([
//     'tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40'
// ])


function trainmAP() {
    let map = new Map();
    map.set = ('one', 1);
    map.set = ('eight', 8);
    map.set = ('two', 2);
    let sorted = Array.from(map.entries())
        .sort((a, b) => a[1] - b[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
    // console.log(map) // ne znam 
}
// trainmAP()

// has. -> map(obj) e kato includes. za arrays

let ourMap = new Map();
let myObj = {
    name: 'Ivo',
    age: 20
}
ourMap.set(myObj, 'TEXT')
    // console.log(ourMap) // Map(1) { { name: 'Ivo', age: 20 } => 'TEXT' }

// SET()
//Sorting Unique Elements
// .add -> dobavq // str, number ....
// .has - > provertqva // boolean


function meetings(strArr) {
    let schedule = new Map();
    for (let el of strArr) {
        let line = el.split(' ');
        let day = line[0];
        let name = line[1];
        if (!schedule.has(day)) {
            schedule.set(day, name)
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }
    for (let el of schedule) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
// meetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'
// ])



function addressBook(strArr) {
    // Write a function that stores information about a person’s name and his address. The input comes as an array of
    // strings. Each string contains the name and the address separated by a colon. If you receive the same name twice
    // just replace the address. At the end print the full list, sorted alphabetically by the person’s name.
    let addressBook = new Map();
    for (let el of strArr) {
        let line = el.split(':');
        let name = line[0];
        let address = line[1];
        addressBook.set(name, address)
    }
    let sorted = Array.from(addressBook.entries())
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
// ])

function storage(strArr) {
    let storage = new Map();
    for (let el of strArr) {
        let line = el.split(' ')
        let product = line[0]
        let quantity = Number(line[1])
        if (storage.has(product)) {
            let currentQuantity = storage.get(product)
            let newQuantity = currentQuantity + quantity
            storage.set(product, newQuantity)
        } else {
            storage.set(product, quantity)
        }
    }
    for (let el of storage) {
        console.log(`${el[0]} -> ${el[1]}`)
    }
}
// storage([
//     'tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40'
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

function wordOccurrences(strArr) {
    let words = new Map()
    for (let word of strArr) {
        let times = 1
        if (words.has(word)) {
            let currentTimes = words.get(word)
            let newTimes = currentTimes + times
            words.set(word, newTimes)
        } else {
            words.set(word, times)
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1])
    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`)
    }
}
// wordOccurrences(['Here', 'is', 'the', 'first', 'sentence',
//     'Here', 'is', 'another', 'sentence', 'And',
//     'finally', 'the', 'third', 'sentence'
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


function wordsTraciker(strArr) {
    let words = new Map()
    let reqWords = strArr.shift().split(' ');
    for (let el of reqWords) {
        words.set(el, 0)
    }
    for (let word of strArr) {
        let times = 1
        if (words.has(word)) {
            let currentTimes = words.get(word)
            let newTimes = currentTimes + times
            words.set(word, newTimes)
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1])
    for (let el of sorted) {
        console.log(`${el[0]} - ${el[1]}`)
    }
}
// wordsTraciker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
//     'the', 'occurances', 'of', 'the', 'words', 'this', 'and',
//     'sentence', 'because', 'this',
//     'is', 'your', 'task'
// ])

function wordsTraciker2(strArr) {
    let words = {}
    strArr
        .shift()
        .split(' ')
        .forEach(w => {
            words[w] = 0
        })
    strArr.forEach(w => {
        if (words.hasOwnProperty(w)) {
            words[w]++;
        }
    })
    return Object.keys(words)
        .sort((a, b) => words[b] - words[a])
        .map(w => `${w} - ${words[w]}`)
        .join('\n')
}
// console.log(wordsTraciker2([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
//     'the', 'occurances', 'of', 'the', 'words', 'this', 'and',
//     'sentence', 'because', 'this',
//     'is', 'your', 'task'
// ]))


function oddOccurrences(str) {
    let myMap = new Map();
    str
        .split(' ')
        .forEach(el => {
            el = el.toLowerCase()
            if (!myMap.has(el)) {
                myMap.set(el, 0) // w obiknoven obekt se zapisva po sledniq na4in: obj[el] = 0 , koeto 6te re4e kym obekta se dobavq kliu4 el i stoinost 0
                    // obj[el] = 0 
            }
            myMap.set(el, myMap.get(el) + 1) // myMap.get(el) + 1 => value++ Koeto e obiknoven obekt se zapisva : obj[el]++ => koeto 6te re4e , kym veche syzdaden kliu4 el i stoinost ot 4islo, dobavi kym stoinostta edna edinica
                //  obj[el]++ 
        })
    return Array.from(myMap.keys()) // Object.keys() v obiknoven obekt
        // Object.keys()
        .filter(x => myMap.get(x) % 2 !== 0) // i tuk ne znam kak trqq stane v obiknoven obekt. Tova e velik sintansis, kak da dostypim stoinostta na kliu4a
        .join(' ')
}
// console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C# '))


function piccolo(input) {
    let parking = new Map()
    for (let line of input) {
        let [direction, carNumber] = line.split(', ')
        if (direction === 'IN') {
            parking.set(carNumber, 1)
        } else {
            parking.delete(carNumber)
        }
    }
    let result = Array.from(parking.keys())
        .sort((a, b) => a.localeCompare(b))
        .join('\n')
    return result ? result : `Parking Lot is Empty`
}
// console.log(piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]))


function piccolo2(input) {
    let parking = {} //pravim obekt
    for (let line of input) { // for of da minem prez obekta, da proverim i napylnim
        let [direction, carNumber] = line.split(', ') // destruktorirame i pravim masiv
        if (direction === 'IN') { // proverqvame dali e in ili out
            parking[carNumber] = 1 // setvame za in 1
        } else {
            delete parking[carNumber] // za out, triem , za da sotane prazen obekt pri printirane, ako nqma koli v parkinga
        }
    }
    let result = Object.keys(parking) // vzemame kliu4ovete na obekta
        .sort((a, b) => a.localeCompare(b)) // sortirame
        .join('\n') // delim na redowe
    return result ? result : `Parking Lot is Empty` // proverqvame dali obekta e prazen
}
// console.log(piccolo2(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]))

function partyTime(strArr) {
    let list = {
        vip: [],
        regular: [] // pravim obekt s dva masiva
    }
    let name = strArr.shift() // vadim pyrviq element ot input-a
    while (name !== 'PARTY') { // proverqvame dali ne e party
        let char = name[0] // ako ne e, znachi ni trqbwa . Vzemame pyrvata bukva
        if (isNaN(char)) { // proverqvame dali ne e 4islo
            list.regular.push(name) // pushvame v ediniq masiv
        } else {
            list.vip.push(name) // ili pushvame v drugiq masiv
        }
        name = strArr.shift() // vadim pyrviq element, cikala se vyrti otnovo, dokato ne stigne PARTY
    }
    strArr.forEach(guest => { // izvadili sme vkliu4itelno party
        if (list.vip.includes(guest)) { // proverqvame dali gostite edin po edin se sydyrjat v  dadeniq list
            let index = list.vip.indexOf(guest) // proverqvame kyde se namira
            list.vip.splice(index, 1) // rejem sys splice
        } else if (list.regular.includes(guest)) {
            let index = list.regular.indexOf(guest)
            list.regular.splice(index, 1)
        }
    })
    console.log(list.vip.length + list.regular.length) // iska se gostite , koito ne sa otishli na partito. Sybirame ostatycite ot dwete listi
    console.log(`${list.vip.join('\n')}\n${list.regular.join('\n')}`) // izvejdame gost po gost na nov red
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

function cardGame(strArr) {
    let type = { // prvaim obekt tip s stoinostite na boite na kartite
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    let power = { // drug obekt s stoinostite na vida na kartite
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    let players = {} // obekt v koito syhranqvame igra4a i sre6tu nego 6te slagame rycete i v posledstvie to4kite
    for (let line of strArr) { // vyrtim cikyl ot masiva 
        let [name, cards] = line.split(': ') // destruktorirame ime i karti, splitvame za da razdelim imeto i kartite
        if (players.hasOwnProperty(name)) { // proverqvame dali v obejkta , koito pylnim, dali imame tova ime
            players[name].push(...cards.split(', ')) // ako da , dobavqme kym kartite i novite, kato gi spreadvame, za da dostypim v podmasiva im, i delim sys split kakto sa razdeleni, v slu4aq sys zapetaq
        } else {
            players[name] = cards.split(', ') // ako ne , syzdavame sre6tu imeto i kartite, razdeleni sys zapetaq
        }
    }
    Object.keys(players) // dostypvame kliu4ovete na obekta 
        .forEach(name => { // za vseko ime
            let cardSet = new Set(players[name]) // pravim set, za da polu4im masiv s unikalni stoinosti
            let total = 0
            for (let card of cardSet) {
                card = card.split('') // splitvame , za da razdelim rycete na po edin element
                let cardType = card.pop() // vadim posledniq
                let cardPower = card.join('') // razdelqme i ostatyka ( ako e 10 => 1 0... ako e 2 => 2)
                let points = 0
                if (isNaN(cardPower)) { // proverqvame dali e cifra ili ne
                    points = type[cardType] * power[cardPower] // ako ne e , dostypvame do tipa i vzemame dtoinosta , umnojavame
                } else {
                    points = type[cardType] * Number(cardPower) // ako e , vzemame tipa i s number vzemame cifrata, umnojavame
                }
                total += points // dobavqme kym ob6tiq sbor
            }
            players[name] = total // zamestvame rycete s veche to4kite v 4isla
        })
    return Object.keys(players) // vry6tame kliu4ovete na obekta
        .map(name => `${name}: ${players[name]}`).join('\n') // s map printirame kliu4a :  i stoinostta na kliu4a 

}
// console.log(cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]))

function minerTask(strArr) {
    let store = {}
    for (let i = 0; i < strArr.length; i += 2) {
        let resourse = strArr[i]
        let quantity = strArr[i + 1]
        if (!store.hasOwnProperty(resourse)) {
            store[resourse] = quantity
        } else {
            let currentQuantity = Number(store[resourse])
            let newQuantity = currentQuantity + Number(quantity)
            store[resourse] = newQuantity
        }
    }
    for (let el in store) {
        console.log(`
                    ${ el } - > ${ store[el] } `)
    }
}
// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])
// minerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ])

function legendaryFarming(str) {
    let greatMaterials = { shards: 0, fragments: 0, motes: 0 }
    let junks = {}
    let newArr = str.split(' ').map(x => x.toLowerCase())
    for (let i = 0; i < newArr.length; i += 2) {
        let quantity = newArr[i]
        let material = newArr[i + 1]
        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            if (!greatMaterials.hasOwnProperty(material)) {
                greatMaterials[material] = quantity
            } else {
                let currentQuantity = Number(greatMaterials[material])
                let newQuantity = Number(quantity) + currentQuantity
                greatMaterials[material] = newQuantity
            }
        } else {
            if (!junks.hasOwnProperty(material)) {
                junks[material] = quantity
            } else {
                let currentQuantity = Number(junks[material])
                let newQuantity = Number(quantity) + currentQuantity
                junks[material] = newQuantity
            }
        }

    }
    let filtered = Object.entries(greatMaterials).filter(([key, value]) => value >= 250)
    if (filtered[0][0] === 'shards') {
        console.log(`
                    Shadowmourne obtained!`)
        greatMaterials.shards -= 250
    } else if (filtered[0][0] === 'fragments') {
        console.log(`
                    Valanyr obtained!`)
        greatMaterials.fragments -= 250
    } else if (filtered[0][0] === 'motes') {
        console.log(`
                    Dragonwrath obtained!`)
        greatMaterials.motes -= 250
    }
    let result = Object.entries(greatMaterials).sort((a, b) => (b[1] - a[1]))
    for (let el of result) {
        console.log(`
                    ${ el[0] }: ${ el[1] } `)
    }
    let junkResult = Object.entries(junks).sort((a, b) => a[0].localeCompare(b[0]))
    for (let ele of junkResult) {
        console.log(` ${ ele[0] }: ${ ele[1] } `)
    }
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments')
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes')

function companyUsers(strArr) {
    let companyNames = {}
    for (let line of strArr) {
        let [company, id] = line.split(' -> ')
        if (!companyNames.hasOwnProperty(company)) {
            companyNames[company] = id

        } else {
            let currentID = companyNames[company]
            let newId = `${ id } ${currentID }`
            companyNames[company] = newId
        }
    }
    let result = Object.entries(companyNames).sort((a, b) => a[0].localeCompare(b[0]))
    for (let el of result) {
        console.log(el[0])
        let employees = el[1].split(' ').sort((a, b) => a[0].localeCompare(b[0]))
        let employeeSet = new Set(employees)
        for (let el of employeeSet) {
            console.log(`--${el}`)
        }
    }
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ])
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
// ])


function arenaTier(strArr) {
    let gladiators = {
        name: '',
        technique: '',
        skill: 0
    }

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])



function garage(strArr) {
    class Garage {
        constructor(garageNum, color, type, manufacture) {
            this.garageNum = garageNum;
            this.color = color;
            this.type = type;
            this.manufacture = manufacture
        }
    }
    let garages = [];
    for (let line of strArr) {
        let [garageNum, character] = line.split(' - ');
        let [color, type, manufacture] = character.split(', ');
        let [a, b] = color.split(': ');
        garages.push(new Garage(garageNum, color, type, manufacture));
    }
    console.log(garages[0]);
}
// garage([
//         '1 - color: blue, fuel type: diesel',
//         '1 - color: red, manufacture: Audi',
//         '2 - fuel type: petrol',
//         '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
//     ])


function travelTime(input) {
    let travels = {}
    input.forEach(row => {
        let [country, city, miles] = row.split(' > ')
        if (!travels.hasOwnProperty(country)) {
            travels[country] = {}
        }
        if (!travels[country].hasOwnProperty(city)) {
            travels[country][city] = Number.POSITIVE_INFINITY;
        }
        if (travels[country].hasOwnProperty(city)) {
            if (travels[country][city] > Number(miles)) {
                travels[country][city] = Number(miles) // mnogo vajno za add to object 
            }
        }

    })
    Object.entries(travels).sort((a, b) => a[0].localeCompare(b[0])) // sortirame po azbu4en red na dyrjavite (kliu4ovete)
        .map(row => {
            let rowOne = Object.entries(row[1]).sort((a, b) => a[1] - b[1]).map(x => x.join(' -> ')) // pravim vytreshniq obekt na masiw i sortirame po cena
            console.log(`${row[0]} -> ${rowOne.join(' ')} `)
        })
}

travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
])