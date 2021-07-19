function worldTour(arr) {
    let str = arr.shift(0)
    let commands = {
        'Add Stop': (i, city, str) => { if (str.charAt(i) !== '') return str.slice(0, i) + city + str.slice(i) },
        'Remove Stop': (start, end) => {
            if (str.charAt(start) !== '' && str.charAt(end) !== '') {
                return str.replace(str.substring(start, ++end), '')
            } else {
                return str
            }
        },
        'Switch': (str1, str2) => { return str.replace(str1, str2) },
        'Travel': () => { return `Ready for world tour! Planned stops: ${str}` }
    }
    arr.forEach(row => {
        let [command, ...args] = row.split(':')
        str = commands[command](...args, str)
        console.log(str);
    })
}
worldTour([
        'Hawai::Cyprys-Greece',
        'Add Stop:7:Rome',
        'Remove Stop:11:16',
        'Switch:Hawai:Bulgaria',
        'Travel'
    ])
    // Hawai::RomeCyprys-Greece
    // Hawai::Rome-Greece
    // Bulgaria::Rome-Greecej