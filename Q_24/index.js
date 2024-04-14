let car = 'fortuner';
let age = 25;
let numbers = [1, 2, 3, 4];
/*String Test */
//Test 1: Equality (true)
console.log("Is car == 'fortuner'? I predict true");
console.log(car == 'fortuner'); //true (case insensitive)
//Test 2: Strict equality (false)
console.log("Is car === 'fortuner'? I predict false");
console.log(car === 'fortuner'); // false (case sensitive)
//Test 3: Inequality (true)
console.log("Is car != 'fortuner'? I predict true");
console.log(car != 'fortuner'); //true
//Test 4: Inequality (false)
console.log("Is car !== 'fortuner'? I predict false");
console.log(car !== 'fortuner'); //false
/*lowercase function test */
//Test 5: lowercase conversion (true)
console.log("Is car.tolowercase() == 'fortuner'? I predict true.");
console.log(car.toLowerCase() == 'fortuner'); //true 
//Test 6: lowercase conversion (false)
console.log("Is car === car.tolowewrcase()? I predict false");
console.log(car === car.toLowerCase()); // false (original value remain uppercase)
/*Numerical test */
//Test 7: Equality (true)
console.log("Is age == 25? I predict true.");
console.log(age == 25); // true
//Test 8: Inequality (false)
console.log("Is age != 30? I predict true");
console.log(age != 30); //true
//Test 9: Greter then (false)
console.log("Is age > 30? I predict false");
console.log(age > 30); //false
//Test 10: Less then or equal (true)
console.log("Is age <= 25? I predict true");
console.log(age <= 25); // true
/*Logical operatore*/
//Test 11: And (true)
console.log("Is age >20 && <30? I predict true");
console.log(age > 20 && age < 30); //true (both conditions met)
//Test 12: Or (false)
console.log("Is age >30 || age <18? I predict false");
console.log(age > 30 || age < 18); //false (neither conditions met)
/*Array Test*/
//Test 13: In array  (true)
console.log("Is 3 in numbers? I predict true");
console.log(3 in numbers); //true (check for index existence)
//Test 14: Not in array (false)
console.log("Is 5 is not in numbers? I predict true");
console.log(5 in numbers); //true (negation of 'in' operator)
export {};
