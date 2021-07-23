 function solve(arr) {
     let armies = {};
     arr.forEach(line => {
         if (line.includes('arrives')) {
             let [leader] = line.split(' arrives');
             if (!armies.hasOwnProperty(leader)) armies[leader] = [];
         } else if (line.includes(':')) {
             let [leader, args] = line.split(': ');
             let [armyName, armyCount] = args.split(', ');
             if (armies.hasOwnProperty(leader)) {
                 if (!armies[leader].flat().includes(armyName)) {
                     armies[leader].push([armyName, Number(armyCount)]);
                 }
             }
         } else if (line.includes('+')) {
             let [armyName, armyCount] = line.split(' + ');
             for (let army in armies) {
                 for (let i = 0; i < armies[army].length; i++) {
                     if (armies[army][i].includes(armyName)) {
                         armies[army][i][1] += Number(armyCount);
                     }
                 }
             }
         } else if (line.includes('defeated')) {
             let [leader] = line.split(' defeated');
             if (armies.hasOwnProperty(leader)) delete armies[leader];
         }

     });

     Object.entries(armies)
         .sort((a, b) => b[1].flat().filter((x, i) => i % 2 != 0).reduce((a, b) => a + b, 0) - a[1].flat().filter((x, i) => i % 2 != 0).reduce((a, b) => a + b, 0))
         .map(x => console.log(`${x[0]}: ${x[1].flat().filter((x, i) => i % 2 != 0).reduce((a, b) => a + b ,0)}\n${x[1].sort((a,b)=>b[1]-a[1]).map(x=>`>>> ${x[0]} - ${x[1]}`).join('\n')}`));
 
}
// Porter: 58507
// >>> Legion - 55302
// >>> Retix - 3205
// Findlay: 39040
// >>> Britox - 39040
solve([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, -000',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205',
    'Britox + 4500',
    'Findlay: Britox, 34540',
    'Findlay arrives',
    'Findlay: Britox, 3',
])