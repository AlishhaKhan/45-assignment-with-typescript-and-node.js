 function make_album(artist : string , title : string , tracks? : number){
  const album : {artist : string , title : string , tracks? : number} = {
    artist : artist,
    title : title
  }
  if(tracks !== undefined){
    album.tracks = tracks;
  }
  return album;
}
const album1 = make_album('Shehzad Roy' , 'Zindagi');
console.log(album1);
const album2 = make_album('Ali Zafar' , 'Jhoom');
console.log(album2);
const album3 = make_album('Atif Aslam' , 'Meri Kahani');
console.log(album3);