<div data-role="page" id="pagemedecins">
	<?php
		include "vues/entetepage.html"; //inclue l'entete
	?>
	<div data-role="content">
		<h3>Cities worldwide</h3>
		<p>After you enter <strong>at least three characters</strong> the autocomplete function will show all possible matches.</p>
		<ul id="autocomplete" data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Find a city..." data-filter-theme="a"></ul>
	</div>
<?php
	include "vues/piedpage.html";
?>
</div>