function solve(arr) {
    let oldSchool = arr.shift().split(' | ')

    for (let line of arr) {
        let [command, ...args] = line.split(' ')
        if (command == 'Join') {
            if (!oldSchool.includes(args[0])) {
                oldSchool.push(args[0])
            }
        } else if (command == 'Drop') {
            if (oldSchool.includes(args[0])) {
                let index = oldSchool.indexOf(args[0])
                oldSchool.splice(index, 1)
            }
        } else if (command == 'Replace') {
            if (oldSchool.includes(args[0]) && !oldSchool.includes(args[1])) {
                let index = oldSchool.indexOf(args[0])
                oldSchool.splice(index, 1, args[1])
            }
        } else {
            console.log(oldSchool.join(' '));
        }
    }
}
// solve([
//         "Romance | Fiction | Horror | Mystery",
//         "Drop Romance",
//         "Join Fantasy",
//         "Stop!"
//     ])
// solve([
//         "Poetry | Romance",
//         "Drop Children",
//         "Replace Fantasy Crime",
//         "Stop!"
//     ])
solve([
    "Thriller | Young | Crime",
    "Join Political",
    "Replace Young Fairytale",
    "Stop!"
])