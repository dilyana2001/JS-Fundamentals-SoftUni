// Create a class Laptop that has the following properties:
// info – object that contains:
// producer – string
// age – number
// brand – string
// isOn – boolean (false by default)
// turnOn – function that sets the isOn variable to true
// turnOff – function that sets the isOn variable to false
// showInfo – function that returns the producer, age and brand as json
// quality – number (every time the laptop is turned on/off the quality decreases by 1)
// getter price – number (800 – {age * 2} + (quality * 0.5))
// The constructor should receive the info as an object and the quality

class Laptop {
    constructor({ producer, age, brand }, quality) {
        this.info = {
            producer,
            age: Number(age),
            brand
        };
        this.isOn = false;
        this.quality = quality;
        this.price = 0;
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
    turnOn() {
        this.quality--
            this.price = 800 - (this.info.age * 2) + (this.quality * 0.5);
        return this.isOn = true

    }
    turnOff() {
        this.quality--
            this.price = 800 - (this.info.age * 2) + (this.quality * 0.5);
        return this.isOn = false
    }
}
// let info = {
//     producer: "Dell",
//     age: 2,
//     brand: "XPS"
// }
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// console.log(laptop.quality)
// laptop.turnOn()
// console.log(laptop.isOn)
// console.log(laptop.price)

// // expected output
// //     {"producer":"Dell","age":2,"brand":"XPS"}
// // 8
// // true
// // 799.5


// =================================================================================================================================================


// You will receive an array with strings in the form of JSON's.
// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a
// description. If you receive the same term twice replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// Term: ${term} => Definition: ${definition}
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

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
// // expected output:
// // Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
// // Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
// // Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
// // Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations  which may then be amplified, transmitted, or recorded.
// // Term: Tape => Definition: A narrow strip of material, typically used to hold  or fasten something.
// dictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold  or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations  which may then be amplified, transmitted, or recorded."}'
// ])

// =================================================================================================================================================


// First array (at index 0) will hold all flights on specific sector in the airport. The second array (at index 1) will
// contain new changed statuses of some of the flights at this airport. The third array (at index 2) will have a
// single string, which will be flight status you need to check. When you put all flights into an object, and change
// the statuses depends on the new information on the second array. You must print all flights with the given status
// from the last array.
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
// //expected output:
// // { Destination: 'Alabama', Status: 'Cancelled' }
// // { Destination: 'California', Status: 'Cancelled' }
// // { Destination: 'Texas', Status: 'Cancelled' }
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
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'
//     ],
//     ['Cancelled']
// ])
// // expected output:
// // { Destination: 'Delaware', Status: 'Ready to fly' }
// // { Destination: 'Oregon', Status: 'Ready to fly' }
// // { Destination: 'Las', Status: 'Ready to fly' }
// // { Destination: 'Ohio', Status: 'Ready to fly' }
// // { Destination: 'New', Status: 'Ready to fly' }
// // { Destination: 'Illinois', Status: 'Ready to fly' }
// // { Destination: 'Pennsylvania', Status: 'Ready to fly' }
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