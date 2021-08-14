function solve(input) {
    let string = input.shift();

    let commandParser = {
        'Change': (char, replacement) => {
            while (string.includes(char)) string = string.replace(char, replacement);
            console.log(string);
        },
        'Includes': (otherString) => {
            string.includes(otherString) ? console.log('True') : console.log('False');
        },
        'End': (otherString) => {
            if (string.includes(otherString)) {
                let index = string.lastIndexOf(otherString);
                otherString === string.substring(index) ? console.log('True') : console.log('False');
            } else {
                console.log('False');
            }
        },
        'Uppercase': () => {
            string = string.toUpperCase();
            console.log(string);
        },
        'FindIndex': (char) => {
            let index = string.indexOf(char);
            console.log(index);
        },
        'Cut': (startIndex, length) => {
            startIndex = Number(startIndex)
            length = Number(length)
            string = string.substring(startIndex, startIndex + length);
            console.log(string);
        },
        'Done': () => {
            return;
        }
    }

    input.forEach(line => {
        let [command, firtsArg, secondArg] = line.split(' ');
        commandParser[command](firtsArg, secondArg);
    })
}
// solve([
//         "//Th1s 1s my str1ng!//",
//         "Change 1 i",
//         "Includes string",
//         "End my",
//         "Uppercase",
//         "FindIndex I",
//         "Cut 5 5",
//         "Done"
//     ])
solve([
    "*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
])