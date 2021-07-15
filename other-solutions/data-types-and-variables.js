function charsToString(first, second, third) {
    let newArr = []
    newArr.push(first, second, third)
    console.log(newArr.join(''))
}
// charsToString(
//     'a',
//     'b',
//     'c')

function townInfro(name, population, area) {
    console.log(`Town ${name} has population of ${population} and area ${area} square km.`)
}
// townInfro(
//     'Sofia',
//     1286383,
//     492)

function convertMetersToKilometres(n) {
    console.log((n * 0.001).toFixed(2))
}
// convertMetersToKilometres(1852)

function poundsToDollars(n) {
    console.log((n * 1.31).toFixed(3))
}
// poundsToDollars(80)

function reservedChars(first, second, third) {
    let newArr = []
    newArr.push(third, second, first)
    console.log(newArr.join(' '))
}
// reservedChars(
//     'A',
//     'B',
//     'C')


function lowerUpper(l) {
    if (l === l.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}