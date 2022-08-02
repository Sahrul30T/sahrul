var Nk = document.getElementById("nikeror");
var nama = document.getElementById("Nama").value;
var tempat = document.getElementById("tempat, tanggal lahir").value;
var Agama = document.getElementById("Agama").value;
var nohp = document.getElementById("no hp").value;
var alamat = document.getElementById("alamat").value;
var umur = document.getElementById("umur").value;
var jumpeng = document.getElementById("jumlah penghasilan").value;
var jekel = document.getElementById("jenis kelamin").value;
var status = document.getElementById("status kawin").value;

function validatenik(){
    var nik = document.getElementById("NIK").value;
    if(nik.length ==""){
        Nk.innerHTML = "nik kosong";
        return false;
    }
    else{
        Nk.innerHTML == "benar";
        return true
    }
}