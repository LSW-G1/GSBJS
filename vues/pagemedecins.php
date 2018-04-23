<div data-role="page" id="pagemedecins">
	<?php
		include "vues/entetepage.html"; //inclue l'entete
	?>
	<div data-role="content">
		<h3>Médecin</h3>
		<p>Entrer au moins les <strong> trois premières lettres</strong> du nom du médecin.</p>
		<ul id="autocomplete" data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Nom du médecin" data-filter-theme="a" class="ui-listview ui-listview-inset ui-corner-all ui-shadow ui-filterable">
		</ul>
	</div>
<?php
	include "vues/piedpage.html";
?>
</div>