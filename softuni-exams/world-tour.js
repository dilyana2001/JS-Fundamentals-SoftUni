function worldTour(arr) {
    let destinations = arr.shift()
    arr.forEach(row => {
        let [command, ...args] = row.split(':')
        if (command !== 'Travel') {
            if (command === 'Add Stop') {
                args[0] = Number(args[0])
                if (args[0] >= 0 || args[0] < args[0].length) {
                    destinations = destinations.substring(0, args[0]) + args[1] + destinations.substring(args[0])
                }
            } else if (command === 'Remove Stop') {
                args[0] = Number(args[0])
                args[1] = Number(args[1])
                if (args[0] >= 0 || args[0] < args[0].length && args[1] >= 0 || args[1] < args[1].length) {
                    let missingPart = destinations.substring(args[0], args[1] + 1)
                    destinations = destinations.replace(missingPart, '')
                }
            } else if (command === 'Switch') {
                while (destinations.includes(args[0])) {
                    destinations = destinations.replace(args[0], args[1])
                }
            }
            console.log(destinations)
        } else {
            console.log(`Ready for world tour! Planned stops: ${destinations}`)
        }
    })
}
worldTour([
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ])
    // Hawai::RomeCyprys-Greece
    // Hawai::Rome-Greece
    // Bulgaria::Rome-Greece