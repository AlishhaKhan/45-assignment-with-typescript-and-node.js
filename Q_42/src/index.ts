 let magician : string[] = ['Harry Potter','Heermoine Grnger','Ron Wesley','Albus Dumbledore'] ;
 
 function make_great(magicianArray : string[]){
  for(let i=0;  i<magicianArray.length;  i++){
    magician[i] = 'the Great  '  +magicianArray[i]
  }
 }
 function show_magicians(magician : string[]){
  magician.forEach(element => {
    console.log(element);
  });
 }
    show_magicians(magician);
 