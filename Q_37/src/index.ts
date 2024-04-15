function make_shirt(size : string = 'Large', text : string = 'I love TypeScript!'){
  console.log(`create a ${size} shirt with the message : ${text}`);
} 
make_shirt();
make_shirt('Small');
make_shirt('medium', 'I love Python!');