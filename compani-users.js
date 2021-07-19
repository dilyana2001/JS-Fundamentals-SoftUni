function solve(arr) {
    let result = {};
    arr.forEach(line => {
        let [company, id] = line.split(' -> ');
        if (!result.hasOwnProperty(company)) result[company] = [];
        if (!result[company].includes(id)) result[company].push(id);
    })
    Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}\n-- ${x[1].join('\n-- ')}`));
}
// HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345
// solve([
//         'SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345'
//     ])
// Lenovo
// -- XX23456
// Movement
// -- DD11111
// SoftUni
// -- AA12345
// -- CC12344
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])