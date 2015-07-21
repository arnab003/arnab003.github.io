var prevValue=0;
	var currentValue=0;

	var operator;
	var counter=0;
	var flagOp=false;

	var flagClearText=false;

	var flagPercent=false;

	var memory=0;

	var flagDecimal=false;

	function mem(val)
	{
		if (val.value=="MC") 
		{
			memory=0;
		}
		else if (val.value=="M+") 
		{
			memory=memory+parseFloat(document.getElementById("view").value);
		}
		else if (val.value=="M-") 
		{
			memory=memory-parseFloat(document.getElementById("view").value);
		}
		else if (val.value=="MR") 
		{
			document.getElementById("view").value=memory;
			flagClearText=true;
		}
	}

	function number(val)
	{
		if(document.getElementById("view").value=="0")
		{
			document.getElementById("view").value = val.value;
			flagDecimal=false;
		}
		else if (flagClearText==false) 
		{
			document.getElementById("view").value = document.getElementById("view").value + val.value;
		}
		else
		{
			document.getElementById("view").value = val.value;
			flagClearText=false;
			flagDecimal=false;
		}

		flagOp=true;
	}

	function oprtr(val)
	{
		if (flagOp==true) 
		{
			counter=counter+1;
			if(counter>1)
			{
				calculate();
				prevValue=document.getElementById("view").value
				flagClearText=true;
				flagPercent=true;
			}
			else
			{
				flagClearText=true;
				prevValue=document.getElementById("view").value;
				flagPercent=true;
			}
			flagOp=false;
		}
		operator = val.value;
	}

	function calculate()
	{
		if (operator=="+") 
		{
			currentValue=document.getElementById("view").value;
			document.getElementById("view").value = parseFloat(prevValue) +  parseFloat(currentValue);
			flagClearText=true;
			flagPercent=false;
		}
		else if (operator=="-") 
		{
			currentValue=document.getElementById("view").value;
			document.getElementById("view").value = parseFloat(prevValue) -  parseFloat(currentValue) ;
			flagClearText=true;
			flagPercent=false;
		}
		else if (operator=="x") 
		{
			currentValue=document.getElementById("view").value;
			document.getElementById("view").value = parseFloat(prevValue) *  parseFloat(currentValue) ;
			flagClearText=true;
			flagPercent=false;
		}
		else if (operator=="/") 
		{
			currentValue=document.getElementById("view").value;
			if (currentValue==0)
			{
				document.getElementById("view").value="0";
				operator="";
				alert("MATH ERROR!");
			}
			else
			{
			document.getElementById("view").value = parseFloat(prevValue) /  parseFloat(currentValue) ;
			flagClearText=true;
			flagPercent=false;
			}
		}
		else if (operator=="REM") 
		{
			currentValue=document.getElementById("view").value;
			if (currentValue!="0")
			{
				document.getElementById("view").value = parseFloat(prevValue) %  parseFloat(currentValue) ;
				flagClearText=true;
				flagPercent=false;
			}
		}
	}

	function evl()
	{
		counter=0;
		calculate();
	}

	function percent()
	{
		if (flagPercent==true) 
		{
			if (operator=="+") 
			{
				currentValue=document.getElementById("view").value;
				document.getElementById("view").value = parseFloat(prevValue) +  ((parseFloat(currentValue)/100)*parseFloat(prevValue));
				flagClearText=true;
			}
			else if (operator=="-") 
			{
				currentValue=document.getElementById("view").value;
				document.getElementById("view").value = parseFloat(prevValue) -  ((parseFloat(currentValue)/100)*parseFloat(prevValue));
				flagClearText=true;
			}
			else if (operator=="x") 
			{
				currentValue=document.getElementById("view").value;
				document.getElementById("view").value = parseFloat(prevValue) *  (parseFloat(currentValue)/100) ;
				flagClearText=true;
			}
			else if (operator=="/") 
			{
				currentValue=document.getElementById("view").value;
				document.getElementById("view").value = parseFloat(prevValue) /  (parseFloat(currentValue)/100) ;
				flagClearText=true;
			}
		}
		else if (flagPercent==false) 
		{
			currentValue=document.getElementById("view").value;
			document.getElementById("view").value = (parseFloat(currentValue)/100) ;
			flagClearText=true;
		}
	}

	function cancel()
	{
		var val=document.getElementById("view").value;
		val=val.toString();
		var newVal=val.substring(0, (val.length-1));

		if (newVal=="") 
		{
			document.getElementById("view").value="0";
		}
		else
		{
			document.getElementById("view").value=newVal;
		}
	}

	function decimal(val)
	{
		if (flagDecimal==false) 
			{
				document.getElementById("view").value = document.getElementById("view").value + val.value;
				flagDecimal=true;
			};
	}

	function cls()
	{
		document.getElementById("view").value="0";
		prevValue=0;
		currentValue=0;
		operator="";
		counter=0;
		flagOp=false;
		flagClearText=false;
		flagPercent=false;
		memory=0;
		flagDecimal=false;
	}