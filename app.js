alert("Devine une équipe : COUPE DU MONDE !")
var arr = [""];
var cc = 0;
var faux = 0;
var motJ1 = ["espagne","france", "bresil", "belgique", , "argentine", "maroc", "nigeria", "perou",];
// var result = "";
// var bb = "_";
var motJ2= [];
var vie = 10;
var ok = false;
mots = motJ1[Math.floor(Math.random() * motJ1.length)];

var rd = random();
function random()
{
	for (var i = 0; i<mots.length; i++)
	{
		motJ2.push('_');
		$("#div2").html(motJ2);
	}
}

$("#jouer").click(function ()
{
	console.log(mots);
	saisie = prompt("Saisissez une lettre"); 
	ok=false;
				for( var i = 0; i<mots.length; i++ )
				{
					if( saisie == mots[i] )
					{
						cc=i;
						console.log(mots[i] + " = " + saisie);
						faux = faux + 100;
						arr[cc]=saisie;
						ok = true;
					}
					else
					{
						faux--;
					}
				}
                    if(ok == true){
						alert("c'est cool");
                    }
					if (faux < 0) 
					{
						vie--;
						alert("raté, tu a perdu une vie !!");
					}
                    faux = 0;
                    $("#div1").html("Ton mot a trouver : " + arr);
	
        var lengthOrdi = mots.length;
        // console.log("length ordi = " + lengthOrdi);
        var lengthCorrecte = arr.length;
        // console.log("length correcte" + lengthCorrecte);

        			if (lengthOrdi == lengthCorrecte)
        			{
            			alert("GAGNER !");
        			}  
        			if (vie < 1)
        			{
            			alert("PERDU !");
        			}

});
       
$("#reset").click(function() 
{
	location.reload();
})	 
 