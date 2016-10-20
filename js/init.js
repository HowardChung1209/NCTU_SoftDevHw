$(function()
{
	var $cal_buttons = $("#cal_buttons");
	var buttons_id = [	["&nbsp;"  ,"Mod","CE" ,"C"  ,"←"  ,"%"],
						["A"  ,"B"  ,"7"  ,"8"  ,"9"  ,"x"],
						["C"  ,"D"  ,"4"  ,"5"  ,"6"  ,"-"],
						["E"  ,"F"  ,"1"  ,"2"  ,"3"  ,"+"],
						["&nbsp;"  ,"&nbsp;"  ,"±"  ,"0"  ,"&nbsp;"  ,"="]	];

	for(var i = 0; i < buttons_id.length; i++)
	{
		$cal_buttons.append("<tr>");
		for(var j = 0; j < buttons_id[i].length; j++)
		{
			$cal_buttons.append("<td>"+"<button id = " + buttons_id[i][j] + " >"+ buttons_id[i][j] +"</td>");	
		}
		$cal_buttons.append("</tr>");
	}	
});