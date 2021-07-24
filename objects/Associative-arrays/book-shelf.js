function solve(arr) {
    let bookShelf = {};
    arr.forEach(line => {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!bookShelf.hasOwnProperty(id)) {
                bookShelf[id] = [genre]
            }
        } else if (line.includes(',')) {
            let [bookInfo, genre] = line.split(', ')
            for (let id in bookShelf) {
                if () {
                    bookShelf[id].push([bookInfo])
                }
            }
        }
    })
    console.log(bookShelf)
}
// 3 sci-fi: 3
// --> Future of Dawn: Aiden Rose
// --> Losing Dreams: Gail Starr
// --> Name of Earth: Jo Bell
// 1 history: 2
// --> Lions and Rats: Gabe Roads
// --> Pilots of Stone: Brook Jay
// 2 mystery: 1
// --> Child of Silver: Bruce Rich
solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
])