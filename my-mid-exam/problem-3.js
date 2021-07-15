function solve(arr) {
    let listOfProducts = arr.shift().split('|')
    for (let line of arr) {
        let [command, ...args] = line.split('%')
        if (command == 'Important') {
            if (listOfProducts.includes(args[0])) {
                let index = listOfProducts.indexOf(args[0])
                listOfProducts.splice(index, 1)
            }
            listOfProducts.unshift(args[0])
        } else if (command == 'Add') {
            if (!listOfProducts.includes(args[0])) {
                listOfProducts.push(args[0])
            } else {
                console.log(`The product is already in the list.`);
            }
        } else if (command == 'Swap') {
            if (listOfProducts.includes(args[0]) && listOfProducts.includes(args[1])) {
                let firstIndex = listOfProducts.indexOf(args[0])
                let secondIndex = listOfProducts.indexOf(args[1])
                let swap = listOfProducts[firstIndex]
                listOfProducts[firstIndex] = listOfProducts[secondIndex]
                listOfProducts[secondIndex] = swap
            } else if (!listOfProducts.includes(args[0])) {
                console.log(`Product ${args[0]} missing!`);
            } else if (!listOfProducts.includes(args[1])) {
                console.log(`Product ${args[1]} missing!`);
            }
        } else if (command == 'Remove') {
            if (listOfProducts.includes(args[0])) {
                let index = listOfProducts.indexOf(args[0])
                listOfProducts.splice(index, 1)
            } else {
                console.log(`Product ${args[0]} isn't in the list.`);
            }
        } else if (command == 'Reversed') {
            listOfProducts.reverse()
        } else {
            listOfProducts.map((x, i) => console.log(`${i+1}. ${x}`))
        }
    }
}
// solve([
//         "apple | cheese | salt | bananas",
//         "Remove%cheese",
//         "Swap%salt%bananas",
//         "Shop!"
//     ])
solve([
    "eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"
])