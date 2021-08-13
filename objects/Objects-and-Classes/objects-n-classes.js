

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
