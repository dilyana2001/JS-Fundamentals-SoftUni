let person = {
    firstName: 'Dilyana', // property {key: value}
    lastName: 'Nedelcheva',
    age: 32,
    sayHello() {
        console.log(`Hello, im ${this.lastName}, im ${this.age} years old.`)
    }
};
person.hairColor = 'red'; 
person['eye color'] = 'brown';
person.grades = [6, 6, 6, 6, 5, 6, 5];
// console.log(person)
// console.log(person.grades)
// console.log(person.hairColor) //dostypwame stojnostta na property v obekta s .
// person.sayHello()


function storeProvision(stock, ordered) {
    let shop = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i]; // 0 element, 2, 4.... 4eten
        shop[product] = Number(stock[i + 1]); 
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



function personFromLab(firstName, lastName, age) { 
    return {
        firstName,
        lastName,
        age
    }
}
// console.log(person('Peter', 'Pan', '20'))

//METHODS
let keys = Object.keys(person) 
    // console.log(keys)
let values = Object.values(person) 
    // console.log(keys, values)
let entries = Object.entries(person)
    // console.log(entries[0]) 

// FOR-IN ,FOR-OF AND .ENTRIES
for (let key in person) {
    // console.log(`${key}:  ${person[key]}`)
}
for (let key of Object.keys(person)) { 
    // console.log(`${key}:  ${person[key]}`)
}
for (let [key, value] of Object.entries(person)) {
    // console.log(`${key} -> ${value}`)
}

//REFERENCE VS VALUE TYPES
//PRIMITIVE: Boolean, String, Number, null, undefined, BigInt, Symbol
//REFERENCE: ARRAY, OBJECTS, FUNCTION

//MEMORY:
//Stack:                                               
let num = 3;
let text = 'text';
let isAlive = true;
let first = num; 

// HEAP:
let arr = [1, 2, 3];
let obj = {
    name: 'f'
}

let newNewArr = newArr.slice(0);
newNewArr[3] = 100;



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
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.text = text;
        this.hasDropdown = hasDropdown
    }
    showText() {
        console.log(this.text)
    }
}

let someButton = new Button('blue', 'pink', 'Courses', true); 

// someButton.showText() //Courses
// console.log(someButton.backgroundColor)  //blue


// return data
//     .map(str => {
//         return new Employee(str)
//     })
//     .map(obj => {
//         return obj.print();
//     })
//     .join('\n');


// data.map(str => {
// return new Employee(str)
// }).forEach(obj => {
//     console.log(obj.print())
// })

function storage(strArr) { 
    let storage = new Map()
    for (let el of strArr) {
        let line = el.split(' ')
        let product = line[0]
        let quantity = Number(line[1])
        if (!storage.has(product)) {
            storage.set(product, quantity) 
        } else {
            let currentQuantity = storage.get(product); 
            let newQuantity = currentQuantity + quantity 
            storage.set(product, newQuantity) 
        }
    }
    for (let keyValuePair of storage) {
        console.log(`${keyValuePair[0]} -> ${keyValuePair[1]}`) 
    }
}
// storage([
//     'tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40'
// ])
