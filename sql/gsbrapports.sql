-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `gsbrapports`;
CREATE DATABASE `gsbrapports` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `gsbrapports`;

DROP TABLE IF EXISTS `famille`;
CREATE TABLE `famille` (
  `id` varchar(10) NOT NULL,
  `libelle` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `medecin`;
CREATE TABLE `medecin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `adresse` varchar(80) NOT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `specialitecomplementaire` varchar(50) DEFAULT NULL,
  `departement` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `medicament`;
CREATE TABLE `medicament` (
  `id` varchar(30) NOT NULL,
  `nomCommercial` varchar(80) NOT NULL,
  `idFamille` varchar(10) NOT NULL,
  `composition` varchar(100) NOT NULL,
  `effets` varchar(100) NOT NULL,
  `contreIndications` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `medicament_fk` (`idFamille`),
  CONSTRAINT `medicament_fk` FOREIGN KEY (`idFamille`) REFERENCES `famille` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `offrir`;
CREATE TABLE `offrir` (
  `idRapport` int(11) NOT NULL,
  `idMedicament` varchar(30) NOT NULL,
  `quantite` int(2) DEFAULT NULL,
  PRIMARY KEY (`idRapport`,`idMedicament`),
  KEY `offrir_fk2` (`idMedicament`),
  CONSTRAINT `offrir_fk1` FOREIGN KEY (`idRapport`) REFERENCES `rapport` (`id`),
  CONSTRAINT `offrir_fk2` FOREIGN KEY (`idMedicament`) REFERENCES `medicament` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `rapport`;
CREATE TABLE `rapport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `motif` varchar(100) DEFAULT NULL,
  `bilan` varchar(100) DEFAULT NULL,
  `idVisiteur` char(4) NOT NULL,
  `idMedecin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rapport_fk1` (`idVisiteur`),
  KEY `rapport_fk2` (`idMedecin`),
  CONSTRAINT `rapport_fk1` FOREIGN KEY (`idVisiteur`) REFERENCES `visiteur` (`id`),
  CONSTRAINT `rapport_fk2` FOREIGN KEY (`idMedecin`) REFERENCES `medecin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `visiteur`;
CREATE TABLE `visiteur` (
  `id` char(4) NOT NULL,
  `nom` char(30) DEFAULT NULL,
  `prenom` char(30) DEFAULT NULL,
  `login` char(20) DEFAULT NULL,
  `mdp` char(20) DEFAULT NULL,
  `adresse` char(30) DEFAULT NULL,
  `cp` char(5) DEFAULT NULL,
  `ville` char(30) DEFAULT NULL,
  `dateEmbauche` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `visiteur` (`id`, `nom`, `prenom`, `login`, `mdp`, `adresse`, `cp`, `ville`, `dateEmbauche`) VALUES
('a131',  'Villechalane', 'Louis',  'aribiA', 'aaaa', '8 rue des Charmes',  '46000',  'Cahors', '2005-12-21'),
('a17', 'Andre',  'David',  'dandre', 'oppg5',  '1 rue Petit',  '46200',  'Lalbenque',  '1998-11-23'),
('a55', 'Bedos',  'Christian',  'cbedos', 'gmhxd',  '1 rue Peranud',  '46250',  'Montcuq',  '1995-01-12'),
('a93', 'Tusseau',  'Louis',  'ltusseau', 'ktp3s',  '22 rue des Ternes',  '46123',  'Gramat', '2000-05-01'),
('adm', 'root', 'root', 'root', 'root', NULL, NULL, NULL, NULL),
('b13', 'Bentot', 'Pascal', 'pbentot',  'doyw1',  '11 allée des Cerises', '46512',  'Bessines', '1992-07-09'),
('b16', 'Bioret', 'Luc',  'lbioret',  'hrjfs',  '1 Avenue gambetta',  '46000',  'Cahors', '1998-05-11'),
('b19', 'Bunisset', 'Francis',  'fbunisset',  '4vbnd',  '10 rue des Perles',  '93100',  'Montreuil',  '1987-10-21'),
('b25', 'Bunisset', 'Denise', 'dbunisset',  's1y1r',  '23 rue Manin', '75019',  'paris',  '2010-12-05'),
('b28', 'Cacheux',  'Bernard',  'bcacheux', 'uf7r3',  '114 rue Blanche',  '75017',  'Paris',  '2009-11-12'),
('b34', 'Cadic',  'Eric', 'ecadic', '6u8dc',  '123 avenue de la République',  '75011',  'Paris',  '2008-09-23'),
('b4',  'Charoze',  'Catherine',  'ccharoze', 'u817o',  '100 rue Petit',  '75019',  'Paris',  '2005-11-12'),
('b50', 'Clepkens', 'Christophe', 'cclepkens',  'bw1us',  '12 allée des Anges', '93230',  'Romainville',  '2003-08-11'),
('b59', 'Cottin', 'Vincenne', 'vcottin',  '2hoh9',  '36 rue Des Roches',  '93100',  'Monteuil', '2001-11-18'),
('c14', 'Daburon',  'François', 'fdaburon', '7oqpv',  '13 rue de Chanzy', '94000',  'Créteil',  '2002-02-11'),
('c3',  'De', 'Philippe', 'pde',  'gk9kx',  '13 rue Barthes', '94000',  'Créteil',  '2010-12-14'),
('c54', 'Debelle',  'Michel', 'mdebelle', 'od5rt',  '181 avenue Barbusse',  '93210',  'Rosny',  '2006-11-23'),
('d13', 'Debelle',  'Jeanne', 'jdebelle', 'nvwqq',  '134 allée des Joncs',  '44000',  'Nantes', '2000-05-11'),
('d51', 'Debroise', 'Michel', 'mdebroise',  'sghkb',  '2 Bld Jourdain', '44000',  'Nantes', '2001-04-17'),
('e22', 'Desmarquest',  'Nathalie', 'ndesmarquest', 'f1fob',  '14 Place d Arc', '45000',  'Orléans',  '2005-11-12'),
('e24', 'Desnost',  'Pierre', 'pdesnost', '4k2o5',  '16 avenue des Cèdres', '23200',  'Guéret', '2001-02-05'),
('e39', 'Dudouit',  'Frédéric', 'fdudouit', '44im8',  '18 rue de l église', '23120',  'GrandBourg', '2000-08-01'),
('e49', 'Duncombe', 'Claude', 'cduncombe',  'qf77j',  '19 rue de la tour',  '23100',  'La souteraine',  '1987-10-10'),
('e5',  'Enault-Pascreau',  'Céline', 'cenault',  'y2qdu',  '25 place de la gare',  '23200',  'Gueret', '1995-09-01'),
('e52', 'Eynde',  'Valérie',  'veynde', 'i7sn3',  '3 Grand Place',  '13015',  'Marseille',  '1999-11-01'),
('f21', 'Finck',  'Jacques',  'jfinck', 'mpb3t',  '10 avenue du Prado', '13002',  'Marseille',  '2001-11-10'),
('f39', 'Frémont',  'Fernande', 'ffremont', 'xs5tq',  '4 route de la mer',  '13012',  'Allauh', '1998-10-01'),
('f4',  'Gest', 'Alain',  'agest',  'dywvt',  '30 avenue de la mer',  '13025',  'Berre',  '1985-11-01');

-- 2018-03-05 09:53:15