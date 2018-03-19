<div data-role="page" id="pagemodifierunrapport">
	<?php
	include "vues/entetepage.html";
	?>
	<div data-role="content" id="divconnexion">
		<div id="rapport-id"></div>
		<div id="rapport-medecin">Médecin : </div>
		<label>Motif</label>
		<textarea id="rapport-motif" type="motif" name="motif"></textarea>
		<label>Bilan</label>
		<textarea id="rapport-bilan" type="bilan" name="bilan"></textarea>
		
		<div id="message"></div>
		<p>
			<a href="#popupBasic" data-role="button" id="changeRapport" data-inline="true" type="submit" data-rel="popup" data-position-to="window"> Valider </a>
		</p>
		<div data-role="popup" id="popupBasic">
			<h2>localhost</h2>
			<hr>
			<p>Votre mise à jour a bien été enregistrée</p>
			<a data-rel="back" data-role="button">OK</a>
		</div>
	</div>
	<?php
	include "vues/piedpage.html";
	?>
</div>