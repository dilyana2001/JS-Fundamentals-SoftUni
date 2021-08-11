function emojiDetector(input) {
    let threshold = input.join('').match(/[0-9]/g).reduce((a, x) => a * x, 1);
    console.log(`Cool threshold: ${threshold}`);
    let emojis = input.join('').match(/(:{2,}|\*{2,})[A-Z][a-z]{2,}\1/g);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    let newArr = [];
    emojis.forEach(x => {
        x = x.substring(2, x.length - 2);
        let result = 0;
        for (let i = 0; i < x.length; i++) {
            let code = x.charCodeAt(i);
            result += code;
        }
        x = result;
        newArr.push(x);
    })
    for (let i = 0; i < newArr.length; i++)
        if (newArr[i] > threshold) console.log(emojis[i]);
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])