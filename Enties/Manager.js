class Manager extends Personne{
    constructor(id,nom,prenom,email,tel,addrress,categorie,passwrd,salaire){
        super(id,nom,prenom,email,tel,addrress,categorie);
        this.salaire = salaire;
        this.passwrd = passwrd;
    }
   
    
}