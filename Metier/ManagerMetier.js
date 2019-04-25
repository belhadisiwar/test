
class ManagerMetier {
    manager;
    constructor() {
        this.manager = new Manager(0, '', '', '', '', '', '', '', 0);
    }
    Consult() {
        
        if (localStorage.getItem("ERP") == null) {
            this.tabERP = []
            
        }
        else {
            this.tabERP = JSON.parse(localStorage.getItem("ERP"));
            
            if (this.tabERP[1] != null) {
                ERP.Manager = this.tabERP[1];
               
            }else{
                this.tabERP = []; 
                 
            }

        }

    }
    add() {
        
        var idM = 0;
        this.Consult();
        if ((document.getElementById('nomP') != null) && (document.getElementById('prenomP') != null) && 
        (document.getElementById('emailP') != null) && (document.getElementById('telP') != null) && 
        (document.getElementById('montant') != null) && (document.getElementById('addressP') != null)) {

            var nomP = document.getElementById('nomP').value;
            var prenomP = document.getElementById('prenomP').value;
            var emailP = document.getElementById('emailP').value;
            var addressP = document.getElementById('addressP').value;
            var categorieP = document.getElementById('categorieP').value;
            var pswdP = document.getElementById('pswdP').value;
            var montant = document.getElementById('montant').value;

        console.log(nomP);

            if ((ERP.Manager).length != 0) {
                idM = (ERP.Manager[((ERP.Manager).length) - 1].idM) + 1;
            }
            this.manager = new Manager(idM, nomP, prenomP, emailP, addressP, categorieP, pswdP, montant);

            ERP.Manager.push(this.manager);
            
            this.tabERP[1] = ERP.Manager;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
    

        }
    }
}
ManagerMetier = new ManagerMetier();
