class FormationMetier {
    formation;
    tabERP;
    formatiomUpdate;
    isUpdate = false;
    constructor() {
        this.formation = new Formation(0, '', '', '', 0, '', '', 0);
    }
    Consult() {
        if (localStorage.getItem("ERP") == null) {
            this.tabERP = []
        }
        else {
            this.tabERP = JSON.parse(localStorage.getItem("ERP"));
            // if (this.tabERP[1] != null) {
            //     ERP.Formation = this.tabERP[0];
            // }
            ERP.Formation = this.tabERP[0];
        }  }
    add() {
        var idF = 0;
        this.Consult();
        if ((document.getElementById('nomF') != null)
         && (document.getElementById('descF') != null) 
         && (document.getElementById('dateD') != null)
          && (document.getElementById('nbrM') != null)
            && (document.getElementById('montant') != null) 
            && (document.getElementById('nomFichier') != null)) {

            var nomF = document.getElementById('nomF').value;
            var descF = document.getElementById('descF').value;
            var dateD = document.getElementById('dateD').value;
            var nbreM = document.getElementById('nbrM').value;
            var nomCoash = document.getElementById('nomCoash').value;
            var nomFichier = document.getElementById('nomFichier').files[0].name;
            var montant = document.getElementById('montant').value;


            if (this.isUpdate == false) {

                if ((ERP.Formation).length != 0) {
                    idF = (ERP.Formation[((ERP.Formation).length) - 1].idF) + 1;
                }
                this.formation = new Formation(idF, nomF, descF, dateD, nbreM, nomCoash, nomFichier, montant);

                ERP.Formation.push(this.formation);
            }
            if (this.isUpdate == true) {
                for (let index = 0; index < ERP.Formation.length; index++) {
                    if (this.formatiomUpdate.idF == ERP.Formation[index].idF) {
                        this.formation = new Formation(this.formatiomUpdate.idF, nomF, descF, dateD, nbreM, nomCoash, nomFichier, montant);

                        ERP.Formation[index] = this.formation;
                    }
                }
                localStorage.clear();
            }
            this.tabERP[0] = ERP.Formation;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
            this.isUpdate = false;



        }
        console.log(document.getElementById('nomFichier').files[0].name)
    }
    show() {
        this.Consult();

        var html = '';
        for (let index = 0; index < ERP.Formation.length; index++) {

            html += '<div class="col-md-4 col-sm-4">'
            html += '<div class="panel panel-primary">'
            html += '<div class="panel-heading">'
            html += ERP.Formation[index].nomF
            html += '</div>'
            html += '<div class="panel-body">'
            html += '<p>' + ERP.Formation[index].descF + '</p>'
            html += '<p>' + ERP.Formation[index].dateD + '</p>'
            html += '<p><button onclick="FormationMetier.update(' + ERP.Formation[index].idF + ')">U</button>'
            html += '<button onclick="FormationMetier.delet(' + ERP.Formation[index].idF + ')" >D</button></p>'
            html += '</div>'
            html += '<div class="panel-footer">'
            html += "Tel : 40.537.808"
            html += '</div>'
            html += '</div>'
            html += '</div>'
            document.getElementById("formations").innerHTML += html;
            html = '';
        }
    }
    update(idfUpdate) {

        if (idfUpdate != null) {

            for (let index = 0; index < ERP.Formation.length; index++) {
                if (idfUpdate == ERP.Formation[index].idF) {
                    localStorage.setItem("formationUpdate", JSON.stringify(ERP.Formation[index]))

                    location.href = './AjoutFormation.html';
                }
            }
        }

    }
    fill() {
        if (localStorage.getItem("formationUpdate") != null) {
            this.formatiomUpdate = JSON.parse(localStorage.getItem("formationUpdate"));

            document.getElementById('nomF').value = this.formatiomUpdate.nomF;
            document.getElementById('descF').value = this.formatiomUpdate.descF;
            document.getElementById('dateD').value = this.formatiomUpdate.dateD;
            document.getElementById('nbrM').value = Number(this.formatiomUpdate.nbreM);
            document.getElementById('nomCoash').value = this.formatiomUpdate.nomCoash;
            //document.getElementById('nomFichier').value = this.formatiomUpdate.nomFichier;
            document.getElementById('montant').value = this.formatiomUpdate.montant;
            this.isUpdate = true;
        }  
    }
    delet(idFDelete) {
        var tabTemp = []
        for (let index = 0; index < ERP.Formation.length; index++) {
            if (idFDelete != ERP.Formation[index].idF) {
                tabTemp.push(ERP.Formation[index]);
            }
        }
        if (tabTemp.length == 0) {
            localStorage.clear();
        } else {
            this.tabERP[0] = tabTemp;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
        }
        location.href = './Formation.html';
    }
}
FormationMetier = new FormationMetier();
//FormationMetier.add();
//FormationMetier.show();

