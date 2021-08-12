function mirrorWords(arr) {
    let input = arr.join('')
    let regex = /(#|@)([a-zA-Z]{3,})\1\1([a-zA-Z]{3,})\1/g
    let exactPairs = []
    let match = input.match(regex)
    for (let i = 0; i < match.length; i++) {
        let current = match[i].split('')
        let reversed = match[i].split('').reverse()
        if (current.join('') === reversed.join('')) {
            let mirrorWord = match[i].substring(1, match[i].length / 2 - 1)
            exactPairs.push(`${mirrorWord} <=> ${mirrorWord.split('').reverse().join('')}`)
        }
    }
    if (match.length > 0) {
        console.log(`${match.length} word pairs found!`);

    } else {
        console.log(`No word pairs found!`)
    }
    if (exactPairs.length > 0) {
        console.log(`The mirror words are: `);
        console.log(`${exactPairs.join(', ')}`);
    } else {
        console.log(`No mirror words!`);
    }
}
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
])