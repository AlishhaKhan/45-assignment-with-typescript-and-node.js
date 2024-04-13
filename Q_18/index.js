let guest_list = ['Areej', 'Iraj', 'Hamzah'];
let not_present = 'Hamzah';
let new_guest = 'Orhi';
guest_list[1] = new_guest;
guest_list.unshift('Rehan', 'Hamna', 'Esha');
// console.log('\nUnfortunately we cannot arrange big table, only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Sir/Madam, ${remove_guest} you are not invited for dinner.`);
}
// for(let i=0; i<guest_list.length;  i++){
//     console.log('Respected Sir/Madam ' + guest_list[1] + ',\nYou are still invited on tomorrow dinner.\nThank You\n')
// } 
guest_list.splice(0, 2);
console.log(guest_list);
//print a message indicating the number of people you are inviting to dinner
console.log(`The total number of guest are: ${guest_list.length}`);
export {};
