document.addEventListener("DOMContentLoaded", function(){
    cek()
});

function cek(){
    var temp = document.getElementById("jenis").value;
    if(temp == "keliling"){
        document.getElementById("keliling").style.display = "block";
        document.getElementById("luas").style.display = "none";
    }else{
        document.getElementById("keliling").style.display = "none";
        document.getElementById("luas").style.display = "block";
    }
}

function hitungkeliling(){
    var sisi = document.getElementById("sisi_keliling").value;
    total = 4 * sisi;
    document.getElementById("hasil_keliling").innerHTML = total
}

function hitungluas(){
    var sisi = document.getElementById("sisi_luas").value;
    total = sisi * sisi;
    document.getElementById("hasil_luas").innerHTML = total
}