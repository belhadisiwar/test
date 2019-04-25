
function ValidText(id, caractere) {

    var number = "1234567890";
    var testNumber = false;
    var champ;
    if (document.getElementById(id) != null) {
        champ = document.getElementById(id)
        if (caractere == 'f') {
            for (var i = 0; i < number.length; i++) {
                if ((champ.indexOf(number[i]) == -1) && (testNumber == false)) {
                    testNumber = true;
                }
            }

        }
    }

}