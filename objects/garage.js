function solve(arr) {
    let garage = {};
    arr.forEach(line => {
        let [garageNumber, args] = line.split(' - ');
        args = args.split(': ').join(' - ');
        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [args];
        } else {
            garage[garageNumber].push(args);
        }
    });
    Object.entries(garage).forEach(x => console.log(`Garage № ${x[0]}\n--- ${x[1].join('\n--- ')}`));
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])