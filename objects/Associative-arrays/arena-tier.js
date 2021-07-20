function solve(arr) {
    let heroes = {};
    let result = 0;
    // Gladius: 700 skill
    // - Shield <!> 250
    // - Support <!> 250
    // - Heal <!> 200
    // Peter: 400 skill
    // - Duck <!> 400
    arr.forEach(line => {
                let [heroName, skill, points] = line.split(' -> ');
                points = Number(points);
                if (heroName != 'Ave Cesar') {
                    if (points) {
                        if (!heroes.hasOwnProperty(heroName)) {
                            result = points
                            heroes[heroName] = [{ skill, points, result }];
                        } else {
                            result += points
                            heroes[heroName].push({ skill, points, result });
                        }
                    } else {
                        let [firstHero, secondHero] = heroName.split(' vs ')
                            // if (heroes.hasOwnProperty(firstHero) && heroes.hasOwnProperty(secondHero)) {
                        console.log(Object.entries(heroes))
                    }

                } else {
                    // Slowest but very readable and doesn't require a variable way for finding the last or the only one element of an array
                    // myArray.slice(-1)[0]
                    Object.entries(heroes).sort((a, b) => b[1].slice(-1)[0].result - a[1].slice(-1)[0].result)
                        .map(x => console.log(`${x[0]}: ${x[1].slice(-1)[0].result} skill\n${x[1]
                            .sort((a,b)=>a.skill.localeCompare(b.skill)).sort((a, b) => b.points - a.points)
                            .map(x=>`- ${x.skill} <!> ${x.points}`).join('\n')}`));
                         return;
        }
    });
}

solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    // Gladius and Peter don't have
// common technique, so the duel
// isn't valid.
    'Gladius vs Julius',
    // Gladius wins vs Julius /common
// technique: 'Shield'. Julius is
// demoted.
    'Gladius vs Maximilian',
    // Maximilian doesn't exist so the
// duel isn't valid.
    'Ave Cesar'
    ])
    // Stefan: 450 skill
// - Tiger <!> 250
// - Duck <!> 200
// Peter: 400 skill
// - BattleCry <!> 400
// Alex: 300 skill
// - PowerPunch <!> 300
// solve([
//         'Peter -> BattleCry -> 400',
//         'Alex -> PowerPunch -> 300',
//         'Stefan -> Duck -> 200',
//         'Stefan -> Tiger -> 250',
//         'Ave Cesar'
//     ])