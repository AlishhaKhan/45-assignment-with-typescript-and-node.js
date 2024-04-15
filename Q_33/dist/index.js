let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinlEnding;
    if (num === 1) {
        ordinlEnding = 'st';
    }
    else if (num === 2) {
        ordinlEnding = 'nd';
    }
    else if (num === 3) {
        ordinlEnding = 'rd';
    }
    else {
        ordinlEnding = 'th';
    }
    console.log(num + ordinlEnding);
}
export {};
