console.log('Soal nomor 1 --------- Looping While')

var angka = 0;

console.log('\nLOOPING PERTAMA')
while (angka<20){
	angka+=2
	console.log(angka + ' - I love coding')
}
if(angka===20){
console.log('LOOPING KEDUA')
	while (angka>0){
		console.log(angka + ' - I will become fullstack developer')
		angka-=2
  }
}


console.log('\nSoal nomor 2 -------- Looping For\n')

var Angka = 1

console.log('LOOPING PERTAMA')
for(Angka=1; Angka<=20; Angka++){
	console.log(Angka+ ' - I love coding')
}
if(Angka>=20){
	console.log('LOOPING KEDUA')
	for(Angka=20;Angka>=1;Angka--){
		console.log(Angka + ' - I will become fullstack developer')
	}
}


console.log('\nSoal nomor 3 -------- Ganjil genap\n')
for(var i=1;i<=100;i++){
	i%2!=0 ? console.log('GANJIL') : console.log('GENAP')
}


console.log('\nSoal nomor 3 -------- kelipatan 3,6,10 dalam perulangan 2,5,9\n')

for(var a=1;a<=100;a+=2){
	a%3==0 ? console.log(`${a} kelipatan 3`) : console.log('')
}

for(var a=1;a<=100;a+=5){
	a%6==0 ? console.log(`${a} kelipatan 6`) : console.log('')
}

for(var a=1;a<=100;a+=9){
	a%10==0 ? console.log(`${a} kelipatan 10`) : console.log('')
}