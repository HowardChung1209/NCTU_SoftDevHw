var $showExpr;
var $showNumber;
var bases = [];
var alpha = "ABCDEF";

function update()
{
	$showExpr.text(cal.expression());
	$showNumber.text(cal.curNumber());

	for(var i = 0; i < 4; i++)
	{
		bases[i].val.text(cal.baseVal(bases[i].b));
		bases[i].div.removeClass("cal_base_highlight");

		if( cal.getBase() == bases[i].b )
			bases[i].div.addClass("cal_base_highlight");
	}

	for(var i = 0; i < 10; i++)
	{
		if( i >= cal.getBase() )
			$("#_"+i).attr("disabled", true);
		else
			$("#_"+i).attr("disabled", false);
	}

	if( cal.getBase() < 16 )
	{
		for(var i = 0; i < 6; i++)
			$("#_"+alpha[i]).attr("disabled", true);
	}
	else
	{
		for(var i = 0; i < 6; i++)
			$("#_"+alpha[i]).attr("disabled", false);
	}
}

function gen(i)
{
	return (function()
			{
				cal.push_back(i);
				update();
			});
}

function gen_2(i)
{
	return (function(){
				cal.changeBase(bases[i].b);
				update();
			});
}

$(function()
{
	$showExpr = $("#cal_expr");
	$showNumber = $("#cal_ans");

	bases.push(
		{
			b : 16,
			div : $("#hex"),
			val : $("#hex > .base_value")
		}
	);

	bases.push(
		{
			b : 10,
			div : $("#dec"),
			val : $("#dec > .base_value")
		}
	);

	bases.push(
		{
			b : 8,
			div : $("#oct"),
			val : $("#oct > .base_value")
		}
	);

	bases.push(
		{
			b : 2,
			div : $("#bin"),
			val : $("#bin > .base_value")
		}
	);

	for(var i = 0; i <= 9; i++)
	{
		$("#_"+i).click(gen(i));
	}

	for(var i in alpha)
	{
		$("#_"+alpha[i]).click(gen(alpha[i]));
	}
	

	$("#_Plus").click(gen("+"));
	$("#_Minus").click(gen("-"));
	$("#_Multiply").click(gen("*"));
	$("#_Divide").click(gen("/"));

	$("#_Mod").click(gen("%"));

	$("#_Back").click(function(){
		cal.pop_back();
		update();
	});

	$("#_Equal").click(function(){
		cal.value();
		update();
	});

	$("#_CE").click(function(){
		cal.clear();
		update();
	});

	$("#_CLS").click(function(){
		cal.clearAll();
		update();
	});

	for(var i = 0; i < 4; i++)
	{
		bases[i].div.click(gen_2(i));
	}

	$("#_sign").click(function(){
		cal.signIt();
		update();
	});

	update();
});