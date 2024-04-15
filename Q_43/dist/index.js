let magician = ['Harry Potter', 'Heermoine Grnger', 'Ron Wesley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the Great  ' + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log(`\n\nThis is my original array :`);
show_magicians(magician);
console.log(`\n\nThis is my modified copy of the array :`);
show_magicians(copyMagicianArray);
export {};
