class CoashMetier {
    coash; 
    tabERP;
    coashUpdate;
    isUpdate = false;
    constructor() {
        this.coash = new Coash(0, '', '', '', '', '', '', 0);
    }
    Consult() {
        this.tabERP = JSON.parse(localStorage.getItem("ERP"));
        if (this.tabERP == null) {
            this.tabERP = []
        }
      ERP.Coash= this.tabERP[2]     
      if (ERP.Coash == null) {
        ERP.Coash = []
    }
          } 
          
    add() {  
        var idC = 0;
        this.Consult();
        
       
            var nomC = document.getElementById('nomP').value;
            var prenomC = document.getElementById('prenomP').value;
            var emailC = document.getElementById('emailP').value;
            var addressC = document.getElementById('addressP').value;
            var telC = document.getElementById('telP').value;
            var categorieC = document.getElementById('categorieP').value;
            //var CswdC = document.getElementById('CswdC').value;
            var montant = document.getElementById('montantP').value;
            console.log( this.isUpdate);
            if (this.isUpdate == false) {
           
                if ((ERP.Coash).length != 0) {
                idC = (ERP.Coash[((ERP.Coash).length)-1].id) +1;
            }           
            this.coash = new Coash(idC, nomC, prenomC, emailC, telC, addressC, categorieC, montant);
            
            ERP.Coash.push(this.coash);
        }
        if (this.isUpdate == true) {
            for (let index = 0; index < ERP.Coash.length; index++) {
                if (this.CoashUpdate.id == ERP.Coash[index].id) {
                    this.coash = new Coash(this.coashUpdate.id, nomC, prenomC, emailC, addressC, telC, categorieC, montant);
               
                    ERP.Coash[index] = this.coash;              
                 }          
             }
             localStorage.clear();
        }
                this.tabERP[2] = ERP.Coash;
               
               localStorage.setItem("ERP",JSON.stringify(this.tabERP));
                this.isUpdate = false;   
               location.href = './Personnel.html';
               
    }
    show() {
        this.Consult();
        var html = '';
        for (let i = 0; i<ERP.Coash.length; i++) {
           
            html += '<div class="col-md-4 col-sm-4">'
            html += '<div class="panel panel-primary">'
            html += '<div class="panel-heading">'
            html += ERP.Coash[i].nom
            html += ERP.Coash[i].prenom
            html += '</div>'
            html += '<div class="panel-body"><p>'
            html+= ERP.Coash[i].email
            html+= '</p><p>'
            html+=  ERP.Coash[i].tel 
            html+='</p><p>'
            html+= ERP.Coash[i].address 
            html+='</p><p>'
            html+= ERP.Coash[i].categorie 
            html+= '</p>'
            html += '<p><button onclick="coashMetier.update(' + ERP.Coash[i].id + ')">U</button>'
            html += '<button onclick="coashMetier.delete(' + ERP.Coash[i].id + ')" >D</button></p>'
            html += '</div>'
            html += '<div class="panel-footer">'
            html += "Tel : 40.537.808"
            html += '</div>'
            html += '</div>'
            html += '</div>'
            document.getElementById("Coash").innerHTML += html;
            html = '';
         }
    }

    update(ifUpdate) {

        if (ifUpdate != null) {

            for (let index = 0; index < ERP.Coash.length; index++) {
                if (ifUpdate == ERP.Coash[index].id) {
                    localStorage.setItem("Update", JSON.stringify(ERP.Coash[index]))

                    location.href = './AjouterPersonnel.html';
                    
                }
            }
        }
    }
    
    fill() {
        if (localStorage.getItem("Update") != null) {
            this.coashUpdate = JSON.parse(localStorage.getItem("Update"));

            
            document.getElementById('nomP').value = this.coashUpdate.nom;
            document.getElementById('prenomP').value = this.coashUpdate.prenom;
            document.getElementById('emailP').value = this.coashUpdate.email;
            document.getElementById('addressP').value = this.coashUpdate.address;
            document.getElementById('telP').value = this.coashUpdate.tel;
            document.getElementById('categorieP').value = this.coashUpdate.categorie;
            //document.getElementById('pswdP').value = this.coashUpdate.passwrd;
            document.getElementById('montantP').value = this.coashUpdate.salaire;

            this.isUpdate = true;
            
        }
        
        
    } 
    delete(iFDelete) {
        var tabTemp = []
        for (let index = 0; index < ERP.Coash.length; index++) {
            if (iFDelete != ERP.Coash[index].id) {
                tabTemp.push(ERP.Coash[index]);
            }
        }
        if (tabTemp.length == 0) {
            localStorage.clear();
        } else {
            this.tabERP[2] = tabTemp;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
        }

        location.href = './personnel.html';

    }          
        }
coashMetier = new CoashMetier();

 