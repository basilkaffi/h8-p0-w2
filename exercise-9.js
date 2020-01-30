

function shoutOut(){
  return 'Halo Function!'
}
console.log(shoutOut())



function calculateMultiply(a1,a2){
  return a1*a2
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian)
/*atau*/
// const hasilPerkalian = (a1,a2) => {return a1,a2}
// console.log(hasilPerkalian(5,6))



function processSentence(nama,umur,alamat,hobi){
  return `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);