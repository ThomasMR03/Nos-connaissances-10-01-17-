var SEUIL=prompt ("Combien de case voulez-vous afficher ?");
// var i = numCase
	if (SEUIL<1000) { //Début de condition (Si le seuil dépasse 1000)
for (var i = 1; i <= SEUIL; i++) {
	document.getElementById('liste').innerHTML += '<li>'+i+'</li>'; //On change le HTML
}}	else { //Fin de condition (Alors alert message user)
	alert('Nombre trop élevé, veuillez réactuliser la page et donner un nombre entre 1 et 1000');
}