alert("Devine une équipe : COUPE DU MONDE !")
var arr = [""];
var cc = 0;
var faux = 0;
var motJ1 = ["espagne","france", "bresil", "belgique", , "argentine", "maroc", "nigeria", "perou",];
// var result = "";
// var bb = "_";
// var motJ2= [];
var vie = 8;
var ok = false;
var motstab=[];
var arr1='';
var motstab1 = '';
var mots = motJ1[Math.floor(Math.random() * motJ1.length)];
$("#image1").hide();
$("#image2").hide();
$("#image3").hide();
$("#image4").hide();
$("#image5").hide();
$("#image6").hide();
$("#image7").hide();
$("#image8").hide();
// var rd = random();
// function random()
// {
// 	for (var i = 0; i<mots.length; i++)
// 	{
// 		motJ2.push('_');
// 		$("#div2").html(motJ2);
// 	}
// }

motstab = mots.split('');

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
						alert("raté, tu a perdu une vie !! " + vie);
					}
                    faux = 0;
                    $("#div1").html("Ton mot a trouver : " + arr);
	
        // var lengthOrdi = mots.length;
        // // console.log("length ordi = " + lengthOrdi);
        // var lengthCorrecte = arr.length;
        // // console.log("length correcte" + lengthCorrecte);

		motstab1 = motstab.toString();
		arr1 = arr.toString();
		console.log(motstab);
		console.log(arr);
        			if (motstab1 === arr1)
        			{
            			alert("GAGNER !");
        			}  
        			if (vie < 1)
        			{
            			alert("PERDU !");
            			$("#image7").hide();
        				$("#image8").show();
        			}

        			if(vie == 7){
        				$("#image1").show();
        			}

        			if(vie == 6){
        				$("#image1").hide();
        				$("#image2").show();
        			}
        			if(vie == 5){
        				$("#image2").hide();
        				$("#image3").show();
        			}
        			if(vie == 4){
        				$("#image3").hide();
        				$("#image4").show();
        			}
        			if(vie == 3){
        				$("#image4").hide();
        				$("#image5").show();
        			}
        			if(vie == 2){
        				$("#image5").hide();
        				$("#image6").show();
        			}
        			if(vie == 1){
        				$("#image6").hide();
        				$("#image7").show();
        			}
});
       
$("#reset").click(function() 
{
	location.reload();
})	 
 