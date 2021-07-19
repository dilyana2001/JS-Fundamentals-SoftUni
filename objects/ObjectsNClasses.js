let person = {
    firstName: 'Dilyana', // property {key: value}
    lastName: 'Nedelcheva',
    age: 32,
    sayHello() {
        console.log(`Hello, im ${this.lastName}, im ${this.age} years old.`)
    }
};
person.hairColor = 'red'; // Zakachame drugi properties, kazwa se RUN TIME
person['eye color'] = 'brown'; // drug nachin
person.grades = [6, 6, 6, 6, 5, 6, 5];
// console.log(person)
// console.log(person.grades)
// console.log(person.hairColor) //dostypwame stojnostta na property v obekta s .
// person.sayHello()


// imame masivi, pulnim gi s for cikli i syzdavame OBEKTI!
function storeProvision(stock, ordered) {
    let shop = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i]; // 0 element, 2, 4.... 4eten
        shop[product] = Number(stock[i + 1]); // wzema dvoikata 0 i 1, 2i3.... (tuk se zadava ne4etniq element)
    }
    console.log(shop) // {Chips: 5, CocaCola: 9, Bananas: 14, Pasta: 4, Beer: 2}
}
// : storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas',
//     '14', 'Pasta', '4', 'Beer', '2'
// ], [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7',
//     'Tomatoes', '70', 'Bananas', '30'
// ])



function personFromLab(firstName, lastName, age) { //CLASS
    return {
        firstName,
        lastName,
        age
    }
}
// console.log(person('Peter', 'Pan', '20'))

//METHODS
let keys = Object.keys(person) // vry6ta masiv s propertitata
    // console.log(keys)
let values = Object.values(person) //vry6ta masiv sys stoinostite na propertitata
    // console.log(keys, values)
let entries = Object.entries(person) // wry6ta masiv ot TUPLE(dvoiki)
    // console.log(entries[0]) 

// FOR-IN ,FOR-OF AND .ENTRIES
for (let key in person) { // obikalq obekt
    // console.log(`${key}:  ${person[key]}`)
}
for (let key of Object.keys(person)) { //razlikata mejdu for-in i for-of e w  Object.keys(person)
    // console.log(`${key}:  ${person[key]}`)
}
for (let [key, value] of Object.entries(person)) {
    // console.log(`${key} -> ${value}`)
}

//REFERENCE VS VALUE TYPES
//PRIMITIVE: Boolean, String, Number, null, undefined, BigInt, Symbol
//REFERENCE: ARRAY, OBJECTS, FUNCTION

//MEMORY:
//Stack:       zapazwat se v pametta v razli4ni kletki.                                           
let num = 3;
let text = 'text';
let isAlive = true;
let first = num; //first i num imat ednakva stojsnost , ne sa na edin i sy6t adres

// HEAP:
let arr = [1, 2, 3];
let obj = {
    name: 'f'
}
let newArr = arr; // newArr ima sy6tiq adres kato arr.
let newNewArr = newArr.slice(0); // pravim kopie i ve4e sa razli4ni masivi : newArr i newNewArr. Imat razli4ni adresi. Pri promqna na newArr, newNewArr nqma da se izmeni.
newNewArr[3] = 100;

//Primer:

function main() {
    let firstName = 'Tanya';
    console.log(`Initial value: ${firstName}`);
    changeValue(firstName)
    console.log(`Final value: ${firstName}`)
}

function changeValue(example) {
    example = 'Peter';
    console.log(`Inside changeV function: ${example}`)
}
// main()
// Initial value: Tanya
// Inside changeV function: Peter
// Final value: Tanya

function main2() {
    let firstName = { name: 'Sonya' };
    console.log(`Initial value: ${firstName.name}`);
    changeValue(firstName)
    console.log(`Final value: ${firstName.name}`)
}

function changeValue(example) {
    example.name = 'Dilyana';
    console.log(`Inside changeV function: ${example.name}`)
}
// main2()
// Initial value: Sonya
// Inside changeV function: Dilyana
// Final value: Dilyana

//JSON - JS Object Notation
let json = JSON.stringify(person)
    // console.log(json)
let parsed = JSON.parse(json)
    // console.log(parsed)

//NESTED OBJECTS
let someOne = {
    name: 'Dilyana',
    age: 23,
    grades: {
        Math: [5.5, 6],
        Chemistry: [4, 3]
    }
}
let json2 = JSON.stringify(someOne)
    // console.log(json2)
let parsed2 = JSON.parse(json2)
    // console.log(parsed2)


//CLASS
class Button {
    constructor(backgroundColor, textColor, text, hasDropdown) {
        this.backgroundColor = backgroundColor; // konstruirame wytreshnostite na klasa
        this.textColor = textColor;
        this.text = text;
        this.hasDropdown = hasDropdown
    }
    showText() {
        console.log(this.text)
    }
}

let someButton = new Button('blue', 'pink', 'Courses', true); // new e kliu4ova duma za syzdavane na instanciq ...vikane na klas 'Button', za da syzdade obekt po shablona(class-a)

// someButton.showText() //Courses
// console.log(someButton.backgroundColor)  //blue

// // method za pravene na obekti ot KLASS s map , printirane ot funkciq , koqto ima w klasa za vseki obekt, polu4en ot input i izwedeni na now red.
// return data
//     .map(str => {
//         return new Employee(str)
//     })
//     .map(obj => {
//         return obj.print();
//     })
//     .join('\n');

// // sy6to moje i s forEach:
// data.map(str => {
// return new Employee(str)
// }).forEach(obj => {
//     console.log(obj.print())
// })

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