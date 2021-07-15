function destinationMapper(str) {
    let result = []
    let regex = /([=]|[\/])([A-Z][A-Za-z]{2,})\1/g
    if (regex.test(str)) {
        let destination = str.match(regex);
        destination.forEach(word => {
            result.push(word.slice(1, (word.length - 1)));
        });
    }
    console.log(`Destinations: ${result.join(', ')}\nTravel Points: ${result.join('').length}`)
}
destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')