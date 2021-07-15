let text = `Hello` // strings are IMMUTABLE (READ-ONLY), we can change them with methods, when split them to ARrays
text = text.concat(', ', 'SoftUni', '!')
    // console.log(text)

// charAt(0) = text[0]

let arr = text.split('')
arr[0] = 'h' // promenqme string, kato go splitvame kym masiv
    // console.log(arr.join(''))

for (let i = 0; i < text.length; i++) {
    // console.log(text[i]) // dva na4ina s for, za izvejdane na vsqka bukva na nov red
}
for (let letter of text) {
    // console.log(letter)
}

function indexOf(text) {
    indexOf()
    lastIndexOf()
}

function substring(string) {
    let start = 2
    let end = start + 10
    let js = string.substring(start, end) // vmesto substr()
    return js
}

// slice(7, -5 ) => wzema ot 7mi do kraq, bez poslednite 5
// substring(7, -5) => vzema ot 0 do 7 (pravi -5 na nula i zamenq, kakto sledva : 0, 7)



// zamestvane s :
// replace()
// replaceAll()

function subraS(text, word) {
    while (text.includes(word)) {
        let repeat = (length) => '*'.repeat(length)
        text = text.replace(word, repeat(word.length))
    }
    return text
}
// console.log(subraS('Alot bitches around', 'itc')) // Alot b***hes around

function solf(str) {
    let text = str.split(' ').filter(str => str.length > 0).join(' ')
    console.log(text)

    // console.log(str.trim()) 
}
// solf('              I love JS!        ')


function bebe(rexha) {
    return rexha.startsWith('I')
}
// console.log(bebe('I love you'))

function doja(cat) {
    return startsWiths(cat, 'word')

    function startsWiths(cat, substring) {
        let myTextSubstr = cat.substring(0, substring.length)
        return myTextSubstr === substring
    }

    function endsWiths(cat, substring) {
        let endingSubstr = cat.slice(-substring.length)
        return endingSubstr === substring
    }
}
// console.log(doja('word no more'))


function clock() {
    hours = '6'.padStart(2, '0') // dobavq nula otpred , pri nujda
    minutes = '22'.padStart(2, '0')
    seconds = '7'.padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}
// console.log(clock())



// function bullet(forMy, valentine) {
//     let searchedValentine = `${valentine}`
//     let indexOfSearched = forMy.indexOfSearched()
//     let demon = 0
//     while (indexOfSearched !== -1) {
//         demon++
//         if (forMy.endsWiths(searchedValentine.trim())) {
//             demon++
//         }
//         if (forMy.startsWiths(searchedValentine.trim())) {
//             demon++
//         }
//     }
//     return demon

//     function startsWiths(forMy, substring) {
//         let myTextSubstr = forMy.substring(0, substring.length)
//         return myTextSubstr === substring
//     }

//     function endsWiths(forMy, substring) {
//         let endingSubstr = forMy.slice(-substring.length)
//         return endingSubstr === substring
//     }
// }
// console.log(bullet())


function printCharacters(str) {
    for (let el of str) {
        console.log(el)
    }
}
// printCharacters('AWord')

function substring(string, strIndex, count) {
    return string.substring(strIndex, count + strIndex)
}
// console.log(substring('ASentance', 1, 8))

function censore(string, strWord) {
    while (string.includes(strWord)) {
        let repeat = (length) => '*'.repeat(length)
        string = string.replace(strWord, repeat(strWord.length))
    }
    return string
}
// console.log(censore('A small sentence with some words', 'small'))

function occurences(sentence, word) {
    let words = sentence.split(' ')
    let counter = 0
    for (let wor of words) {
        if (wor === word) {
            counter++
        }
    }
    return counter
}
// console.log(occurences('This is a word and it also is a sentence', 'is'))