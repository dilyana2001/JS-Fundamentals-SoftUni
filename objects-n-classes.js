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