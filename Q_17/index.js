// store loction in your array
let places = ['Makkah', 'Toronto', 'Paris', 'India'];
//original order
console.log('original' + places);
//alphabetrical order without modifying
console.log('copy' + [...places].sort());
//still in its original order
console.log('original' + places);
//in reverse alphabetrical order
console.log('copy' + [...places].sort().reverse());
//still in its original order
console.log('original' + places);
////in reverse alphabetrical order, print and show its order has changed
console.log('original' + places.reverse());
//in reverse alphabetrical order, print to show its back in its original order
console.log('original' + places.reverse());
//sort your arry so its store in alphabetrical order
console.log('original' + places.sort());
//sort to change your array so its store in reverse alphabetrical order
console.log('original' + places.sort().reverse());
export {};
