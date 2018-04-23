$(document).on("ready", function ()
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
					$("#rapport-id").val(medecins.idRapport);
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

	$("#changeRapport").bind("click", function (e)
	{
		var motif = $("#rapport-motif").val()
		var bilan = $("#rapport-bilan").val()
		var idRapport = $("#rapport-id").val()
		$.post("ajax/traiterRapport.php",
		{
			"motif": motif,
			"bilan": bilan,
			"idRapport": idRapport
		});
	});

	$("#autocomplete").on("filterablebeforefilter", function (e, data)
	{
		var $ul = $(this),
			$input = $(data.input),
			value = $input.val(),
			html = "";
		$ul.html("");
		if (value && value.length > 2)
		{
			$ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
			$ul.listview("refresh");

			$.post("ajax/traiterRechercheMedecins.php",
			{
				"value": value
			}, foncRetourRecherchePageMedecins, "json");
			// $.ajax(
			// 	{
			// 		url: "http://gd.geobytes.com/AutoCompleteCity",
			// 		dataType: "jsonp",
			// 		crossDomain: true,
			// 		data:
			// 		{
			// 			q: $input.val()
			// 		}
			// 	})
			// 	.then(function (response)
			// 	{
			// 		$.each(response, function (i, val)
			// 		{
			// 			html += "<li>" + val + "</li>";
			// 		});
			// 		$ul.html(html);
			// 		$ul.listview("refresh");
			// 		$ul.trigger("updatelayout");
			// 	});
		}
	});

	function foncRetourRecherchePageMedecins(value)
	{
		html = ""
		value.forEach(function (medecin)
			{
				console.log(medecin)
			})
			// Make : value foreach list
			// value : "SURNAME Name Adress Phone" -> all medics
			// After that : Every Visitor == Admin, can modify medics and can see all of meeting with other visitor.
			// RESUME : Make stupid work !
	}
});