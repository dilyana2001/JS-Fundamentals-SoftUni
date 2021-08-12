function imitationGame(arr) {
    let msg = arr.shift();

    let commandParser = {
        'Move': n => msg = msg.substring(n) + msg.substring(0, n),
        'Insert': (i, v) => msg = msg.substring(0, i) + v + msg.substring(i),
        'ChangeAll': (s, r) => {
            while (msg.includes(s)) msg = msg.replace(new RegExp(`${s}`, 'g'), r)
        },
        'Decode': () => console.log(`The decrypted message is: ${msg}`)
    }

    arr.forEach(line => {
        let [command, nis, vr] = line.split('|');
        commandParser[command](nis, vr);
    })
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])