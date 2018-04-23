$.ajax(
	{
		url: "http://gd.geobytes.com/AutoCompleteCity",
		dataType: "jsonp",
		crossDomain: true,
		data:
		{
			q: $input.val()
		}
	})
	.then(function (response)
	{
		$.each(response, function (i, val)
		{
			html += "<li>" + val + "</li>";
		});
		$ul.html(html);
		$ul.listview("refresh");
		$ul.trigger("updatelayout");
	})