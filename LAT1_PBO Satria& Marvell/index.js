//Mengidentifikasikan suatu Class
        class mobil {
            constructor (merk, warna, tahun){
              this.merk = merk;
              this.warna = warna;
              this.tahun = tahun;
            }
            //Method untuk menampilkan informasi objek
            displayInfo(){
                return "Merk : $(this.merk), Warna: $(this.warna), Tahun: $(this.tahun)"}
            }
            //Membuat objek mobil baru
            const MobilSaya = new Mobil("BMW","Silver", "1990")
            //Membuat fungsi untuk memanggil Method
            function displayMobil(){
                const carInfo = MobilSaya.displayInfo();
                carInfoDIV.innerHTML = "<p>$(carInfo)</p>";
            }
            //Memanggil fungsi untuk menampilkan data
            displayMobil();