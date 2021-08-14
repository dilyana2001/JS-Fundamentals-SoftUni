function solve(arr) {
    let dictionary = {};
    let definitions = arr.shift();
    definitions = definitions.split(' | ').forEach(line => {
        let [word, definition] = line.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [definition];
        } else {
            dictionary[word].push(definition);
        }
    })
    let onTest = arr.shift();
    let commandParser = {
        'Test': () => {
            onTest = onTest.split(' | ').forEach(w => {
                if (dictionary.hasOwnProperty(w)) {
                    console.log(`${w}`);
                    Object.entries(dictionary[w]).sort((a, b) => b[1].length - a[1].length).forEach(x => console.log(`-${x[1]}`));
                }
            })
        },
        'Hand Over': () => {
            console.log(Object.keys(dictionary).join(' '));
        }
    }
    commandParser[arr.join()]();
}
// solve([
//         "programmer: an animal, which turns coffee into code | developer: a magician",
//         "fish | domino",
//         "Hand Over"
//     ])
solve([
        "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
        "care | kitchen | flower",
        "Test"
    ])
    // solve([
    //     "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    //     "bit | code | tackle",
    //     "Test"
    // ])