function activationKeys(input) {
    let commandParser = {
        'Contains': contains,
        'Flip': flip,
        'Slice': sliceD,
        'Generate': generate
    }

    let activationKey = input.shift();

    input.forEach(line => {
        let [command, ...args] = line.split('>>>');
        commandParser[command](...args)
    })


    function contains(substring) {
        if (activationKey.includes(substring)) {
            console.log(`${activationKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
    }

    function flip(type, start, end) {
        let string = activationKey.substring(start, end);
        type === 'Upper' ? string = string.toUpperCase() : string = string.toLowerCase();
        activationKey = activationKey.substring(0, start) + string + activationKey.substring(end, activationKey.length);
        console.log(activationKey);
    }

    function sliceD(start, end) {
        activationKey = activationKey.substring(0, start) + '' + activationKey.substring(end, activationKey.length);
        console.log(activationKey);
    }

    function generate() {
        console.log(`Your activation key is: ${activationKey}`);
    }
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])