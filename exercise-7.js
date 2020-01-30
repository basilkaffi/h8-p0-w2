var rows1

for(rows1=0;rows1<5;rows1++){
	console.log('*')
}

var rows2

for(rows2=0;rows2<5;rows2++){
	var star=''
	for(var i=0;i<5;i++){
		star+='*'
	}
	console.log(star)
}

var rows3

for(rows3=0;rows3<5;rows3++){
	var star=''
	for(var a=0;a<=rows3;a++){
		star+='*'
		if(a==rows3) console.log(star)
	}
}

/* code above equal to */

var rows3

for(rows3=0;rows3<5;rows3++){
	var star=''
	for(var a=0;a<=rows3;a++){
		star+='*'
	}
	console.log(star)
}

