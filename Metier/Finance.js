var idF =  Math.floor(Math.random() * 999); 
  var finance = {
    id : idF,
    personne: null,
    montant : 0
     };
     var personne = {
        id : idF,
        personne: null,
        montant : 0
         };

function selectCoach(){
     
    this.tabC = JSON.parse(localStorage.getItem("ERP"));
    if (this.tabC == null) {
        this.tabC = []
    }
    ERP.Coash = this.tabC[2]     
    if (ERP.Coash == null) {
    ERP.Coash = []
   }  
   var x = document 
   var html =""
   for (let i = 0; i<ERP.Coash.length; i++){  
        html  +=`<option value="${ERP.Coash[i].id}" onclick="selected()">${ERP.Coash[i].nom}</option>`
    }   
    document.getElementById("listeCoash").innerHTML += html; 
    html = ""; 
} 

 function addFinance (){
    var tabC  = JSON.parse(localStorage.getItem("ERP"));
    this.x = document.getElementById('listeCoash').value;
  
    var montant = document.getElementById("montant").value;  
   
    finance.montant = montant;
    if (this.tabC == null) {
        this.tabC = []
    }
    
    ERP.Coash = tabC[2]     
    if (ERP.Coash == null) {
    ERP.Coash = []
   } 
   
   ERP.Finance = tabC[5]     
    if (ERP.Finance == null) {
    ERP.Finance = []
 }

 for(let i=0;i<ERP.Coash.length;i++)
 {
    
    if(ERP.Coash[i].id == x){
       finance.personne=ERP.Coash[i]; 
        ERP.Finance.push(finance)
        tabC[5] = ERP.Finance ;
        localStorage.setItem("ERP",JSON.stringify(tabC));
        //console.log(ERP.Coash[i]);
    }
 }
}
// Pour candidat 
function selectCondidat(){

    this.tabC = JSON.parse(localStorage.getItem("ERP"));
    if (this.tabC == null) {
        this.tabC = []
    }
    ERP.Condidat = this.tabC[3]     
    if (ERP.Condidat == null) {
    ERP.Condidat= []
   }  
   var x = document 
   var html =""
   for (let i = 0; i<ERP.Condidat.length; i++){  
        html  +=`<option value="${ERP.Condidat[i].idc}">${ERP.Condidat[i].nom}</option>`
        //console.log(ERP.Condidat[i].idc);
        
     }   
    document.getElementById("listeCandidat").innerHTML += html; 
    html = ""; 
}   
 function addFinanceC(){
    var tabC  = JSON.parse(localStorage.getItem("ERP"));
    this.x = document.getElementById('listeCandidat').value;
 
    var montant = document.getElementById("montantC").value;  
   
    finance.montant = montant;
    if (this.tabC == null) {
        this.tabC = []
    }
  
    ERP.Condidat = tabC[3]     
    if (ERP.Condidat== null) {
    ERP.Condidat = []
   } 
   ERP.Finance = tabC[5]     
    if (ERP.Finance == null) {
    ERP.Finance = []
 } 
 for(let i=0;i<ERP.Condidat.length;i++)
    if(ERP.Condidat[i].idc == x){
       finance.personne = ERP.Condidat[i]; 
        ERP.Finance.push(finance)
        tabC[5] = ERP.Finance ;
        localStorage.setItem("ERP",JSON.stringify(tabC));
      //  console.log(ERP.Condidat[i]);
    }
    showListe(this);
  
}
// function showListe(i){
//     var tabC  = JSON.parse(localStorage.getItem("ERP"));
//     if (this.tabC == null) {
//         this.tabC = []
//     }
//     ERP.Finance = tabC[5]     
//     if (ERP.Finance == null) {
//     ERP.Finance = []
//  } 
//     var html ="";
//     html+='<table class="table" id="table"><thead><tr>'
//     html+='<th>Date Debut</th>th>Manager/coash</th> </tr> </thead><tbody>'
//     html+= '<tr class="warning">'
//     html+='<td>'+ERP.finance[i].personne+'</td>'
//     html+='<td>'+ERP.finance[i].personne.prenom+'</td>'
//     html+='<td>'+ERP.Finance[i].personne.adress+'</td>'
//     html+='<td>'+ERP.Finance[i].personne.level+'</td>'
//     html+='<td>'+ERP.Finance[i].personne.tel+'</td>'
//     html+='<td>'+ERP.Finance[i].personne.email+'</td>'
//     html+='<td>'+ERP.Finance[i].montant+'</td>'
//     html+='<td>Larry</td>'
//     html+='<td>the Bird</td>'
//     html+='<td>@twitter</td></tr>'
//     html+='</table>'
//     document.getElementById("table").innerHTML=html;  
// }