function adAstra(arr) {
    let regex = /([|\|#])([a-zA-Z ]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]+)\1/g;
    let products = [];
    let nutrition = 0;
    let execute = regex.exec(arr.join(''));
    while (execute) {
        let item = execute[2];
        let date = execute[3];
        let calories = Number(execute[4]);
        nutrition += calories;
        products.push({ item, date, calories });
        execute = regex.exec(arr.join(''));
    }
    console.log(`You have food to last you for: ${Math.floor(nutrition / 2000)} days!`);
    Object.entries(products).forEach(x => console.log(`Item: ${x[1].item}, Best before: ${x[1].date}, Nutrition: ${x[1].calories}`));
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'

])