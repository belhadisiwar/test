var number = "1234567890";
var alp = "abcdefghijklmnopqurstvwyxz"
var alpM = "ABCDEFGHIJKLMNOPQURSTVWYXZ"
var selected;
function test() {
    var sel = document.getElementById('categorieP');

    this.selected = sel.options[sel.selectedIndex].value;
   

}
function Pass() {
    var pswd = document.getElementById('pswdP').value;
    console.log("jhjhjh"+pswd)
    pswd.setAttribute("disabled", "true");
   

}

function verifSelect() {
    test();
    if (this.selected == "Manager") {
     //   ManagerMetier = new ManagerMetier();
        console.log("manager");
       
        ManagerMetier.add()
    } else
   // CoashMetier = new CoashMetier();
   { coashMetier.add()}



}
function ValidText(id, caractere) {


    var testNumber = false;
    var testLettre = false;
    var champ;
    if (document.getElementById(id) != null) {
        champ = document.getElementById(id)
        if (caractere == 'n') {
            for (var i = 0; i < number.length; i++) {
                if ((champ.indexOf(number[i]) == -1) && (testNumber == false)) {
                    testNumber = true;
                    document.getElementById(id).style.border = "red";
                }
            }

        }
        if (caractere == 't') {
            for (var i = 0; i < alp.length; i++) {

                if (((champ.indexOf(alpM[i]) == -1) || (champ.indexOf(alp[i]) == -1)) && (testLettre == false)) {
                    testLettre = true;
                }
            }

        }
    }

}
function testeEmail() {

    email = document.getElementById('email').value;
    var emailTest = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-z]{2,3}$/;
    if (!emailTest.test(email)) {
        document.getElementById('email').style.border = "red";

    } else {
        Verfemail = true;
    }
}
function Password() {
    pss = document.getElementById('psw').value;
    var majE = false;
    var minE = false;
    var nbrE = false;
    var spE = false;
    var nbreEtat = 0;

    if (pss.length > 8) {

        for (i = 0; i < pss.length; i++) {
            if ((alp.indexOf(pss[i]) != -1) && (minE == false)) {
                minE = true;
                nbreEtat++;
            }
            if ((alpM.indexOf(pss[i]) != -1) && (majE == false)) {
                // console.log(i,"maj");
                majE = true;
                nbreEtat++;
            }
            if ((number.indexOf(pss[i]) != -1) && (nbrE == false)) {
                // console.log(i,"nhb");
                nbrE = true;
                nbreEtat++;
            }
            if ((number.indexOf(pss[i]) == -1) && ((alpM.indexOf(pss[i]) == -1)) && ((alp.indexOf(pss[i]) == -1))) {
                // console.log("spexiaux");
                spE = true;
                nbreEtat++;
            }
        }

    } else {
        etatpass = "faible";
    }

    if ((minE == true) && (majE == true) && (nbrE == true) && (spE == true)) {

        etatpass = "Fort";

    }
    if (nbreEtat == 3) {

        etatpass = "Moyenne";
    }

}
