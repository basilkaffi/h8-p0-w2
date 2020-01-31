function konversiMenit(menit) {
	var clock = 0;
	var minute = 0;
	if (menit>=60){
		clock = Math.floor(menit/60)
		minute = menit-(clock*60)
	}
	else{
		clock = 0;
		minute = menit;
	}
	clockString=clock.toString()
	minute<10 ? minuteString='0'+minute.toString() : minuteString=minute.toString()
	return clockString+':'+minuteString
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00