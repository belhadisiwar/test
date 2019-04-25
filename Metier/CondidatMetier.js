// class Personne {
      
//     constructor(nom, prenom, email,tel,addrress,categorie) {
//         this.nom=nom;
//         this.prenom=prenom;
//         this.email=email;
//         this.tel=tel;
//         this.address=addrress;
//         this.categorie=categorie;
//  }

// }
 
// var js = document.createElement("script");
// js.type = "text/javascript";
// include("Enties/Personne.js") ;
// document.body.appendChild(js);
// document.onload();
// class Condidat extends Personne  {
    
//     constructor(){
        
//     }
//     name() {
//         console.log(nom);
//     }
// }

// class CondidatMetier {
     
//     constructor (){
//         var condidat = new Condidat("hhhhh");
//        this.condidat=condidat;
//         document.getElementById("t").innerHTML=this.condidat.name();
//         } 
// 
// Consult() {
//     if (localStorage.getItem("ERP") == null) {
//         this.tabERP = []
//     }
//     else {
//         this.tabERP = JSON.parse(localStorage.getItem("ERP"));
//         // if (this.tabERP[1] != null) {
//         //     ERP.Formation = this.tabERP[0];
//         // }
//         ERP.Condidats = this.tabERP[0];
//     }  }
var Condidats={
        
    nom:"",
    prenom:"",
    email:"",
    tel:"",
    adress:"",
    level:"",
    idc:Math.floor(Math.random()*1000)
}
 function ajoutCondidat(){   
     var tableau=JSON.parse(localStorage.getItem("ERP"));
    
     if (tableau==null){
         tableau=[];
     }else{
        ERP.Condidat=tableau[3];
     }
     
      
Condidats.nom=document.getElementById("nomc").value;
Condidats.prenom=document.getElementById("prenomc").value;
Condidats.email=document.getElementById("emailc").value;
Condidats.tel=document.getElementById("telc").value;
Condidats.nom=document.getElementById("nomc").value;
Condidats.level=document.getElementById("levelc").value;
Condidats.adress=document.getElementById("addrc").value;

 ERP.Condidat.push(Condidats)
 tableau[3]=ERP.Condidat;
 localStorage.setItem("ERP",JSON.stringify(tableau));
document.getElementById("nomc").value=null;
document.getElementById("prenomc").value=null;
document.getElementById("emailc").value=null;
document.getElementById("telc").value=null;
document.getElementById("nomc").value=null;
document.getElementById("levelc").value=null;
document.getElementById("addrc").value=null;

}
