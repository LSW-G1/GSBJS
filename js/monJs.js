$(function () {
    $("#panel #ajouterunrapport").bind("click", function (e) {
        e.preventDefault();
        $.mobile.changePage("#pageajouterunrapport");
    });

    $("#panel #modifierunrapport").bind("click", function (e) {
        e.preventDefault();
        $.mobile.changePage("#pagechoisirrapportamodifier");
    });

    $("#footer #mesMedecins").bind("click", function (e) {
        e.preventDefault();
        $.mobile.changePage("#pagemedecins");
    })

    $("#footer #mesVisites").bind("click", function (e) {
        e.preventDefault();
        $.mobile.changePage("#pagevisites");
    })

    $('#pageconnexion #btnconnexion').bind("click", function (e) {
        e.preventDefault();
        var mdp = $("#pageconnexion #mdp").val();
        var login = $("#pageconnexion #login").val();
        $.post("ajax/traiterconnexion.php",
            {
                "mdp": mdp,
                "login": login
            },
            foncRetourConnexion, "json");
    });

    function foncRetourConnexion(data) {
        if (data != null) {
            $.mobile.changePage("#pageaccueil");
        }
        else {
            $("#pageconnexion #message").css(
                {
                    color: 'red'
                });
            $("#pageconnexion #message").html("erreur de login et/ou mdp");
        }
    }
});