function solve(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        !result.hasOwnProperty(arr[i]) ? result[arr[i]] = Number(arr[i + 1]) : result[arr[i]] += Number(arr[i + 1]);
    }
    Object.entries(result).map(x => console.log(`${x[0]} -> ${x[1]}`))
}

// Gold -> 155
// Silver -> 10
// Copper -> 17
// solve([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ])
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])