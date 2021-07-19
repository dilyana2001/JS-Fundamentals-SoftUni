function systemReg(input) {
    let systemRegister = {}
    for (let line of input) {
        let [systemName, componentName, subComponentName] = line.split(' | ')

        if (!systemRegister.hasOwnProperty(systemName)) {
            systemRegister[systemName] = []
        }
        if (!systemRegister[systemName].hasOwnProperty(componentName)) {
            systemRegister[systemName][componentName] = []
        }
        systemRegister[systemName][componentName].push(subComponentName)
    }
    let sorted = Object.keys(systemRegister).sort((a, b) => Object.keys(systemRegister[b]).length - Object.keys(systemRegister[a]).length || a.localeCompare(b))
    sorted.map(key => {
        console.log(`${key}`)
        let sortedSub = Object.keys(systemRegister[key]).sort((a, b) => Object.keys(systemRegister[key][b].length) - Object.keys(systemRegister[key][a].length))
        sortedSub.map(x => {
            console.log(`|||${x}`)
            systemRegister[key][x].map(y => {
                console.log(`||||||${y}`)
            })
        })
    })
}

function solve2(params) {
    let systems = new Map();
    for (const row of params) {
        let [name, component, subComponent] = row.split(' | ');
        if (!systems.get(name)) {
            systems.set(name, new Map());
        }
        let setOfSybcomponents = systems.get(name).get(component);
        if (!setOfSybcomponents) {
            systems.get(name).set(component, []);
            setOfSybcomponents = systems.get(name).get(component);
        }
        setOfSybcomponents.push(subComponent);
    }
    let ident = '|||';
    let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size // By components count -> x[1].size
        :
        a[0] < b[0] ? -1 // By Name -> x[0]
        :
        a[0] > b[0] ? 1 :
        0;
    let result = [...systems]
        .sort((a, b) => sortSystems(a, b))
        .map(sys => sys[0] +
            '\n' + [...sys[1]]
            .sort((a, b) => b[1].length - a[1].length) // By subcomponents count -> x[1].length
            .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
            .join('\n')
        )
        .join('\n');
    console.log(result.trim());
}
systemReg([
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ])
    // Lambda
    // |||CoreA
    // ||||||A23
    // ||||||A24
    // ||||||A25
    // |||CoreB
    // ||||||B24
    // |||CoreC
    // ||||||C4
    // SULS
    // |||Main Site
    // ||||||Home Page
    // ||||||Login Page
    // ||||||Register Page
    // |||Judge Site
    // ||||||Login Page
    // ||||||Submittion Page
    // |||Digital Site
    // ||||||Login Page
    // Indice
    // |||Session
    // ||||||Default Storage
    // ||||||Default Security