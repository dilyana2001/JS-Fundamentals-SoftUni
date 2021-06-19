function needForSpeedIII(arr) {

    let cars = {}
    let n = Number(arr.shift())
    arr.splice(0, n).map(row => row.split('|')).map(row => {
        cars[row[0]] = { mileage: Number(row[1]), fuel: Number(row[2]) }
    })

    let commandParser = {
        'Drive': drive,
        'Refuel': refuel,
        'Revert': revert
    }
    arr.forEach(row => {
        let [command, ...args] = row.split(' : ')
        if (command !== 'Stop') {
            console.log(commandParser[command](cars, ...args))
        }
    })

    Object.entries(cars).sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]))
        .map(row => console.log(`${row[0]} -> Mileage: ${row[1].mileage} kms, Fuel in the tank: ${row[1].fuel} lt.`))

    function drive(cars, car, mileage, fuel) {
        mileage = Number(mileage)
        fuel = Number(fuel)
        let obj = cars[car]
        if (obj.fuel > fuel) {
            obj.fuel -= fuel
            obj.mileage += mileage
            if (obj.mileage >= 100000) {
                delete cars[car]
                return `${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.\nTime to sell the ${car}!`
            } else {
                return `${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`
            }
        } else {
            return `Not enough fuel to make that ride`
        }
    }

    function refuel(cars, car, fuel) {
        fuel = Number(fuel)
        let obj = cars[car]
        let oldValue = obj.fuel
        obj.fuel = Math.min(75, obj.fuel + fuel)
        return `${car} refueled with ${obj.fuel-oldValue} liters`
    }

    function revert(cars, car, mileage) {
        mileage = Number(mileage)
        let obj = cars[car]
        obj.mileage -= mileage
        if (obj.mileage > 10000) {
            return `${car} mileage decreased by ${mileage} kilometers`
        }
        obj.mileage = 10000
    }

}
// needForSpeedIII([
//         '3',
//         'Audi A6|38000|62',
//         'Mercedes CLS|11000|35',
//         'Volkswagen Passat CC|45678|5',
//         'Drive : Audi A6 : 543 : 47',
//         'Drive : Mercedes CLS : 94 : 11',
//         'Drive : Volkswagen Passat CC : 69 : 8',
//         'Refuel : Audi A6 : 50',
//         'Revert : Mercedes CLS : 500',
//         'Revert : Audi A6 : 30000',
//         'Stop'
//     ])
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])