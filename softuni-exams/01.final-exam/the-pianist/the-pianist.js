function thePianist(arr) {
    let collection = {}
    let commandParser = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    }
    let n = Number(arr.shift())
    arr.splice(0, n).map(row => row.split('|')).forEach(row => {
        collection[row[0]] = { composer: row[1], key: row[2] }
    })
    arr.map(row => {
        let [command, ...args] = row.split('|')
        if (command !== 'Stop') {
            console.log(commandParser[command](collection, ...args))
        }
    })
    Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]) || (a[1].composer).localeCompare(b[1].composer))
        .map(row => console.log(`${row[0]} -> Composer: ${row[1].composer}, Key: ${row[1].key}`))

    function add(collection, piece, composer, key) {
        if (!collection.hasOwnProperty(piece)) {
            collection[piece] = { composer: composer, key: key }
            return `${piece} by ${composer} in ${key} added to the collection!`
        } else {
            return `${piece} is already in the collection!`
        }
    }

    function remove(collection, piece) {
        if (!collection.hasOwnProperty(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`
        } else {
            delete collection[piece]
            return `Successfully removed ${piece}!`
        }
    }

    function changeKey(collection, piece, key) {
        if (!collection.hasOwnProperty(piece)) {
            return `Invalid operation! ${piece} does not exist in the collection.`
        } else {
            collection[piece].key = key
            return `Changed the key of ${piece} to ${key}!`
        }
    }
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