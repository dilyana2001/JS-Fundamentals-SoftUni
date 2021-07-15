const atExample = [5, 12, 8, 130, 44];
const atExam = 2;
// console.log(`Using an index of ${atExam} the item returned is ${atExample.at(atExam)}`);
// // expected output: "Using an index of 2 the item returned is 8"
// atExam = -2;
// console.log(`Using an index of ${atExam} item returned is ${atExample.at(atExam)}`);
// // expected output: "Using an index of -2 item returned is 130"


function swapElements(arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const concatExample1 = ['a', 'b', 'c'];
const concatExample2 = ['d', 'e', 'f'];
const concatExample3 = concatExample1.concat(concatExample2);
// console.log(concatExample3);
// // expected output: Array ["a", "b", "c", "d", "e", "f"]




const copyWithinExample = ['a', 'b', 'c', 'd', 'e'];
// // copy to index 0 the element at index 3
// console.log(copyWithinExample.copyWithin(0, 3, 4));
// // expected output: Array ["d", "b", "c", "d", "e"]
// // copy to index 1 all elements from index 3 to the end
// console.log(copyWithinExample.copyWithin(1, 3));
// // expected output: Array ["d", "d", "e", "d", "e"]




const entriesExample = ['a', 'b', 'c'];
const iterator1 = entriesExample.entries();
// console.log(iterator1.next().value);
// // expected output: Array [0, "a"]
// console.log(iterator1.next().value);
// // expected output: Array [1, "b"]





const isBelowThreshold = (currentValue) => currentValue < 40;
const everyExample = [1, 30, 39, 29, 10, 13];
// console.log(everyExample.every(isBelowThreshold));
// // expected output: true




const fillExample = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
// console.log(fillExample.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]
// // fill with 5 from position 1
// console.log(fillExample.fill(5, 1));
// // expected output: [1, 5, 5, 5]
// console.log(fillExample.fill(6));
// // expected output: [6, 6, 6, 6]




const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filterExample = words.filter(word => word.length > 6);
// console.log(filterExample);
// // expected outpu: ['exuberant', 'destruction', 'present']




const findExample = [5, 12, 8, 130, 44];
const found = findExample.find(element => element > 10);
// console.log(found);
// // expected output: 12




const findIndexExample = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// console.log(findIndexExample.findIndex(isLargeNumber));
// // expected output: 3




const flatExample = [0, 1, 2, [3, 4]];
// console.log(flatExample.flat());
// // expected output: [0, 1, 2, 3, 4]
const flatExample2 = [0, 1, 2, [
    [
        [3, 4]
    ]
]];
// console.log(flatExample2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]






const flatMapExample = [1, 2, 3, 4];
// console.log(flatMapExample.map(x => [x * 2]))
//     // [[2], [4], [6], [8]]
// console.log(flatMapExample.flatMap(x => [x * 2]))
//     // [2, 4, 6, 8]
//     // only one level is flattened
// console.log(flatMapExample.flatMap(x => [
//         [x * 2]
//     ]))
//     // [[2], [4], [6], [8]]
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const flatMapExample3 = [5, 4, -3, 20, 17, -33, -4, 18]
    //       |\  \  x   |  | \   x   x   |
    //      [4,1, 4,   20, 16, 1,       18]
    // console.log(flatMapExample3.flatMap((n) =>
    //         (n < 0) ? [] :
    //         (n % 2 == 0) ? [n] : [n - 1, 1]
    //     ))
    //     // expected output: [4, 1, 4, 20, 16, 1, 18]




const forEachExample = ['a', 'b', 'c'];
// forEachExample.forEach(element => console.log(element));
// // expected output: "a"
// // expected output: "b"
// // expected output: "c"





const fromMapExample = new Map([
        [1, 2],
        [2, 4],
        [4, 8]
    ])
    // console.log(Array.from(fromMapExample))
    //     // [[1, 2], [2, 4], [4, 8]]
const fromMapExample1 = new Map([
        ['1', 'a'],
        ['2', 'b'],
        ['6', 'f'],
        ['7', 'd']
    ])
    // console.log(Array.from(fromMapExample1.values()))
    //     // ['a', 'b'];
    // console.log(Array.from(fromMapExample1.keys()))
    //     // ['1', '2'];
    // console.log(Array.from('foo'));
    // // expected output: Array ["f", "o", "o"]
    // console.log(Array.from([1, 2, 3], x => x + x));
    // // expected output: Array [2, 4, 6]





const includesExample = [1, 2, 3];
// console.log(includesExample.includes(2));
// // expected output: true
const includeExample2 = ['cat', 'dog', 'bat'];
// console.log(includeExample2.includes('cat'));
// // expected output: true
// console.log(includeExample2.includes('at'));
// // expected output: false




const joinExample = ['Fire', 'Air', 'Water', 'Earth'];
// console.log(joinExample.join());
// // expected output: "Fire,Air,Water"
// console.log(joinExample.join(''));
// // expected output: "FireAirWater"
// console.log(joinExample.join('-'));
// // expected output: "Fire-Air-Water"






const keysExample = ['a', 'b', 'c'];
const iterator = keysExample.keys();
for (const key of iterator) {
    // console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2




const lastIndexOfExample = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(lastIndexOfExample.lastIndexOf('Dodo'));
// // expected output: 3
// console.log(lastIndexOfExample.lastIndexOf('Tiger'));
// // expected output: 1




const mapExample = [1, 4, 9, 16];
// pass a function to map
const map1 = mapExample.map(x => x * 2);
// console.log(map1);
// // expected output: Array [2, 8, 18, 32]





// console.log(Array.of(7)) // [7]
// console.log(Array(7)) // array of 7 empty slots
// console.log(Array.of(1, 2, 3)) // [1, 2, 3]
// console.log(Array(1, 2, 3)) // [1, 2, 3]





const popExample = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(popExample.pop());
// // expected output: "tomato"
// console.log(popExample);
// // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// console.log(popExample.pop())
// console.log(popExample);
// // expected output: Array ["broccoli", "cauliflower", "cabbage"]







const pushExample = ['pigs', 'goats', 'sheep'];
const pushExample2 = pushExample.push('cows');
// // console.log(pushExample2);
// // // expected output: 4
// // console.log(pushExample);
// // // expected output: Array ["pigs", "goats", "sheep", "cows"]
// pushExample.push('chickens', 'cats', 'dogs');
// console.log(pushExample);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]




const reduceExample = [1, 2, 3, 4];
// const reduceExample2 = (accumulator, currentValue) => accumulator * currentValue;
// // 1 + 2 + 3 + 4
// console.log(reduceExample.reduce(reduceExample2));
// // expected output: 10
// // 5 + 1 + 2 + 3 + 4
// console.log(reduceExample.reduce(reduceExample2, 5));
// // expected output: 15





const reduceRightExample = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);
// console.log(reduceRightExample);
// // expected output: Array [4, 5, 2, 3, 0, 1]





const reverseExample = ['one', 'two', 'three'];
// // console.log('reverseExample:', reverseExample);
// // // expected output: "reverseExample:" Array ["one", "two", "three"]
// const reversed = reverseExample.reverse();
// console.log('reversed:', reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]
// // Careful: reverse is destructive -- it changes the original array.
// console.log('reverseExample:', reverseExample);
// // expected output: "reverseExample:" Array ["three", "two", "one"]





const shiftExample = [1, 2, 3];
const firstElement = shiftExample.shift();
// console.log(shiftExample);
// // expected output: Array [2, 3]
// console.log(firstElement);
// // expected output: 1





const sliceExample = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(sliceExample.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(sliceExample.slice(2, 4));
// // expected output: Array ["camel", "duck"]
// console.log(sliceExample.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]





const someExample = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
// console.log(someExample.some(even));
// // expected output: true





const sortExample = ['March', 'Jan', 'Feb', 'Dec'];
sortExample.sort();
// console.log(sortExample);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]
// const SortExampleTwo = [1, 30, 4, 21, 100000];
// SortExampleTwo.sort();
// console.log(SortExampleTwo);
// // expected output: Array [1, 100000, 21, 30, 4]





const spliceExample = ['Jan', 'March', 'April', 'June'];
spliceExample.splice(1, 0, 'Feb');
// inserts at index 1
// console.log(spliceExample);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// spliceExample.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(spliceExample);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]





const toLocateStringExample = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = toLocateStringExample.toLocaleString('en', { timeZone: 'UTC' });
// console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
//     This assumes "en"
// locale and UTC timezone - your results may vary





const toStringExample = [1, 2, 'a', '1a'];
// console.log(toStringExample.toString());
// // expected output: "1,2,a,1a"




const unshiftExample = [1, 2, 3];
// console.log(unshiftExample.unshift(4, 5));
// // expected output: 5
// console.log(unshiftExample);
// // expected output: Array [4, 5, 1, 2, 3]



const valuesExample = ['a', 'b', 'c'];
const arrayIterator = valuesExample.values();
for (const value of arrayIterator) {
    console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"