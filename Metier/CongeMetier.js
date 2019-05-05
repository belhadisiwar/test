class CongeMetier {
    conge;
    tabERP;
    Update;
    coash;
    manager;
    select;
    isUpdate = false;
    poste;
    constructor() {
        this.conge = new Conge(0, '', '', 0, '');
    }
    Consult() {
        var html = '';
        if (localStorage.getItem("ERP") == null) {
            this.tabERP = []
        }
        else {
            this.tabERP = JSON.parse(localStorage.getItem("ERP"));
            // if (this.tabERP[1] != null) {
            //     ERP.Conge = this.tabERP[0];
            // }

            ERP.Manager = this.tabERP[1];
            ERP.Coash = this.tabERP[2];
            ERP.Conge = this.tabERP[4];
            if (ERP.Conge == null) {
                ERP.Conge = []
            }
        }
        if (ERP.Manager != null) {
            html += '<option>-----Manager------</option>'
            for (let index = 0; index < ERP.Manager.length; index++) {
                //  console.log(ERP.Manager[index].id)
                html += '<option value="M'+ERP.Manager[index].id+'">'+ERP.Manager[index].nom+'</option>'

            }
        }
        if (ERP.Coash != null) {
            html += '<option>-----Coash------</option>'
            for (let index = 0; index < ERP.Coash.length; index++) {
                //var  id="C"+ERP.Coash[index].id;
                html += '<option value="C' + ERP.Coash[index].id + '" >' + ERP.Coash[index].nom + '</option>'

            }
        }
        document.getElementById("personne").innerHTML = html;
    }
    selection() {

        var sel = document.getElementById('personne');

        var selected = sel.options[sel.selectedIndex].value;

        if (selected.indexOf('M') != -1) {
            var M = selected.substr(1);
            var n = parseInt(M, 10);

            for (let index = 0; index < ERP.Manager.length; index++) {
                if (n == ERP.Manager[index].id) {
                    this.manager = ERP.Manager[index];
                    this.select = this.manager;
                    this.post = "M"
                }
            }
        }
        if (selected.indexOf('C') != -1) {
            var C = selected.substr(1);
            var a = parseInt(C, 10);
            for (let index = 0; index < ERP.Coash.length; index++) {
                if (a == ERP.Coash[index].id) {
                    this.coash = ERP.Coash[index];
                    this.select = this.coash;
                    this.post = "C"
                }
            }
        }
        console.log(this.select)
    }
    add() {
        var idConge = 0;
        this.Consult();
        var personne = document.getElementById('personne').value;
        var dated = document.getElementById('dateD').value;
        var datef = document.getElementById('dateF').value;
        if (this.isUpdate == false) {

            if ((ERP.Conge).length != 0) {
                idConge = (ERP.Conge[((ERP.Conge).length) - 1].idConge) + 1;
            }

            this.conge = new Conge(idConge, dated, datef, this.select.id, this.poste);


            ERP.Conge.push(this.conge);
        }
        this.tabERP[4] = ERP.Conge;
        localStorage.setItem("ERP", JSON.stringify(this.tabERP));
        this.isUpdate = false;
       
    }

    show() {
        this.Consult();

        var html = '';


        for (let index = 0; index < ERP.Conge.length; index++) {
           
            html += '<tr class="warning">'
            html += '<td>' + ERP.Conge[index].idConge + '</td>'
            html += ' <td>' + ERP.Conge[index].dateD + '</td>'
            html += ' <td>' + ERP.Conge[index].dateF + '</td>'
            html += ' <td>' + ERP.Conge[index].idp + '</td>'
            html += '</tr>'
            index++;
            // html += '<tr class="danger">'
            // html += '<td>' + ERP.Conge[index].idConge + '</td>'
            // html += ' <td>' + ERP.Conge[index].dateD + '</td>'
            // html += ' <td>' + ERP.Conge[index].dateF + '</td>'
            // html += ' <td>' + ERP.Conge[index].idp + '</td>'
            // html += '</tr>'
            
  }
        document.getElementById("table").innerHTML += html;
        html = '';
    }

}
CongeMetier = new CongeMetier();