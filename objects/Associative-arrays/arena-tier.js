function solve(arr) {
    let heroes = {};
    arr.forEach(line => {
        let [heroName, skill, points] = line.split(' -> ');
        points = Number(points);
        if (heroName != 'Ave Cesar') {
            if (points) {
                if (!heroes.hasOwnProperty(heroName)) {
                    heroes[heroName] = [{ skill, points }];
                } else {
                    let found = false;
                    for (let update in heroes[heroName]) {
                        if (skill === heroes[heroName][update].skill) {
                            found = true;
                            if (points > heroes[heroName][update].points) {
                                heroes[heroName][update].points = points;
                            }
                            break;
                        }
                    }
                    if (!found) {
                        heroes[heroName].push({ skill, points });
                    }
                }
            } else {
                let [firstHero, secondHero] = heroName.split(' vs ')
                if (heroes.hasOwnProperty(firstHero) && heroes.hasOwnProperty(secondHero)) {
                    Object.values(heroes[firstHero]).forEach(el1 => {
                        if (heroes.hasOwnProperty(firstHero) && heroes.hasOwnProperty(secondHero)) {
                            Object.values(heroes[secondHero]).forEach(el2 => {
                                if (el1.skill === el2.skill) {
                                    let totalFirstHero = Object.values(heroes[firstHero]).reduce((a, b) => a + b.points, 0);
                                    let totalSecondHero = Object.values(heroes[secondHero]).reduce((a, b) => a + b.points, 0);
                                    if (totalFirstHero > totalSecondHero) {
                                        delete heroes[secondHero];
                                    } else {
                                        delete heroes[firstHero];
                                    }
                                }
                            });
                        }
                    });
                }
            }
        }
    });

    Object.entries(heroes).sort((a, b) => (b[1].reduce((a, b) => a + b.points, 0) - a[1].reduce((a, b) => a + b.points, 0)) || a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}: ${x[1].reduce((a, b) => a + b.points, 0)} skill\n${x[1]
            .sort((a, b) => b.points - a.points || a.skill.localeCompare(b.skill))
            .map(x => `- ${x.skill} <!> ${x.points}`).join('\n')}`));
}

// Gladius: 700 skill
// - Shield <!> 250
// - Support <!> 250
// - Heal <!> 200
// Peter: 400 skill
// - Duck <!> 400
solve([
        'Peter -> Duck -> 400',
        'Peter -> Duck -> 800',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Support -> 350',
        'Gladius -> Shield -> 250',
        'Gladius -> Duck -> 800',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ])