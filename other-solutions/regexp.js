function fullName(input) {
    let result = []
    let data = input.split(', ')
    for (let line of data) {
        let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
        let match = regex.exec(line)
        if (match) {
            result.push(match[0])
        }
    }
    console.log(result.join(' '))
}

function fullName(str) {
    let validNames = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;
    let validName;
    while (validName = pattern.exec(str)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}



function fullName(str) {
    console.log(str.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '))
}
// fullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov')


function matchPhoneNumber(numbers) {
    console.log(numbers.match(/([+][359]+[\s]2[\s][\d]{3}[\s][\d]{4}\b)|([+][359]+-2-[\d]{3}-[\d]{4}\b)/g).join(', '))
}

function matchPhoneNumber(numbers) {
    console.log(numbers.match(/([+][359]+([\s-])2\2[\d]{3}\2[\d]{4}\b)/g).join(', '))
}
// matchPhoneNumber('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')


function matchesDates(dates) {
    let result = []
    let regex = /\b(?<day>[\d]{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[\d]{4})\b/g
    while (match = regex.exec(dates)) {
        result.push(match)
    }
    for (let element of result) {
        if (element) {
            console.log(`Day: ${element.groups.day}, Month: ${element.groups.month}, Year: ${element.groups.year}`)
        }
    }
}

// matchesDates('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016')

function occurrences(str) {
    let result = str.match(/[^ice ]+?/g).join('')
    console.log(result)
}
// occurrences('ice kicegiciceeb ')

function furniture(input) {
    let result = 'Bought furniture:'
    let sum = 0
    for (let line of input) {
        let regex = />>(?<name>[a-zA-Z]+)<<(?<price>[\d]+[.]?[\d]+)!(?<quantity>[\d]+)/g
        let match = regex.exec(line)
        if (match) {
            result += `\n${match.groups.name}`
            sum += Number(match.groups.price) * Number(match.groups.quantity)
        }
    }
    result += `\nTotal money spend: ${sum.toFixed(2)}`
    return result
}
// console.log(furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']))


function race(input) {
    let racers = {}
    input.shift()
        .split(', ')
        .map((name) => racers[name] = 0)
    for (let line of input) {
        let regexAZ = /[A-Za-z]+/g
        let regexD = /[\d]/g
        let name = line.match(regexAZ).join('')
        if (racers.hasOwnProperty(name)) {
            let km = line.match(regexD).map(Number).reduce((a, b) => a + b)
            racers[name] += km
        }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)
}
// race(['George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'
// ])

function barIncome(input) {
    let sum = 0
    let total = 0
    for (let line of input) {
        let regex = /%(?<name>[A-Z][a-z]*)%[^|$%.\d]*<(?<product>[\w]+)>[^|$%.\d]*[|][^|$%.\d]*(?<quantity>[\d]+)[^|$%.\d]*[|][^|$%.\d]*(?<price>[\d]+[.]?[\d]*)[^|$%.\d]*[$]/g
        let match = regex.exec(line)
        if (match) {
            total = Number(match.groups.quantity) * Number(match.groups.price)
            console.log(`${match.groups.name}: ${match.groups.product} - ${total.toFixed(2)}`)
        }
        if (match != null) {
            sum += total
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}
// barIncome([
//         '%George%<Croissant>|2|10.3$',
//         '%Peter%<Gum>|1|1.3$',
//         '%Maria%<Cola>|1|2.4$',
//         'end of shift'
//     ])
// barIncome([
//         '%InvalidName%<Croissant>|2|10.3$',
//         '%Peter%<Gum>1.3$',
//         '%Maria%<Cola>|1|2.4',
//         '%Valid%<Valid>valid|10|valid20$',
//         'end of shift',
//     ])


function exactEmails(input) {
    let line = input[0]
    let regex = /^|\s[a-z\d]+[.]?[_]?[-]?[a-z\d]+@{1}[a-z]+[-]?[a-z]+[.]?[a-z]+[.][a-z]+/g
    if (line.match(regex) != null) {
        console.log(line.match(regex).join('\n'))
    }
}
// exactEmails([
//     'Please contact us at: support@github.com.', 'end'
// ])

function winningTickets(input) {

}
// winningTickets(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey'])