function revealWords(words, expression) {
    words = words.split(', ')
    for (let word of words) {
        let stars = '*'.repeat(word.length)
        expression = expression.replace(stars, word)
    }
    console.log(expression)
}
// revealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// )
// revealWords(
//     'great, learning',
//     'softuni is ***** place for ******** new programming languages'
// )

function hashTag(str) {
    let expression = str
    for (let word of expression) {
        if (word.startsWith('#') && isLetter(word.substring(1)) && word.substring(1) !== '') {
            console.log(word.substring(1))
        }
    }

    function isLetter(w) {
        let isLetters = true
        for (let char of w) {
            let code = char.charCodeAt()
            if (code < 65 || code > 90 && code < 97 || code > 122)
                isLetters = false
            break
        }
        return isLetters
    }
}
// hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')

function extractFile(str) {
    return `File name: ${str.substring(str.lastIndexOf('\\') + 1, str.lastIndexOf('.'))} \nFile extension: ${str.substring(str.lastIndexOf('.')+1)}`
}
// console.log(extractFile('C:\\Internal\\training-internal\\Templ.ate.pptx'))

function stringSubstring(word, expression) {
    expression = expression.toLowerCase()
    if (expression.includes(word.toLowerCase())) {
        return word
    }
    return `${word} not found!`

}
// console.log(stringSubstring(
//     'javascript',
//     'JavaScript is the best programming language'
// ))


function replaceRepeatingChars(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += str[i]
        }
    }
    return result
}
// console.log(replaceRepeatingChars(
//     'qqqwerqwecccwd' 
// ))

function pascalCase(str) {
    let result = []
    let upperIndex = 0
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            let word = str.substring(upperIndex, i)
            upperIndex = i
            result.push(word)
        }
    }
    result.push(str.substring(upperIndex))
    console.log(result.join(', '))
}
// pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan') // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can


function cutNReverse(str) {
    return str.substring(0, str.length / 2).split('').reverse().join('') + '\n' + str.substring(str.length / 2).split('').reverse().join('')
}
// console.log(cutNReverse('tluciffiDsIsihTgnizamAoSsIsihT'))

function hardWords([str, words]) { // polu4avame [string i masiv]
    let index = str.indexOf('_') // pravim promenliva , koqto na namira pyrvata dolna 4erta v stringa
    let counter = 0 // pravim counter
    while (index !== -1) { // wyrtim while cikyl, dokato pyrva dolna namerena 4erta sy6testvuva
        counter++ // uveli4avame , dokato sy6testvuva i counter veche e dlolni 4erti, kolkoto e tyrsenata duma
        if (str[index + counter] !== '_') { // proverqvame dali v stringa na dadeniq indeks s dobaveni dolni 4erti e razli4no ot _
            let word = words.filter(x => x.length == counter)[0] // koqto e ravna na masiva s dumite, filtriran s duma => duljinata i da e ravna na counter, vzemame pyrvata(i edinstweena duma)
            str = str.substring(0, index) + word + str.substring(index + counter) // stringa e raven na srtinga , izrqzan ot na4aloto do indeks, razli4en ot _ , dobavqme dumata, i sled neq ostatyka na stringa
            index = str.indexOf('_') // indeksa se prezapisva sys sledva6toto namerena dolna 4erta
            counter = 0 // countera se prezapisva, za da zapo4ne nanovo za sledwa6tata duma
        }
    }
    console.log(str) // printira sled kato e izlqzlo ot while, za6toto veche nqma _
}
// hardWords([
//     'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.My dad bought me a sled.Mom started a new job as a __________.My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
// ])


function passwordGenerator([firstPart, secondPart, secretWord]) {
    let password = firstPart + secondPart
    let vowels = 'aueioAUEIO'
    let counter = 0
    let base = secretWord.length
    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i])) {
            password = password.substring(0, i) + secretWord[counter % base].toUpperCase() + password.substring(i + 1)
            counter++
        }
    }
    console.log(`Your generated password is ${password.split('').reverse().join('')}`)
}
// passwordGenerator([
//     'ilovepizza',
//     'ihatevegetables',
//     'orange'
// ])

function lettersChangeNumbers(str) {
    str = str.split(' ')
    let alphabet = '0abcdefghijklmnopqrstuvwxyz'
    let result = 0
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split('')
        let firstLetter = str[i].shift()
        let lastLetter = str[i].pop()
        let number = Number(str[i].join(''))
        if (alphabet.includes(firstLetter.toLowerCase())) {
            let index = Number(alphabet.indexOf(firstLetter.toLowerCase()))
            firstLetter == firstLetter.toLowerCase() ? number *= index : number /= index;
        }
        if (alphabet.includes(lastLetter.toLowerCase())) {
            let index = Number(alphabet.indexOf(lastLetter.toLowerCase()))
            lastLetter == lastLetter.toLowerCase() ? number += index : number -= index;
        }
        result += number
    }
    return result.toFixed(2)
}
console.log(lettersChangeNumbers('A12b s17G'))