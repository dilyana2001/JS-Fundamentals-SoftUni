function secretChat(arr) {
    let secretCode = arr.shift();
    let commandParser = {
        'InsertSpace': index => {
            secretCode = secretCode.substring(0, index) + ' ' + secretCode.substring(index);
            console.log(secretCode);
        },
        'Reverse': subWord => {
            if (secretCode.includes(subWord)) {
                let index = secretCode.indexOf(subWord);
                subWord = subWord.split('').reverse().join('')
                secretCode = secretCode.substring(0, index) + secretCode.substring(index + subWord.length) + subWord
                console.log(secretCode);
            } else {
                console.log('error');
            }
        },
        'ChangeAll': (subWord, replacement) => {
            while (secretCode.includes(subWord)) {
                secretCode = secretCode.replace(subWord, replacement);
            }
            console.log(secretCode);
        }
    }

    arr.forEach(line => {
        if (line != 'Reveal') {
            let [command, ...args] = line.split(':|:')
            commandParser[command](...args)
        }
    })
    console.log(`You have a new text message: ${secretCode}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])