<div data-role="page" id="pagevisites">
	<?php
	include "vues/entetepage.html"; //inclue l'entete
	?>
	<div data-role="content">
		<p><h1>Choisir un rapport</h1></p>
		<label>Date de visite</label>
		<input type="date" name="date" id="date">
		<ul id="listeMedecins" data-role="listview" data-inset="true">

		</ul>
	</div>
	<div id="message"></div>
	<?php
	include "vues/piedpage.html";
	?>
</div>