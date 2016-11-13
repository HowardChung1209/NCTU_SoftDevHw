function Calculator()
{
	this.expr = "";
	this.number = [""];
	this.ops = [""];
	this.last = false;
}

Calculator.prototype.operators = {"+" : true, "-" : true, "*" : true, "/" : true, "Mod" : true, ";" : true};

Calculator.prototype.push_back = function(c)
{
	var top = this.number[this.number.length-1];
	var last = this.number[this.number.length-2];
	
	if( this.operators[c] )
	{
		if( top && this.number.length == this.ops.length )
			return;
		else if( !top && this.number.length-1 == this.ops.length )
			return;
		
		var lastOp = this.ops[this.ops.length-1] | '+';

		if( lastOp == '*' || lastOp == '/' )
		{
			this.number.pop();
			this.number.pop();
			this.ops.pop();
			this.number.push(eval(last+lastOp+top+"| 0").toString());
		}
		
		if( c != ';' )
		{
			if( this.last )
				this.ops.pop();

			this.ops.push(c);
			this.number.push("");

			if( c == '%' )
				c = ' Mod ';

			if( this.operators[c] && c != ';' )
				c = ' ' + c + ' ';

			this.expr += top+c;
		}
	}
	else
	{
		var idx = this.number.length-1;

		if( this.last )
		{
			idx = this.number.length-2;
			this.number[idx] = "";
			this.expr = "";
		}
		
		if( (c == 'A' || c == 'B' || c == 'C' || c == 'D' || c == 'E' || c == 'F') && !top )
			this.number[idx] = '0x' + c;
		else if( top != "0" )
			this.number[idx] += ""+c;
		else
			this.number[idx] = ""+c;		
	}
	this.last = false;
};

Calculator.prototype.pop_back = function()
{
	this.number[this.number.length-1] = this.number[this.number.length-1].slice(0,-1) | 0;
}

Calculator.prototype.value = function()
{
	this.push_back(";");
	var result = this.number[0];

	for(var i = 0; i < this.ops.length; i++)
		result += this.ops[i] + this.number[i+1];

	this.number = [result,this.number[this.number.length-1]];
	this.ops = [this.ops[this.ops.length-1]];
	this.expr = (eval(result) | 0).toString();
	this.last = true;
}

Calculator.prototype.clear = function()
{
	this.number = "";
}

Calculator.prototype.clearAll = function()
{
	this.expr = "";
}

Calculator.prototype.expression = function()
{
	if( this.ops.length == 0 )
		return "";
	return this.expr;
}

Calculator.prototype.curNumber = function()
{
	return this.ans | this.number[this.number.length-1] | 0;
}