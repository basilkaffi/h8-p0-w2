var tanggal = 29
var bulan = 2
var tahun = 2104


//variabel tambahan untuk coding
var nama_bulan
var tgl31
var kabisat


//memberikan nama bulan dan menentukan apakah ada tanggal 31 di bulan tersebut
switch(bulan){
	case 1:
	nama_bulan = 'Januari'
	if(tanggal==31) tgl31=true;
	break
	case 2:
	nama_bulan = 'Februari'
	if(tanggal==31) tgl31=false;
	break
	case 3:
	nama_bulan = 'Maret'
	if(tanggal==31) tgl31=true;
	break
	case 4:
	nama_bulan = 'April'
	if(tanggal==31) tgl31=false;
	break
	case 5:
	nama_bulan = 'Mei'
	if(tanggal==31) tgl31=true;
	break
	case 6:
	nama_bulan = 'Juni'
	if(tanggal==31) tgl31=false;
	break
	case 7:
	nama_bulan = 'Juli'
	if(tanggal==31) tgl31=true;
	break
	case 8:
	nama_bulan = 'Agustus'
	if(tanggal==31) tgl31=true;
	break
	case 9:
	nama_bulan = 'September'
	if(tanggal==31) tgl31=false;
	break
	case 10:
	nama_bulan = 'Oktober'
	if(tanggal==31) tgl31=true;
	break
	case 11:
	nama_bulan = 'November'
	if(tanggal==31) tgl31=false;
	break
	case 12:
	nama_bulan = 'Desember'
	if(tanggal==31) tgl31=true;
	break
	default:
	nama_bulan = 'Tidak ada'
	break
 }

//menentukan tahun kabisat
if(bulan == 2){
	if(tahun%4==0) {
		if (tahun%100!=0){
			kabisat = true
		}
		else {
			tahun%400==0 ? kabisat = true : kabisat = false
		}
	}
	else kabisat = false
}
else kabisat = true


//batas tanggal, bulan, dan tahun dan output
if (tanggal>=1 && tanggal <=31){
	if (bulan>=1 && bulan <=12){
		if (tahun >=1900 && tahun <=2200){
			if(tanggal == 31){
				tgl31 ? console.log(`${tanggal} ${nama_bulan} ${tahun}`) : console.log(`tidak ada tanggal 31 di bulan ${nama_bulan}`)
			}
			else if(bulan==2){
				kabisat ? console.log(`${tanggal} ${nama_bulan} ${tahun}`) : console.log(`tanggal 29 Februari ${tahun} tidak ada karena ${tahun} bukan tahun kabisat`) 
			}
			else console.log(`${tanggal} ${nama_bulan} ${tahun}`)
		}
		else console.log('tahun ada dibawah atau diatas range')
	}
	else console.log(`bulan ke-${bulan} tidak ada di tahun manapun`)
}
else console.log(`tanggal ke-${tanggal} tidak ada di bulan manapun`)