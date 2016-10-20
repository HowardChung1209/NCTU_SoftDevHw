$(function()
{
	var $cal_buttons = $("#cal_buttons");
	var buttons_id = [	["&nbsp;"  ,"Mod","CE" ,"C"  ,"←"  ,"%"],
						["A"  ,"B"  ,"7"  ,"8"  ,"9"  ,"x"],
						["C"  ,"D"  ,"4"  ,"5"  ,"6"  ,"-"],
						["E"  ,"F"  ,"1"  ,"2"  ,"3"  ,"+"],
						["&nbsp;"  ,"&nbsp;"  ,"±"  ,"0"  ,"&nbsp;"  ,"="]	];

	var html_str = "";

	html_str += "<table><tbody>";
	for(var i = 0; i < buttons_id.length; i++)
	{
		html_str += "<tr>";
		for(var j = 0; j < buttons_id[i].length; j++)
		{
			html_str += "<td>"+"<button id = '" + buttons_id[i][j] + "'class = 'cal_button' >"+ buttons_id[i][j] +"</td>";	
		}
		html_str += "</tr>";
	}	
	html_str += "</tbody></table>";

	$cal_buttons.html(html_str);
});