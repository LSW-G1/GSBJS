<?php
	session_start();
	require_once "../data/pdogsbrapportsV0.php";
	$mdp = $_POST['mdp'];
	$login = $_POST['login'];
	$pdo = PdoGsbRapports::getPdo();

	$visiteur = $pdo->getLeVisiteur($login, $mdp);

	if ($visiteur) 
	{
		$_SESSION['visiteur'] = $visiteur;
	}
	
	echo json_encode($visiteur);
?>