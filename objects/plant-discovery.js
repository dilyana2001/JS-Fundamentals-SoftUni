function plantDiscovery(arr) {
    let plants = {}
    let commandParser = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }
    let n = arr.shift()
    arr.splice(0, n).map(row => {
        let [plant, rarity] = row.split('<->')
        rarity = Number(rarity)
        plants[plant] = { rarity, rating: [] }
    })
    arr.forEach(row => {
        let [command, ...args] = row.split(': ')
        let [plant, numb] = args.join('').split(' - ')
        if (command !== 'Exhibition' && plants.hasOwnProperty(plant)) {
            return commandParser[command](plants, plant, numb)
        }
    })
    console.log(`Plants for the exhibition:`)
    Object.entries(plants).sort((a, b) => b[1].rarity - a[1].rarity || averg(b[1].rating) - averg(a[1].rating))
        .map(plant => console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${averg(plant[1].rating).toFixed(2)}`))

    function rate(plants, plant, rates) {
        rates = Number(rates)
        plants[plant].rating.push(rates)
    }

    function update(plants, plant, newRarity) {
        newRarity = Number(newRarity)
        plants[plant].rarity = newRarity
    }

    function reset(plants, plant) {
        plants[plant].rating = []
    }

    function averg(arr) {
        if (!arr.length) return 0;
        return arr.reduce((a, b) => a + b, 0) / arr.length
    }
}
plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])