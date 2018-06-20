/*var motJ1 = [""];
motJ1 = prompt ("Saissiez le mot a deviner");
var saisie = prompt("Deviner le mot");

for( var i = 0; i<motJ1.length; i++ ){
	if( saisie == motJ1[i] ){
		alert(motJ1[i] + " = " + saisie);
	}
	else
	{
	continue;
	alert("raté");	
	}
}
	//autre solut
var i = 0;
var mots = ["bonjour", "manger", "coucou"];
var tableauReponses=[];
var mot = mots[Math.floor(Math.random() * mots.length)];

 tableauReponses.length = mots.length;
 while(i<mot.length){
 	i++;
 	tableauReponses[i] = " _ ";
 	div1.html(tableauReponses);
 }

console.log(mot);
*/

$("#reset").click(function()
{
	saisie = prompt("Saisissez une lettre"); 
})
var saisie = prompt("Saisissez une lettre");
var motJ1 = ["manger", "trouver", "salut", "machine"];
mots = motJ1[Math.floor(Math.random() * motJ1.length)];
console.log(mots);
var faux = 0;

for( var i = 0; i<mots.length; i++ ){
	if( saisie == mots[i] ){
		console.log(mots[i] + " = " + saisie);
		faux = faux + 100;
		alert("c'est cool");
	}
	else
	{
		faux--;
		console.log(mots);
	}
}
	$("#div1").html(saisie);
if (faux < 0) {
	alert("raté");
}
	
	
	 
