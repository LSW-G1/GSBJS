<?php
	session_start();
	require_once '../data/pdogsbrapports.php';
	$mdp = $_POST['mdp'];
	$login = $_POST['login'];
	$pdo = PdoGsbRapports::getPdo();
	$visiteur = $pdo->getLeVisiteur($login, $mdp);
	if ($visiteur != NULL) 
	{
		$_SESSION['visiteur'] = $visiteur;
		$_SESSION['visiteur']['mdp'] = $mdp;
		$_SESSION['visiteur']['login'] = $login;
	}
	echo json_encode($visiteur);
?>