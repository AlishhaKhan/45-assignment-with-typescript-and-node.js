let guest_list : string[] = ['Asiya','Umna','Sidra','Umar','Rehan','Ikhlaq'];


let not_present : string = 'Ahmed';
let new_guest : string = 'Inayat';
guest_list[1] = new_guest;
for(let i=0;i<guest_list.length;i++){
    console.log('Respectedly' + guest_list[1] + ',\nI would like to invite you on dinner tomorrow.\nThank You!\n')
}
console.log(`Mr. ${not_present} will not comming tomorrow dinner.`);
guest_list.unshift ('Noman','farhan','sonila');

for(let i=0;i<guest_list.length;i++) {
console.log('Respectedly' + guest_list[i] + ',\nWe school friends decided to arrange some dinner for all of us. Indeed, its a very long time we did not done any meetup gathering. I really like to have you on tomorrow dinner\nThank You\n ');
}