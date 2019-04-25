function teste()
{
    
    var f = new FormData();
    var x= document.getElementById('nomFichier').value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
   // f.append("nomFichier",x.files[0])
    document.getElementById('r').innerText=x;
    console.log(x);

}
