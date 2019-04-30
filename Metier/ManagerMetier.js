class ManagerMetier {
    manager; 
    tabERP;
    managerUpdate;
    isUpdate = false;
    constructor() {
        
        this.manager = new Manager(0, '', '', '', '', '', '', 0,0);
    }
    Consult() {
        this.tabERP = JSON.parse(localStorage.getItem("ERP"));
        if (this.tabERP == null) {
            this.tabERP = []
        }
      ERP.Manager = this.tabERP[1]     
      if (ERP.Manager == null) {
        ERP.Manager = []
    }
          } 
          
    add() {
        console.log("manager");  
        var idM = 0;
        this.Consult();
        if ((document.getElementById('nomP') != null) && (document.getElementById('prenomP') != null) && 
        (document.getElementById('emailP') != null) && (document.getElementById('telP') != null) && 
        (document.getElementById('montantP') != null) && (document.getElementById('addressP') != null)) {

            var nomP = document.getElementById('nomP').value;
            var prenomP = document.getElementById('prenomP').value;
            var emailP = document.getElementById('emailP').value;
            var addressP = document.getElementById('addressP').value;
            var telP = document.getElementById('telP').value;
            var categorieP = document.getElementById('categorieP').value;
            var pswdP = document.getElementById('pswdP').value;
            var montant = document.getElementById('montantP').value;
        
            if (this.isUpdate == false) {
           
                if ((ERP.Manager).length != 0) {
                idM = (ERP.Manager[((ERP.Manager).length)-1].id) +1;
            }           
            this.manager = new Manager(idM, nomP, prenomP, emailP, telP, addressP, categorieP, pswdP, montant);
            
            ERP.Manager.push(this.manager);
        }
        if (this.isUpdate == true) {
            for (let index = 0; index < ERP.Manager.length; index++) {
                if (this.managerUpdate.id == ERP.Manager[index].id) {
                    this.manager = new Manager(this.managerUpdate.id, nomP, prenomP, emailP, addressP, telP, categorieP, pswdP, montant);
               
                    ERP.Manager[index] = this.manager;              
                 }          
             }
             localStorage.clear();
        }
                this.tabERP[1] = ERP.Manager;
               localStorage.setItem("ERP",JSON.stringify(this.tabERP));
                this.isUpdate = false;  
                location.href = './Personnel.html'; 
    }             
    }
    show() {
        this.Consult();
        var html = '';
        for (let i = 0; i<ERP.Manager.length; i++) {
           
            html += '<div class="col-md-4 col-sm-4">'
            html += '<div class="panel panel-primary">'
            html += '<div class="panel-heading">'
            html += ERP.Manager[i].nom
            html += ERP.Manager[i].prenom
            html += '</div>'
            html += '<div class="panel-body"><p>'
            html+= ERP.Manager[i].email
            html+= '</p><p>'
            html+=  ERP.Manager[i].tel 
            html+='</p><p>'
            html+= ERP.Manager[i].address 
            html+='</p><p>'
            html+= ERP.Manager[i].categorie 
            html+= '</p>'
            html += '<p><button onclick="ManagerMetier.update(' + ERP.Manager[i].id + ')">U</button>'
            html += '<button onclick="ManagerMetier.delete(' + ERP.Manager[i].id + ')" >D</button></p>'
            html += '</div>'
            html += '<div class="panel-footer">'
            html += "Tel : 40.537.808"
            html += '</div>'
            html += '</div>'
            html += '</div>'
            document.getElementById("Manager").innerHTML += html;
            html = '';
         }
    }

    update(idfUpdate) {

        if (idfUpdate != null) {

            for (let index = 0; index < ERP.Manager.length; index++) {
                if (idfUpdate == ERP.Manager[index].id) {
                    localStorage.setItem("Update", JSON.stringify(ERP.Manager[index]))

                    location.href = './AjouterPersonnel.html';
                    
                }
            }
        }
    }
    
    fill() {
        if (localStorage.getItem("Update") != null) {
            this.managerUpdate = JSON.parse(localStorage.getItem("Update"));

            
            document.getElementById('nomP').value = this.managerUpdate.nom;
            document.getElementById('prenomP').value = this.managerUpdate.prenom;
            document.getElementById('emailP').value = this.managerUpdate.email;
            document.getElementById('addressP').value = this.managerUpdate.addrress;
            document.getElementById('telP').value = this.managerUpdate.tel;
            document.getElementById('categorieP').value = this.managerUpdate.categorie;
            document.getElementById('montantP').value = this.managerUpdate.salaire;

            this.isUpdate = true;
            
        }
        
        
    } 
    delete(iFDelete) {
        var tabTemp = []
        for (let index = 0; index < ERP.Manager.length; index++) {
            if (iFDelete != ERP.Manager[index].id) {
                tabTemp.push(ERP.Manager[index]);
            }
        }
        if (tabTemp.length == 0) {
            localStorage.clear();
        } else {
            this.tabERP[1] = tabTemp;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
        }

        location.href = './Personnel.html';

    }          
        }
            ManagerMetier = new ManagerMetier();

 