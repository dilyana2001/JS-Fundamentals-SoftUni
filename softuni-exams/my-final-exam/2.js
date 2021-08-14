function solve(input) {
    let numberOfInputs = input.shift()

    input.forEach(line => {
        let regex = /([\W\S_]+)[>](?<passOne>[\d]{3})[|](?<passTwo>[a-z]{3})[|](?<passThree>[A-Z]{3})[|](?<passFour>[\W\S_^<>]{3})[<]\1/
        if (regex.test(line)) {
            let match = regex.exec(line)
            console.log(`Password: ${match.groups.passOne+match.groups.passTwo+match.groups.passThree+match.groups.passFour}`);
        } else {
            console.log(`Try another password!`);
        }
    })
}
// solve([
//         "3",
//         "##>00|no|NO|!!!?<###",
//         "##>123|yes|YES|!!!<##",
//         "$$<111|noo|NOPE|<<>$$"
//     ])
solve([
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
])