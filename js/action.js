var $showExpr;
var $showNumber;
var $hex,$dec,$oct,$bin;
var $hex_val,$dec_val,$oct_val,$bin_val;

function update()
{
	$showExpr.text(cal.expression());
	$showNumber.text(cal.curNumber());
	$hex_val.text(cal.baseVal(16));
	$dec_val.text(cal.baseVal(10));
	$oct_val.text(cal.baseVal(8));
	$bin_val.text(cal.baseVal(2));

	$hex.removeClass("cal_base_highlight");
	$dec.removeClass("cal_base_highlight");
	$oct.removeClass("cal_base_highlight");
	$bin.removeClass("cal_base_highlight");

	if( cal.getBase() == 16 )
		$hex.addClass("cal_base_highlight");
	else if( cal.getBase() == 10 )
		$dec.addClass("cal_base_highlight");
	else if( cal.getBase() == 8 )
		$oct.addClass("cal_base_highlight");
	else if( cal.getBase() == 2 )
		$bin.addClass("cal_base_highlight");
}

function gen(i)
{
	return (function()
			{
				cal.push_back(i);
				update();
			});
}

$(function()
{
	$showExpr = $("#cal_expr");
	$showNumber = $("#cal_ans");
	$hex = $("#hex"); $hex_val = $("#hex > .base_value");
	$dec = $("#dec"); $dec_val = $("#dec > .base_value");
	$oct = $("#oct"); $oct_val = $("#oct > .base_value");
	$bin = $("#bin"); $bin_val = $("#bin > .base_value");
	for(var i = 0; i <= 9; i++)
	{
		$("#_"+i).click(gen(i));
	}

	
	alpha = "ABCDEF";

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

	$hex.click(function(){
		cal.changeBase(16);
		update();
	});

	$dec.click(function(){
		cal.changeBase(10);
		update();
	});

	$oct.click(function(){
		cal.changeBase(8);
		update();
	});

	$bin.click(function(){
		cal.changeBase(2);
		update();
	});
});