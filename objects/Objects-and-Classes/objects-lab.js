function person(firstName, lastName, age) { //CLASS
    return {
        firstName,
        lastName,
        age
    }
}
// console.log(person('Peter', 'Pan', '20'))

function citYY(city) {
    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}
// citYY({
//     name: 'Sofia',
//     area: 492,
//     population: 1238438,
//     country: 'Bulgaria',
//     postCode: '1000'
// })

function solve(city) {
    for (let [key, value] of Object.entries(city)) {
        console.log(`${key} -> ${value}`)
    }
}
// solve({
//     name: 'Sofia',
//     area: 492,
//     population: 1238438,
//     country: 'Bulgaria',
//     postCode: '1000'
// })

function convertToObject(objStr) {
    let parsed = JSON.parse(objStr)
    for (let key in parsed) {
        console.log(`${key}: ${parsed[key]}`)
    }
}
// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    let json = JSON.stringify(person);
    return json

}
// console.log(convertToJSON('George',
//     'Jones',
//     'Brown'))


function cats(arr) {
    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
        purr() {
            console.log(`I'm happy cat, my name is ${this.name}, purrrrrrr`)
        }
    }
    for (let line of arr) {
        let [catName, catAge] = line.split(' ');
        let kottMott = new Cat(catName, catAge);
        let kottoNakamuru = new Cat(catName)
        kottMott.meow()
        kottoNakamuru.purr()

    }
}
// cats(['Mellow 2'])

function songs(arr) {
    let n = Number(arr.shift());
    let songs = [];
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 0; i < n; i++) {
        let arrLine = arr.shift();
        let [typeList, name, time] = arrLine.split('_');
        songs.push(new Song(typeList, name, time));
    }
    let type = arr.shift();
    if (type === 'all') {
        printSongs(songs)
    } else {
        let searchedSongs = songs.filter((s) => s.typeList === type);
        printSongs(searchedSongs)
    }

    function printSongs(songs) {
        for (let song of songs) {
            console.log(song.name)
        }
    }
}
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater'
// ])


function employees(str) {
    class Employee {
        constructor(str) {
            this.name = str;
            this.id = str.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.id}`
        }
    }
    for (let data of str) {
        let person = new Employee(data)
        console.log(person.print())
    }
}
// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
// ])


function towns(arr) {
    for (let line of arr) {
        let [town, latitude, longitude] = line.split(' | ');
        let obj = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(obj)
    }
}
// towns(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625'
// ]);

function storeProvision(stock, ordered) {
    let shop = {};
    addToShop(ordered, addToShop(stock, shop));

    function addToShop(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let quantity = Number(arr[i + 1]);
            if (!obj.hasOwnProperty(product)) obj[product] = 0;
            obj[product] += quantity;
        }
        return obj;
    }
    Object.entries(shop).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}
// storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas',
//     '14', 'Pasta', '4', 'Beer', '2'
// ], [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7',
//     'Tomatoes', '70', 'Bananas', '30'
// ])


// drug metod na storeProvisions:
function storeProvision2(stock, ordered) {
    let shop = {};
    addToShop(ordered, addToShop(stock, shop)) // wikame putvo stock, shop i posle vyrhu neq ordered, shop , za da dobavim otgore i da proverim dali v stock ima nali4no 

    function addToShop(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let quantity = Number(arr[i + 1]);
            if (!obj.hasOwnProperty(product)) {
                obj[product] = 0
            }
            obj[product] += quantity
        }
        return obj
    }
    for (let key in shop) {
        console.log(`${key} -> ${shop[key]}`)
    }
}
// storeProvision2([
//     'Chips', '5', 'CocaCola', '9', 'Bananas',
//     '14', 'Pasta', '4', 'Beer', '2'
// ], [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7',
//     'Tomatoes', '70', 'Bananas', '30'
// ])


function movie(input) {
    let movies = [];
    input.forEach(line => {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            movies.push({ name })
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(m => m.name === name)
            if (movie) movie.director = director
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(m => m.name === name)
            if (movie) movie.date = date
        }
    })
    movies.forEach(m => {
        if (m.name && m.director && m.date) console.log(JSON.stringify(m))
    })
}


// movie([
//     'addMovie Fast and Furious',
//     'addMovie Godfather', 'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ])


function inventory(arr) {
    arr.map(line => {
            let [name, level, inventory] = line.split(' / ');
            inventory = inventory.split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ');
            return {
                name,
                level: Number(level),
                inventory
            }
        })
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.inventory}`)
        })
}
// inventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ])

class Vehicle {
    constructor(type, model, { engine, power }, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine,
            power,
            quality: engine * power
        }
        this.fuel = Number(fuel)
    }
    drive(fuelLoss) {
        return this.fuel -= fuelLoss
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);






//  getProcuts – a function that returns all the products in storage in JSON format, each on a new line
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct({ name, price, quantity }) {
        this.storage.push({
            name,
            price,
            quantity
        })
        this.totalCost += price * quantity
        this.capacity -= quantity
    }
    getProducts() {
        let result = [];
        this.storage.forEach(product => {
                result.push(JSON.stringify(product));
            })
            // console.log(result.join('\n'))
    }
}
// class Storage {
//     constructor(capacity) {
//         this.capacity = capacity;
//         this.storage = [];
//     }

//     get totalCost() {        
//         return this.storage.reduce((acc, el) => {return acc + el.price * el.quantity}, 0);
//     }

//     addProduct(product) {
//         this.storage.push(product);
//         this.capacity -= product.quantity;
//         return;
//     }

//     getProducts() {
//         let output = [];
//         this.storage.forEach(product => {
//             output.push(JSON.stringify(product));
//         })
//         return output.join('\n');
//     }
// }

let productOne = {
    name: 'Cucamber',
    price: 1.50,
    quantity: 15
};
let productTwo = {
    name: 'Tomato',
    price: 0.90,
    quantity: 25
};
let productThree = {
    name: 'Bread',
    price: 1.10,
    quantity: 8
};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
// console.log(storage.capacity);
// console.log(storage.totalCost);






function catalog(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    let products = new Map();
    arr.forEach(line => {
        let data = line.split(' : ');
        let letter = data[0][0];
        if (!products.has(letter)) {
            products.set(letter, data);
        } else {
            products.set(letter, products.get(letter) + ',' + data);
        }
    })
    let myProducts = new Map([...products.entries()]);
    for (let [letter, items] of myProducts) {
        console.log(letter);
        if (items.constructor !== Array) {
            items = items.split(',');
        }
        for (let i = 0; i < items.length; i += 2) {
            console.log(`  ${items[i]}: ${items[i + 1]}`)
        }
    }
}
// catalog([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ])




//more exercise

class Laptop {
    constructor({ producer, age, brand }, quality) {
        this.info = {
            producer,
            age: Number(age),
            brand
        };
        this.isOn = false;
        this.quality = quality;
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
    turnOn() {
        this.quality--
            return this.isOn = true

    }
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
    turnOff() {
        this.quality--
            return this.isOn = false
    }
}

let info = {
    producer: 'Dell',
    age: 2,
    brand: 'XPS'
}
let laptop = new Laptop(info, 10)
laptop.turnOn()
    // console.log(laptop.showInfo())
laptop.turnOff()
    // console.log(laptop.quality)
laptop.turnOn()
    // console.log(laptop.isOn)
    // console.log(laptop.price)


function flightSchedule(arr) {
    let cancelledToFly = []
    let schedule = {}
    let status = arr.pop().join(' ')
    let cancelled = arr.pop()
    arr = arr.flat()
    for (let line of cancelled) {
        let [flyNumber, status] = line.split(' ')
        cancelledToFly.push(flyNumber)
    }
    for (let line of arr) {
        let [flyNumber, destination] = line.split(' ')
        if (status === 'Cancelled') {
            if (cancelledToFly.includes(flyNumber)) {
                schedule[flyNumber] = destination
            }
        } else {
            if (!cancelledToFly.includes(flyNumber)) {
                schedule[flyNumber] = destination
            }
        }
    }
    for (let el in schedule) {
        console.log(`{ Destination: '${schedule[el]}', Status: '${status}' }`)
    }
}

// flightSchedule([
//         ['WN269 Delaware',
//             'FL2269 Oregon',
//             'WN498 Las Vegas',
//             'WN3145 Ohio',
//             'WN612 Alabama',
//             'WN4010 New York',
//             'WN1173 California',
//             'DL2120 Texas',
//             'KL5744 Illinois',
//             'WN678 Pennsylvania'
//         ],
//         ['DL2120 Cancelled',
//             'WN612 Cancelled',
//             'WN1173 Cancelled',
//             'SK430 Cancelled'
//         ],
//         ['Cancelled']
//     ])
// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     ['DL2120 Cancelled',
//         'WN612  Cancelled ',
//         'WN1173 Cancelled ',
//         'SK330 Cancelled'
//     ],
//     ['Ready to fly']
// ])




function schoolRegister(strArr) {
    function averageScore(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length
    }
    let yearBook = {}
    for (let line of strArr) {
        let [student, gradeS, scoreS] = line.split(', ')
        let name = student.split(': ')[1]
        let grade = Number(gradeS.split(': ')[1]) + 1
        let score = Number(scoreS.split(': ')[1])
        if (score >= 3) {
            let student = { name, score }
            if (!yearBook.hasOwnProperty(grade)) {
                yearBook[grade] = []
            }
            yearBook[grade].push(student)
        }
    }
    let sorted = Object.keys(yearBook).sort((a, b) => a - b)
    for (let grade of sorted) {
        let info = yearBook[grade]
        console.log(`${grade} Grade`)
        console.log(`List of students: ${info.map(name => name.name).join(', ')}`)
        console.log(`Average annual grade from last year: ${averageScore(info.map(score => score.score)).toFixed(2)}\n`)
    }
}

// schoolRegister([
//     'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
//     'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
//     'Student name: George, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
//     'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
//     'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
//     'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
//     'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
//     'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
//     'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
//     'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
//     'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
// ])


function dictionary(json) {
    let dictionary = {}
    for (let line of json) {
        let parsed = JSON.parse(line)
        for (let key in parsed) {
            dictionary[key] = parsed[key]
        }
    }
    let sortedDictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
    for (let key of sortedDictionary) {
        console.log(`Term: ${key[0]} => Definition: ${key[1]}`)
    }
}
// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold  or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations  which may then be amplified, transmitted, or recorded."}'
// ])

function storageS(strArr) { // storage.get(product) => kliu4ovata komanda. NA storage ,vzemame producta, qwno vytre s imeto i quantitito?
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
// storageS([
//     'tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40'
// ])


function browserHistory(obj, arr) {
    let commandPareser = {
        'Open': open,
        'Close': close,
        'Clear': clear
    }

    arr.forEach(row => {
        let [command, ...browser] = row.split(' ')
        return commandPareser[command](obj, browser.join(' '))
    })

    let result = Object.entries(obj)
    console.log(`${result[0][1]}\n${result[1][0]}: ${result[1][1]
        .join(', ')}\n${result[2][0]}: ${result[2][1]
        .join(', ')}\n${result[3][0]}: ${result[3][1].join(', ')}`)

    function open(obj, browser) {
        obj['Open Tabs'].push(browser)
        obj['Browser Logs'].push(`Open ${browser}`)
    }

    function close(obj, browser) {
        let index = obj['Open Tabs'].indexOf(browser)
        if (index != -1) {
            obj['Open Tabs'].splice(index, 1)
            obj['Recently Closed'].push(browser)
            obj['Browser Logs'].push(`Close ${browser}`)
        }
    }

    function clear(obj) {
        delete obj['Open Tabs']
        obj['Open Tabs'] = []
        delete obj['Recently Closed']
        obj['Recently Closed'] = []
        delete obj['Browser Logs']
        obj['Browser Logs'] = []
    }
}
// browserHistory({
//         'Browser Name': 'Google Chrome',
//         'Open Tabs': ['Facebook', 'YouTube', 'Google Translate'],
//         'Recently Closed': ['Yahoo', 'Gmail'],
//         'Browser Logs': [
//             'Open YouTube',
//             'Open Yahoo',
//             'Open Google Translate',
//             'Close Yahoo',
//             'Open Gmail',
//             'Close Gmail',
//             'Open Facebook'
//         ]
//     }, ['Close Facebook', 'Close Google Translate', 'Open Softuni'])
// Clear History and Cache
// Google Chrome
// Open Tabs: YouTube, Google Translate,
// StackOverFlow, Google
// Recently Closed: Yahoo, Gmail, Facebook
// Browser Logs: Open YouTube, Open Yahoo,
// Open Google Translate, Close Yahoo, Open
// Gmail, Close Gmail, Open Facebook, Close
// Facebook, Open StackOverFlow, Open Google

// function sequences(json) {
//     console.log(json[1])
// }
// sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"])