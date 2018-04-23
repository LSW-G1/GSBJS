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

		console.log(this)
		var $ul = $(this),
			$input = $(data.input),
			value = $input.val(),
			html = "";
		$ul.html("");
		if (value && value.length > 2)
		{
			$ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
			$ul.listview("refresh");

			$.ajax(
				{
					url: "ajax/traiterRechercheMedecins.php",
					method: "POST",
					data:
					{
						value: value
					}
				})
				.then(function (response)
				{
					JSON.parse(response).forEach((val) =>
					{
						console.log(val)
						html += "<li class='ui-li-static ui-body-inherit'>" + val.nom + " " + val.prenom + " " + val.adresse + " " + val.tel + "<a href='" + " " + "' class='ui-input-clear ui-icon-carat-r ui-btn-icon-right ui-corner-all' title='Info sur " + val.nom + " " + val.prenom + "'></a></li>";
					});
					$ul.html(html);
					$ul.trigger("updatelayout");
				});
		}
	});

});