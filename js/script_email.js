// Fonctions de traitement du numero de télephone
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function afficher_message_alerte(titre, texte) {
  swal({
    type: 'error',
    title: titre,
    text: texte
  })
}

function message_croix_rouge(texte) {
  $('#emailAide').html(texte);
}
// Fonction jQuery de traitement du Blur sur l'input
// 1 - Nettoyer l'affichage du Numero
// 2- Verifier les 10 digits
// 3 - Verifier la présence de 06 ou 07
// Choix n°1 Afficher les SweetlAlerts
// Choix n°2 Afficher message en dessous de l'input et Croix Rouge !
// Si tout est ok .... poursuivre l'action

$(function() {
  // désactiver le bouton lors de l'initialisation
  $("#mon_bouton").prop("disabled",true);

  $( "#email" ).focus(function() {
    // initialisation du message d'aide lors du focus sur l'input
    $('#emailAide').html('Exemple : 0668847867');
  });

  $( "#email" ).blur(function() {
    var value = $(this).val();
    if(value == ''){
      // sweetalert2 concernant : Le champs téléphone est vide.
      $("#mon_bouton").prop("disabled",true);
      afficher_message_alerte('Oops...', 'Veuillez remplir le champs email s\'il vous plaît !');
      // ou bien le message / la croix rouge
      message_croix_rouge('<i style="color:red" class="fas fa-times"></i> Veuillez remplir le champs Email s\'il vous plaît !');
    } else {
      // verifications
      if (validateEmail(value)) {
        message_croix_rouge('<i style="color:green" class="fas fa-check"></i> Exemple : jean@gmail.com');
        $("#mon_bouton").prop("disabled",false);
      } else {
        afficher_message_alerte('Oops...', 'Votre Email est incorrect');
        message_croix_rouge('<i style="color:red" class="fas fa-times"></i> Votre email doit être du style : jean@gmail.com');
      }

    }
  });

  $( "#mon_bouton" ).submit(function() {
    e.preventDefault();
  });

});
