<?php
/** 
 * Classe d'accès aux données. 
 
 * Utilise les services de la classe PDO
 * pour l'application Gsb Rapport Mobile
 * Les attributs sont tous statiques,
 * les 4 premiers pour la connexion
 * $monPdo de type PDO 
 * $monPdoGsbRapports qui contiendra l'unique instance de la classe
 * @package default
 * @author Cheri Bibi
 * @version    1.0
 * @link       http://www.php.net/manual/fr/book.pdo.php
 */

class PdoGsbRapports
{   		
      	 /*--------------------Version locale---------------------------------------- */
      private static $serveur='mysql:host=localhost';
      private static $bdd='dbname=gsbrapports';   		
      private static $user='root' ;    		
      private static $mdp='root' ;
      private static $monPdo;
      private static $monPdoGsbRapports = null;
/**
 * Constructeur privé, crée l'instance de PDO qui sera sollicitée
 * pour toutes les méthodes de la classe
 */				
	private function __construct()
	{
            self::$monPdo = new PDO(self::$serveur.';'.self::$bdd, self::$user, self::$mdp); 
            self::$monPdo->query("SET CHARACTER SET utf8");
	}
        
	public function _destruct()
	{
            self::$monPdo = null;
	}
/**
 * Fonction statique qui crée l'unique instance de la classe
 
 * Appel : $instancePdoGsbRapports = PdoGsbRapports::getPdo();
 
 * @return l'unique objet de la classe PdoGsbRapports
 */
	public  static function getPdo()
	{
		if(self::$monPdoGsbRapports == null)
		{
			self::$monPdoGsbRapports = new PdoGsbRapports();
		}
		return self::$monPdoGsbRapports;  
	}

	public function getLeVisiteur($login, $mdp)
	{
		$req = "SELECT id, nom, prenom, login FROM visiteur WHERE login = '$login' AND mdp = '$mdp'";
		$res = PdoGsbRapports::$monPdo->query($req)->fetch();

		return $res;
	}

	public function getListeMedecins($date, $id)
	{
		$req = "SELECT medecin.nom AS nomMed, medecin.prenom AS prenomMed, rapport.id as idRapport, rapport.motif AS motif, rapport.bilan AS bilan FROM rapport, medecin WHERE rapport.idVisiteur = '$id' AND medecin.id = rapport.idMedecin AND rapport.date = '$date'";
		$res = PdoGsbRapports::$monPdo->query($req)->fetchAll();

		return $res;
	}

	public function updateRapportVisite($motif, $bilan, $idRapport)
	{
		$req = "UPDATE rapport SET motif = (:motif), bilan = (:bilan) WHERE id = '$idRapport'";
		$res = PdoGsbRapports::$monPdo->prepare($req);
		$res->execute(array(":motif" => $motif, ":bilan" => $bilan));

		return $res;
	}
        
}   // fin classe
?>


