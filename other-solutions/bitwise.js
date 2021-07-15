function binaryDigitsCount(input) {
    let number = input[0]
    let bitwiseNumber = input[1]
    let count = 0;
    while (number > 0) {
        let leftover = number % 2
        if (leftover === bitwiseNumber) {
            count++
        }
        number = parseInt(number / 2) // celo4isleno delenie
    }
    console.log(count)
}
// binaryDigitsCount([20, 0])

function bitatPosition1(n) {
    let bit = ''
    while (n > 0) {
        let leftover = n % 2
        if (leftover === 0) {
            bit += 0
        } else {
            bit += 1
        }
        n = parseInt(n / 2) // celo4isleno delenie
    }

    bit = bit.toString().split('').reverse().join('') // vzemame polu4enoto dvoi4no 4islo, koeto e na opaki i go obry6tame
    console.log((bit >> 1) & 1)
}
// bitatPosition1(2)




function pthBit(n, p) {
    let bit = ''
    while (n > 0) {
        let leftover = n % 2
        if (leftover === 0) {
            bit += 0
        } else {
            bit += 1
        }
        n = parseInt(n / 2)
    }
    bit = bit + '0' //?
    bit = bit.toString().split('').reverse().join('')
    bit = (bit >> p) & 1 // right to left
    console.log(bit)
}
// pthBit(2145, 5)
// pthBit(512, 0)
// pthBit(111, 8) // ne raboti tozi input
// pthBit(255, 7)

function bitDestroyer(n, p) {
    let bit = ''
    while (n > 0) {
        let leftover = n % 2
        if (leftover === 0) {
            bit += 0
        } else {
            bit += 1
        }
        n = parseInt(n / 2)
    }
    bit = bit + '0'
    bit = bit.toString().split('')
    bit.splice(p, 1, 0)
    let result = 0
    let power = 0
    for (let i = 0; i < bit.length; i++) {
        result += Number(bit[i]) * (2 ** power)
        power++
    }
    console.log(result)
}
// bitDestroyer(1313, 5)
// bitDestroyer(231, 2)
// bitDestroyer(111, 6)
// bitDestroyer(111, 4)