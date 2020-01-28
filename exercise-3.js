var nama = 'Lucas'
var peran = 'Penyihir'

if (nama){
  if (peran){
    switch (peran){
      case 'Ksatria':
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
	console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
	break
      case 'Tabib':
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
	console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
	break
      case 'Penyihir':
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
	console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu.`)
	break
      }
  }
  else{
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game`)
  }
}
else{
  console.log('Nama harus diisi')
}