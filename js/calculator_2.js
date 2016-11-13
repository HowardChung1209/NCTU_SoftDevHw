function Calculator()
{
	this.expr = "";
	this.showExpr = "";
	this.number = "";
	this.base = 10;
}

Calculator.prototype.operators = {"+" : true, "-" : true, "*" : true, "/" : true, "%" : true};
Calculator.prototype.digits = {"0" : 0, "1" : 1, "2" : 2, "3" : 3, "4" : 4, "5" : 5, "6" : 6, "7" : 7, "8" : 8, "9" : 9, "A" : 10, "B" : 11, "C" : 12, "D" : 13, "E" : 14, "F" : 15};

Calculator.prototype.push_back = function(c)
{
	if( this.operators[c] )
	{
		this.showExpr += this.number + c;
		this.expr += "parseInt('" + this.number + "'," + this.base + ")" + c;
		this.number = "";
	}
	else
	{
		if( this.digits[c] >= this.base )
			this.base = 16;
		else if( this.digits[c] >= this.base )
			this.base = 10;

		this.number += ""+c;
	}
};

Calculator.prototype.pop_back = function()
{
	this.number = this.number.slice(0,-1) || 0;
}

Calculator.prototype.value = function()
{
	this.expr += "parseInt('" + this.number + "'," + this.base + ")";
	console.log(this.expr);
	this.number = eval(this.expr).toString(this.base);
	this.expr = "";
	this.showExpr = "";
}

Calculator.prototype.clear = function()
{
	this.number = "";
}

Calculator.prototype.clearAll = function()
{
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
	var result = parseInt(this.number,this.base).toString(this.base);

	if( this.number == "" )
		return 0;

	return result;
}

Calculator.prototype.baseVal = function(b)
{
	var result = parseInt(this.number,this.base).toString(b);
		
	if( this.number == "" )
		return 0;

	return result;
}

Calculator.prototype.changeBase = function(b)
{
	this.base = b;
}

Calculator.prototype.getBase = function()
{
	return this.base;
}