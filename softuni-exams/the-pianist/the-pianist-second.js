function thePianist(arr) {
    let n = Number(arr.shift())
    let collection = {}
    arr.splice(0, n).map(row => row.split('|')).forEach(row => collection[row[0]] = { composer: row[1], key: row[2] })
    let commandParser = {
        'Add': (piece, composer, key) => {
            if (!collection.hasOwnProperty(piece)) {
                collection[piece] = { composer: composer, key: key }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${piece} is already in the collection!`)
            }
        },
        'Remove': (piece) => {
            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                delete collection[piece]
                console.log(`Successfully removed ${piece}!`)
            }
        },
        'ChangeKey': (piece, key) => {
            if (!collection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            } else {
                collection[piece].key = key
                console.log(`Changed the key of ${piece} to ${key}!`)
            }
        },
        'Stop': () => {
            Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]) ||
                    (a[1].composer).localeCompare(b[1].composer))
                .map(row => console.log(`${row[0]} -> Composer: ${row[1].composer}, Key: ${row[1].key}`))
        }
    }
    arr.forEach(row => {
        let [command, ...args] = row.split('|')
        commandParser[command](...args)
    })
}

thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ])
    // thePianist([
    //     '4',
    //     'Eine kleine Nachtmusik|Mozart|G Major',
    //     'La Campanella|Liszt|G# Minor',
    //     'The Marriage of Figaro|Mozart|G Major',
    //     'Hungarian Dance No.5|Brahms|G Minor',
    //     'Add|Spring|Vivaldi|E Major',
    //     'Remove|The Marriage of Figaro',
    //     'Remove|Turkish March',
    //     'ChangeKey|Spring|C Major',
    //     'Add|Nocturne|Chopin|C# Minor',
    //     'Stop'
    // ])