function solve(input) {
    let possibleMessages = Number(input.shift());
    let messenger = {};
    let commandParser = {
        'Add': (username, sent, received) => {
            sent = Number(sent);
            received = Number(received);
            if (!messenger.hasOwnProperty(username)) {
                messenger[username] = { sent, received };
            }
        },
        'Message': (sender, receiver) => {
            if (messenger.hasOwnProperty(sender) && messenger.hasOwnProperty(receiver)) {
                messenger[sender].sent += 1;
                messenger[receiver].received += 1;
                if (messenger[sender].sent + messenger[sender].received >= possibleMessages) {
                    delete messenger[sender];
                    console.log(`${sender} reached the capacity!`);
                }
                if (messenger[receiver].sent + messenger[receiver].received >= possibleMessages) {
                    delete messenger[receiver];
                    console.log(`${receiver} reached the capacity!`);
                }
            }
        },
        'Empty': (username) => {
            if (username === 'All') {
                messenger = {};
            }
            delete messenger[username];
        },
        'Statistics': () => {
            console.log(`Users count: ${Object.entries(messenger).length}`);
            Object.entries(messenger).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].received - a[1].received)
                .forEach(x => console.log(`${x[0]} - ${x[1].sent + x[1].received}`));
        }
    }

    input.forEach(line => {
        let [command, ...args] = line.split('=');
        commandParser[command](...args);
    })
}

// Amy reached the capacity!
// Users count: 4
// Mark - 12
// Michael - 13
// Blake - 13
// Clark - 4



// solve([
//         "10",
//         "Add=Berg=9=0",
//         "Add=Kevin=0=0",
//         "Message=Berg=Kevin",
//         "Add=Mark=5=4",
//         "Statistics"
//     ])
solve([
        "20",
        "Add=Mark=3=9",
        "Add=Berry=5=5",
        "Add=Clark=4=0",
        "Empty=Berry",
        "Add=Blake=9=3",
        "Add=Michael=3=9",
        "Add=Amy=9=9",
        "Message=Blake=Amy",
        "Message=Michael=Amy",
        "Statistics"
    ])
    // solve([
    //     "12",
    //     "Add=Bonnie=3=5",
    //     "Add=Johny=4=4",
    //     "Empty=All",
    //     "Add=Bonnie=3=3",
    //     "Statistics"
    // ])