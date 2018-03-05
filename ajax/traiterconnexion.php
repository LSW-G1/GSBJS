<?php 
	$mdp = $_POST['mdp'];
	$login = $_POST['login'];
	$data = null;
	$visiteur = array('id'=>"a213", 'nom'=>'Durand', 'login'=>'jdurand', 'mdp'=>'aaaa');
	if ($visiteur['login'] == $login && $visiteur['mdp'] == $mdp) 
	{
		$data = $visiteur;
	}
	echo json_encode($data);
?>