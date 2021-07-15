function solve(arr) {
    let perDay = Number(arr.shift());
    let workers = Number(arr.shift());
    let target = Number(arr.shift());
    let sum = 0;
    let diff = 0;

    for (let i = 1; i < 31; i++) {
        if (i % 3 === 0) sum += (perDay * 0.75) * workers
        else sum += perDay * workers
        sum = Math.floor(sum)
    }
    console.log(`You have produced ${sum} biscuits for the past month.`)

    if (target > sum) {
        diff = target - sum
        console.log(`You produce ${((diff/target)*100).toFixed(2)} percent less biscuits.`);
    } else {
        diff = sum - target
        console.log(`You produce ${((diff/target)*100).toFixed(2)} percent more biscuits.`);
    }
}
// solve([
//         "78",
//         "8",
//         "16000"
//     ])
solve([
    "65",
    "12",
    "26000"
])
solve([
    "163",
    "16",
    "67020"
])