let currentusers : string[] = ['admin','Jennifer','Areej','Daniya','Ayan','Umal'];
let new_users : string[] =['Shahmeer','Shahroz','Umal','Daniya'];

new_users.forEach(newUserName =>{
  let lowerCase = newUserName.toLowerCase();
  if(currentusers.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The user name ${new_users} is not available. Please write a different user name.`);
  }
  else{
    console.log(`The username ${newUserName} is available.`);
  }
});
    
