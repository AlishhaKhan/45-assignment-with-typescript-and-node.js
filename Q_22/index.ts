 let car : string = 'Subaru';
 
 //Test 1: Equality Comparision (True)
 console.log("Is car == 'subaru'? I predict true.");
 console.log(car == 'subaru'); //true

 //Test 2: Strict equality comparison (True)
 console.log("Is car === 'subaru'? I predict true");
 console.log(car === 'subaru'); //true

 //Test 3: Inequality comparison (false)
 console.log("Is car !== 'subaru'? I predict false");
 console.log(car != 'subaru'); //false

 //Test 4: Strict inequality comparison (false)
 console.log("Is car !== 'subaru'? I predict false");
 console.log(car !== 'subaru'); //false

 //Test 5: Less then comparison (false)
 console.log("Is car < 'subaru'? I predict false");
 console.log(car < 'subaru'); //false (lexicographic comparison)

 //Test 6: Greter then comparison (false)
 console.log("Is car > 'subaru'? I predict false");
 console.log(car <= 'subaru'); //false

 //Test 7: less then or equal comparison (true)
 console.log("Is car <= 'subaru'? I predict true");
 console.log(car <= 'subaru'); //true

//Test 8: Greater then or equal comparison (true)
console.log("Is car >= 'subaru'? I predict true");
console.log(car >= 'subaru');

//Test 9: Checking truthiness (true)
console.log("Is car? I predict true");
console.log(car); //true (non-empty string may always truthy)

//Test 10: Checking falsiness (false)
console.log("Is !car? I predict false.");
console.log(!car); //false (negation of a truthy value)