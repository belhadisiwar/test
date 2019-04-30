class CongeMetier {
    conge;
    tabERP;
    Update;
    coash;
    manager;
    select;
    isUpdate = false;
    constructor() {
        this.conge = new Conge(0, '', '',0);
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
        }
         if (ERP.Manager != null) {
            html+='<option>-----Manager------</option>'
            for (let index = 0; index < ERP.Manager.length; index++) {
                html+='<option onclick="selection(M'+ERP.Manager[index].idM+')">'+ERP.Manager[index].nomP+'</option>'
           
            }
            }
            if (ERP.Coash != null) {
                html+='<option>-----Coash------</option>'
                for (let index = 0; index < ERP.Coash.length; index++) {
                    html+='<option onclick="selection(C'+ERP.Coash[index].idC+')">'+ERP.Coash[index].nomP+'</option>'
               
                }
                }
                document.getElementById("personne").innerHTML += html;


    }
    selection(id){
        
        if(id.indexOf('M')!=-1)
        {
           var M=id.substr(1);
           var n=parseInt(M,10);
            for (let index = 0; index < ERP.Manager.length; index++) {
                if(n==ERP.Manager[index].idM)
                {
                    this.manager=ERP.Manager[index];
                    this.select=this.manager;
                }
           
            }

        }
        if(id.indexOf('C')!=-1)
        {
            var C=id.substr(1);
            var a=parseInt(C,10);
             for (let index = 0; index < ERP.Coash.length; index++) {
                 if(a==ERP.Coash[index].idM)
                 {
                     this.coash=ERP.Coash[index];
                     this.select=this.coash;
                 }
            
             }
        }
        
    }
    add() {
        var idConge = 0;
        this.Consult();
        var personne= document.getElementById('personne').value;
        var dated= document.getElementById('dateD').value;
        var datef= document.getElementById('dateF').value;
        if (this.isUpdate == false) {

            if ((ERP.Conge).length != 0) {
                idConge = (ERP.Conge[((ERP.Conge).length) - 1].idConge) + 1;
            }
            this.conge = new Conge(idConge, dated, datef, this.select.id);

            ERP.Conge.push(this.conge);
        }
            this.tabERP[4] = ERP.Conge;
            localStorage.setItem("ERP", JSON.stringify(this.tabERP));
            this.isUpdate = false;
}

show() {
    this.Consult();

    var html = '';
   
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
        html += '<p>' + ERP.Formation[index].descF + '</p>'
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
    
}
CongeMetier = new CongeMetier();