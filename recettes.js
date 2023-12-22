$(document).ready(function() {



    // Ici je programme une recette qui s'ajoute lorsqu'on clique sur le bouton ajouter
    $("#bouton_ajouter").click(function(){
        let input_nom = $("#input_nom_recette").val();
        let ingredient = $(".ingredient").val();
        let quantite = $(".quantite").val();
        let instructions = $("#textarea_instructions").val();

        // pour chaque validation qui ne marche pas, valid devient false et si toutes les validations sont correctes, valid reste true
        let valid = true;

        // Validation: le champ nom ne peut pas être vide
        if (input_nom === ""){
            $("#AlertNom").removeClass("d-none")
            valid = false;
        }

        // Validation: le champ instructions ne peut pas être vide
        if (instructions === ""){
            $("#textarea_instructions").removeClass("d-none")
            valid = false;
        }

        //Validation: Au moins 2 champs d'ingrédients sont requis


        // Validation: le champ quantité doit être un nombre positif
        if (quantite < 0){
            $("#AlertNom").removeClass("d-none")
            valid = false;
        }








        // Ici je créé la nouvelle recette qui s'affiche
        let nouvelle_recette = "<div class='recette'><p>" + input_nom + 'Ingrédients:' + '<li><span>ingredient</span></li>' + '<li>valeur_quantite</li>' + 'Instructions:' + $("#textarea_instructions").val() + <button id='#bouton_supprimer' className='btn btn-danger'></button></p></div>;









    });














































});