let guest_list : string[] = ['tim cook','elon musk','bill gates','mark zuckerberg'];
for ( let i=0; i<guest_list.length;  i++){
      console.log('respectedly' + guest_list[i] + ',\nI would like to invite you on dinner tomorrow.\n\nThnk You\n');
}
let not_person : string = 'mark zuckerberg';
let new_person : string = 'mr. beast';
guest_list[1] = new_person;
for ( let i=0; i<guest_list.length; i++){
      console.log('respected'  + guest_list[i] + ',\nI would like to invite you on dinner tomorrow.\nThank You\n');

}
console.log('Mr.${not_present}  will not comming tomorrow.');