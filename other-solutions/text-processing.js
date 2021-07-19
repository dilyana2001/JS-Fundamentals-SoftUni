let text = `Hello`
text = text.concat(', ', 'SoftUni', '!')
    // console.log(text)

// charAt(0) = text[0]

let arr = text.split('')
arr[0] = 'h'
    // console.log(arr.join(''))

for (let i = 0; i < text.length; i++) {
    // console.log(text[i]) 
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
    let js = string.substring(start, end) 
    return js
}

// slice(7, -5 ) 
// substring(7, -5)



// replace()
// replaceAll()

function subraS(text, word) {
    while (text.includes(word)) {
        let repeat = (length) => '*'.repeat(length)
        text = text.replace(word, repeat(word.length))
    }
    return text
}


function solf(str) {
    let text = str.split(' ').filter(str => str.length > 0).join(' ')
    console.log(text)

    // console.log(str.trim()) 
}
// solf('              I love JS!        ')


function bebe(rexha) {
    return rexha.startsWith('I')
}

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



function clock() {
    hours = '6'.padStart(2, '0') 
    minutes = '22'.padStart(2, '0')
    seconds = '7'.padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}
// console.log(clock())



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
