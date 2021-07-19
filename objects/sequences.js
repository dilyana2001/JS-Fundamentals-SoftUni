function solve(arr) {
    arr = arr
        .map(JSON.parse)
        .map(x => x.sort((a, b) => b - a))
        .map(JSON.stringify);
    [...new Set(arr)]
    .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(x => console.log(`[${x.join(', ')}]`));
}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])