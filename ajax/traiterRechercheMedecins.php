<?php
	session_start();
	require_once "../data/pdogsbrapportsV0.php";
	$value = $_POST['value'];
	$pdo = PdoGsbRapports::getPdo();

	$med = $pdo->getAllMed($value);

	echo json_encode($med);

?>