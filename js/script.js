// Fonctions de traitement du numero de télephone
function recuperSeulementNombres(inputString){
    var number = inputString.replace(/[^0-9]/g, '')
    return number;
}
function is06ou07(telephone) {
  if( telephone.match(/^(06|07)[0-9]{8}$/) ){
    return true;
  } else {
    return false;
  }
}
function taillede10(telephone) {
  if( telephone.length == 10){
    return true;
  } else {
    return false;
  }
}

function afficher_message_alerte(titre, texte) {
  swal({
    type: 'error',
    title: titre,
    text: texte
  })
}

function message_croix_rouge(texte) {
  $('#telephoneAide').html(texte);
}
// Fonction jQuery de traitement du Blur sur l'input
// 1 - Nettoyer l'affichage du Numero
// 2- Verifier les 10 digits
// 3 - Verifier la présence de 06 ou 07
// Choix n°1 Afficher les SweetlAlerts
// Choix n°2 Afficher message en dessous de l'input et Croix Rouge !
// Si tout est ok .... poursuivre l'action

$(function() {
  $( "#telephone" ).focus(function() {
    // initialisation du message d'aide lors du focus sur l'input
    $('#telephoneAide').html('Exemple : 0668847867');
  });

  $( "#telephone" ).blur(function() {
    var value = $(this).val();
    if(value == ''){
      // sweetalert2 concernant : Le champs téléphone est vide.
      afficher_message_alerte('Oops...', 'Veuillez remplir le champs téléphone s\'il vous plaît !');
      // ou bien le message / la croix rouge
      message_croix_rouge('<i style="color:red" class="fas fa-times"></i> Veuillez remplir le champs téléphone s\'il vous plaît !');
    } else {
      // Nettoyage enelver points, espaces, slashs, tirets etc ... garder que les chiffres dont le 0
      var tel = recuperSeulementNombres(value);
      // Remplacer la valeur dans l'input
      $(this).val(tel);

      if( taillede10(tel) == false )  {
        // il ne fait pas 10 chiffres de long
        afficher_message_alerte('Oops...', 'Votre numéro de téléphone ne contient pas 10 chiffres.');
        message_croix_rouge('<i style="color:red" class="fas fa-times"></i> Votre numéro de téléphone ne contient pas 10 chiffres.');

      }else {
        if(is06ou07(tel) == false) {
          // il commence pas par 06 ou 07
          afficher_message_alerte('Oops...', 'Votre numéro de téléphone doit commencer par 06 ou 07');
          message_croix_rouge('<i style="color:red" class="fas fa-times"></i> Votre numéro de téléphone doit commencer par 06 ou 07');
        } else {
          // poursuivre ou ne rien effectuer ici
          message_croix_rouge('<i style="color:green" class="fas fa-check"></i> Exemple : 0668847867');
        }
      }
    }
  });
});
