<div data-role="page" id="pagemodifierunrapport">
	<?php
	include "vues/entetepage.html";
	?>
	<div data-role="content" id="divconnexion">
		<div id="rapport-medecin">Médecin : </div>

		<label>Motif</label>
		<input id="rapport-motif" type="" name="">
		<label>Bilan</label>
		<input id="rapport-bilan" type="" name="">
		
		<div id="message"></div>
		<p>
			<a href="" data-role="button" id="" data-inline="true" type="submit"> Valider </a>
		</p>
	</div><!-- /content -->
	<?php
	include "vues/piedpage.html";
	?>
</div><!-- /page -->