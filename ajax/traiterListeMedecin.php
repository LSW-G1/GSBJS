<?php
	session_start();
	require_once "../data/pdogsbrapportsV0.php";
	$date = $_POST['date'];
	$id = $_SESSION['visiteur']['id'];
	$pdo = PdoGsbRapports::getPdo();

	$medecins = $pdo->getListeMedecins($date, $id);

	if($medecins)
	{
		echo json_encode($medecins);
	}

?>