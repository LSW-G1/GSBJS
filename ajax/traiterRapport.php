<?php
	session_start();
	require_once "../data/pdogsbrapportsV0.php";
	$motif = $_POST['motif'];
	$bilan = $_POST['bilan'];
	$idRapport = $_POST['idRapport'];
	$pdo = PdoGsbRapports::getPdo();

	$pdo->updateRapportVisite($motif, $bilan, $idRapport);
?>