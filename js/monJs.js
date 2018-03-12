$(function ()
{
	$("#panel #ajouterunrapport").bind("click", function (e)
	{
		e.preventDefault();
		$.mobile.changePage("#pageajouterunrapport");
	});

	$("#panel #modifierunrapport").bind("click", function (e)
	{
		e.preventDefault();
		$.mobile.changePage("#pagechoisirrapportamodifier");
	});

	$("#footer #mesMedecins").bind("click", function (e)
	{
		e.preventDefault();
		$.mobile.changePage("#pagemedecins");
	})

	$("#footer #mesVisites").bind("click", function (e)
	{
		e.preventDefault();
		$.mobile.changePage("#pagevisites");
	})




	$('#pageconnexion #btnconnexion').bind("click", function (e)
	{
		e.preventDefault();
		var mdp = $("#pageconnexion #mdp").val();
		var login = $("#pageconnexion #login").val();
		$.post("ajax/traiterconnexion.php",
			{
				"mdp": mdp,
				"login": login
			},
			foncRetourConnexion,
			"json");
	});

	function foncRetourConnexion(data)
	{
		if (data)
		{
			$.mobile.changePage("#pageaccueil");
		}
		else
		{
			$("#pageconnexion #message").css(
			{
				color: 'red'
			});
			$("#pageconnexion #message").html("erreur de login et/ou mdp");
		}
	}



	$('#date').on("input", function (e)
	{
		var date = $("#date").val()
		$.post("ajax/traiterListeMedecin.php",
			{
				"date": date
			},
			foncRetourListe,
			"json");

	})

	function foncRetourListe(data)
	{
		if (data)
		{
			$("#listeMedecins").text("")
			data.forEach(function (medecins)
			{
				$("#listeMedecins").append("<a id='rapport-" + medecins.idRapport + "'><li>" + medecins.nomMed + " " + medecins.prenomMed + "</li></a>")
				$("#rapport-" + medecins.idRapport).on("click", function ()
				{
					$.mobile.changePage("#pagemodifierunrapport",
					{
						type: "POST",
						data: medecins
					});

					$("#rapport-medecin").text("");
					$("#rapport-medecin").append("Médecin : " + medecins.nomMed + " " + medecins.prenomMed);
					$("#rapport-motif").val(medecins.motif);
					$("#rapport-bilan").val(medecins.bilan);
				})
			})
		}
		else
		{
			$("#pagevisites #message").css(
			{
				color: 'red'
			});
			$("#pagevisites #message").html("Aucune visite à cette date");
		}
	}

	// function foncModifRapport(data)
	// {
	// 	if (data)
	// 	{
	// 		$("#").text("")
	// 		$("#").append("value='" + + "'")
	// 	}
	// 	else
	// 	{
	// 		$("#pagevisites #message").css(
	// 		{
	// 			color: 'red'
	// 		});
	// 		$("#pagevisites #message").html("Aucune visite à cette date");
	// 	}
	// }
});