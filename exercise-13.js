function xo(str) {
	var x = 0;
	var o = 0;
	for(index=0;index<=str.length-1;index++){
		if(str[index]=='x') x++
		else if(str[index]=='o') o++
	}
	if (x==o) return true
	else return false
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true