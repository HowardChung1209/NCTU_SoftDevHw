function Calculator()
{
	this.expr = "";
	this.showExpr = "";
	this.number = "";
	this.sign = "";
	this.base = 10;
}

Calculator.prototype.operators = {"+" : true, "-" : true, "*" : true, "/" : true, "%" : true};

Calculator.prototype.push_back = function(c)
{
	if( this.operators[c] )
	{
		this.showExpr += this.realVal() + c;
		this.expr += "(" + this.realVal() + ")" + c;
		this.number = "";
		this.sign = "";
	}
	else
	{
		this.number += ""+c;
	}
};

Calculator.prototype.pop_back = function()
{
	this.number = this.number.slice(0,-1) || 0;
}

Calculator.prototype.value = function()
{
	this.expr += "(" + this.realVal() + ")";
	console.log(this.expr);
	this.number = eval(this.expr).toString(this.base);
	
	this.sign = "";
	this.expr = "";
	this.showExpr = "";
}

Calculator.prototype.clear = function()
{
	this.sign = "";
	this.number = "";
}

Calculator.prototype.clearAll = function()
{
	this.sign = "";
	this.number = "";
	this.expr = "";
	this.showExpr = "";
	this.base = 10;
}

Calculator.prototype.expression = function()
{
	var result = this.showExpr;
	result = this.showExpr.replace(/%/g," Mod ");
	return result;
}

Calculator.prototype.curNumber = function()
{
	var result = parseInt(this.sign+this.number,this.base).toString(this.base);

	if( this.number == "" )
		return 0;

	return result;
}

Calculator.prototype.realVal = function()
{
	var result = parseInt(this.sign+this.number,this.base).toString(10);
		
	if( this.number == "" )
		return 0;

	return result;
}

Calculator.prototype.baseVal = function(b)
{
	var result = ((parseInt(this.sign+this.number,this.base)>>>0)&0xFFFF).toString(b);
		
	if( this.number == "" )
		return 0;

	return result;
}

Calculator.prototype.changeBase = function(b)
{
	this.number = parseInt(this.number || "0",this.base).toString(b);
	this.base = b;
}

Calculator.prototype.getBase = function()
{
	return this.base;
}

Calculator.prototype.signIt = function()
{
	if( this.sign == "" )
		this.sign = "-";
	else
		this.sign = "";
}