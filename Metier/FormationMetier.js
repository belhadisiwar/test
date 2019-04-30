class FormationMetier {
    formation;
    tabERP;
    formatiomUpdate;
    isUpdate = false;
    constructor() {
        this.formation = new Formation(0, '', '', '',0, '');
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
            if (ERP.Formation == null) {
                ERP.Formation = []
            }
        }

    }
    add() {
        var idF = 0;
        this.Consult();
        if ((document.getElementById('nomF') != null) && (document.getElementById('descF') != null) &&
            (document.getElementById('montant') != null) && (document.getElementById('nomFichier') != null)) {

            var nomF = document.getElementById('nomF').value;
            var descF = document.getElementById('descF').value;
          
            var Level = document.getElementById('Level').value;
            
            var montant = document.getElementById('montant').value;


            if (this.isUpdate == false) {
                var nomFichier = document.getElementById('nomFichier').files[0].name;

                if ((ERP.Formation).length != 0) {
                    idF = (ERP.Formation[((ERP.Formation).length) - 1].idF) + 1;
                }
                this.formation = new Formation(idF, nomF, descF, nomFichier, montant,Level);

                ERP.Formation.push(this.formation);
            }
            if (this.isUpdate == true) {
                for (let index = 0; index < ERP.Formation.length; index++) {
                     nomFichier = ERP.Formation[index].nomFichier;
                    if (this.formatiomUpdate.idF == ERP.Formation[index].idF) {
                        this.formation = new Formation(idF, nomF, descF, nomFichier, montant,Level);
                        ERP.Formation[index] = this.formation;
                    }
                }
                localStorage.clear();
            }
            this.tabERP[0] = ERP.Formation;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
            this.isUpdate = false;
            location.href = './Formation.html';
}

    }
    show() {
        this.Consult();

        var html = '';
        var existNiveau1=false;
        var existNiveau2=false;
        var existNiveau3=false;
        var existNiveau4=false
        for (let index = 0; index < ERP.Formation.length; index++) {

            if((ERP.Formation[index].niveau=="Level One")&&(existNiveau1==false))
            {
              
                html += ' <div class="row" id= "N1">'
                html += '<legend>'+ERP.Formation[index].niveau+'</legend>'
                html += '</div>'
                html += '</div>'
                existNiveau1=true

            } 
            if((ERP.Formation[index].niveau=="Level Two")&&(existNiveau2==false))
            {
               
                html += ' <div class="row" id= "N2">'
                html += '<legend>'+ERP.Formation[index].niveau+'</legend>'
                html += '</div>'
                html += '</div>'
                existNiveau2=true

            }
            if((ERP.Formation[index].niveau=="Level Three")&&(existNiveau3==false))
            {
               
                html += ' <div class="row" id= "N3">'
                html += '<legend>'+ERP.Formation[index].niveau+'</legend>'
                html += '</div>'
                html += '</div>'
                existNiveau2=true

            }
             if((ERP.Formation[index].niveau=="Level Four")&&(existNiveau4==false))
            {
               
                html += ' <div class="row" id= "N3">'
                html += '<legend>'+ERP.Formation[index].niveau+'</legend>'
                html += '</div>'
                html += '</div>'
                existNiveau2=true

            }
            document.getElementById("formations").innerHTML += html;
            html = '';
        }
       
        for (let index = 0; index < ERP.Formation.length; index++) {
            html += '<div class="col-md-4 col-sm-4">'
            html += '<div class="panel panel-primary">'
            html += '<div class="panel-heading">'
            html += ERP.Formation[index].nomF
            html += '</div>'
            html += '<div class="panel-body">'
            html += '<p> <strong>Discription :</strong>' + ERP.Formation[index].descF + '</p>'
            html += '<p><strong>Prix :</strong>' + ERP.Formation[index].montant + '</p>'
            html += '<p><strong>Detail :</strong><a href="C:/Users/Aymen/Desktop/'+ERP.Formation[index].nomFichier +'">'+ ERP.Formation[index].nomFichier + '</a></p>'
            html += '<p><button onclick="FormationMetier.update(' + ERP.Formation[index].idF + ')">U</button>'
            html += '<button onclick="FormationMetier.delet(' + ERP.Formation[index].idF + ')" >D</button></p>'
            html += '</div>'
            html += '<div class="panel-footer">'
            html += "Tel : 40.537.808"
            html += '</div>'
            html += '</div>'
            html += '</div>'

            if((ERP.Formation[index].niveau=="Level One"))
            {
            document.getElementById("N1").innerHTML += html;
            html = '';
            }
            if((ERP.Formation[index].niveau=="Level Two"))
            {
            document.getElementById("N2").innerHTML += html;
            html = '';
            }
            if((ERP.Formation[index].niveau=="Level Three"))
            {
            document.getElementById("N3").innerHTML += html;
            html = '';
            }
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
            // document.getElementById('dateD').value = this.formatiomUpdate.dateD;
            // document.getElementById('nbrM').value = Number(this.formatiomUpdate.nbreM);
            document.getElementById('Level').value = this.formatiomUpdate.niveau;
           
            // document.getElementById('nomFichier').files = this.formatiomUpdate.nomFichier;
         
            var  lien = document.createElement("a");
            var  text = document.createElement("p");
            var node = document.getElementById("file");

            lien.setAttribute("id" ,    "pixcreate");
            lien.setAttribute("href" ,  "C:/Users/Aymen/Desktop/"+this.formatiomUpdate.nomFichier);
            lien.setAttribute("target", "_blank");
            lien.setAttribute("title",  "mon site");

          
            var textLien = document.createTextNode(this.formatiomUpdate.nomFichier);
            text.appendChild(textLien);
            lien.appendChild(text);
            node.appendChild(lien);
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

