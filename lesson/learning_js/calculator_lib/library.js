(function master()
{
	/*var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
	var body = dom.createElement("body");
	dom.documentElement.appendChild(body);*/

	var mother = document.createElement("div");
	mother.id = "mother";
	mother.style.border="1px solid black";
	document.body.appendChild(mother);

	var mainContainer = document.createElement("div");
	mainContainer.id = "mainContainer";
	mainContainer.style.border="1px solid black";
	mainContainer.style.display="inline-block";
	document.body.appendChild(mainContainer);
	document.getElementById("mainContainer").innerHTML="Hello";

		var option=[
				{
					"name":"Basic Calculator",
					"id":"o1",
				},
				{
					"name":"Date Calculator",
					"id":"o2",
				},
				{
					"name":"Mortgage Calculator",
					"id":"o3",
				}
		];

		for(i in option)
		{
		    createElement("input",{"type":"radio","name":"options","id":option[i].id}, mother);
		    var op_name=document.createElement("span");
			var t = document.createTextNode(option[i].name);
		    op_name.appendChild(t);
		    mother.appendChild(op_name);
		}

	function createElement(ele, obj, parent)
	{		
		var element=document.createElement(ele);
		for(var key in obj) 
			{
				element.setAttribute(key, obj[key]);
			}
		element.addEventListener("click", function()
			 {	
		   		init(this.id);

			 });
		parent.appendChild(element);
	}

	function init(val_id)
	{
		document.getElementById("mainContainer").innerHTML="";
		console.log(val_id);

		if (val_id=="o1") 
		{
			basic_calculator();
		}
		else if (val_id=="o2") 
		{
			date_calculator();
		}
		else if (val_id=="o3") 
		{
			mortgage_calculator();
		}
	}

	function basic_calculator()
	{
		/*var wrapper = createElementxx("div",{"className":"wrapper"}, mainContainer);
		createElement("div",{"className":"displ"}, wrapper);

		function createElementxx(ele, obj, parent)
		{		
			var element=document.createElement(ele);
			for(var key in obj) 
				{
					element.setAttribute(key, obj[key]);
				}
			parent.appendChild(element);
			return element;
		}*/

		var wrapper = document.createElement("div");                
		wrapper.className = "wrapper";
		mainContainer.appendChild(wrapper);

		var displayDiv = document.createElement("div");                
		displayDiv.className = "displ";
		wrapper.appendChild(displayDiv);

		var displayElement = document.createElement("input");                
		displayElement.type="text";
		displayElement.id="view";
		displayElement.value="0";
		displayElement.onkeypress=function()
		{
			return false;
		}
		displayDiv.appendChild(displayElement);	
		
		var buttonDiv = document.createElement("div");                
		buttonDiv.className = "buttons";
		wrapper.appendChild(buttonDiv);

		var butns=["MC","M+","M-","MR","CLS","CAN","REM","%","7","8","9","+","4","5","6","-","1","2","3","x",".","0","=","/"];

		for(i in butns)
		{
			var buttonElement = document.createElement("input");                
			buttonElement.type="button";
			buttonElement.value=butns[i];
			buttonElement.addEventListener("click", function()
			 {	
		   				butnClick(this);
			 });
			buttonDiv.appendChild(buttonElement);
		}

		function butnClick(val)
		{
			if (val.value=="MC" || val.value=="M+" || val.value=="M-" || val.value=="MR") 
			{
				mem(val);
			}
			else if (val.value=="0" || val.value=="1" || val.value=="2" || val.value=="3" || val.value=="4" || val.value=="5" || val.value=="6" || val.value=="7" || val.value=="8" || val.value=="9") 
			{
				number(val);
			}
			else if (val.value=="+" || val.value=="-" || val.value=="x" || val.value=="/" || val.value=="REM") 
			{
				oprtr(val);
			}
			else if (val.value=="=") 
			{
				evl();
			}
			else if (val.value=="%") 
			{
				percent();
			}
			else if (val.value=="CAN") 
			{
				cancel();
			}
			else if (val.value==".") 
			{
				decimal(val);
			}
			else if (val.value=="CLS") 
			{
				cls();
			}
		}

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
				else if (operator=="REM") 
				{
					currentValue=document.getElementById("view").value;
					document.getElementById("view").value = parseFloat(prevValue) %  ((parseFloat(currentValue)/100)*parseFloat(prevValue));
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


	}

	function date_calculator()
	{

		var table1 = document.createElement('table');

		var tableContent1=[
			{
				"td1":"Date 1:",
				"td2":"d1"
			},
			{
				"td1":"Date 2:",
				"td2":"d2"
			},
		];

		for (i in tableContent1)
		{
			var displayElement = document.createElement("input");                
			displayElement.type="date";
			displayElement.id=tableContent1[i].td2;

			var tr = document.createElement('tr');   

			var td1 = document.createElement('td');
			var td2 = document.createElement('td');

			var text1 = document.createTextNode(tableContent1[i].td1);

			td1.appendChild(text1);
			td2.appendChild(displayElement);
			tr.appendChild(td1);
			tr.appendChild(td2);

			table1.appendChild(tr);
		}
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		
		var displayElement1 = document.createElement("input");                
		displayElement1.type="button";
		displayElement1.value="Result";
		displayElement1.addEventListener("click", function()
		 {	
	   				res1();
		 });

		var displayElement2 = document.createElement("input");  
		displayElement2.type="text";   
		displayElement2.id="r1";

		td1.appendChild(displayElement1);
		td2.appendChild(displayElement2);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table1.appendChild(tr);

		mainContainer.appendChild(table1);

		function createElementMC(ele, obj, parent)
		{		
			var element=document.createElement(ele);
			for(var key in obj) 
				{
					element.setAttribute(key, obj[key]);
				}
			parent.appendChild(element);
			return element;
		}

		var table2 = document.createElement('table');

		var tableContent2=[
			{
				"td1":"Date 1:",
				"td2_1":"d3_h",
				"td2_2":"d3_m",
				"td2_3":"am1",
				"td2_4":"pm1",
				"td2_5":"mode1"
			},
			{
				"td1":"Date 1:",
				"td2_1":"d4_h",
				"td2_2":"d4_m",
				"td2_3":"am2",
				"td2_4":"pm2",
				"td2_5":"mode2"
			},
		];

		for (i in tableContent2)
		{

			var tr2 = document.createElement('tr');   

			var td21 = document.createElement('td');
			var td22 = document.createElement('td');

			var displayElement1 = document.createElement("input");                
			displayElement1.type="number";
			displayElement1.id=tableContent2[i].td2_1;
			displayElement1.min=0;
			displayElement1.max=12;
			displayElement1.placeholder="HH";

			var displayElement2 = document.createElement("input");                
			displayElement2.type="number";
			displayElement2.id=tableContent2[i].td2_2;
			displayElement2.min=0;
			displayElement2.max=59;
			displayElement2.placeholder="MM";

			var displayElement3 = document.createElement("input");                
			displayElement3.type="radio";
			displayElement3.id=tableContent2[i].td2_3;
			displayElement3.name=tableContent2[i].td2_5;
			var t1 = document.createTextNode("AM");

			var displayElement4 = document.createElement("input");                
			displayElement4.type="radio";
			displayElement4.id=tableContent2[i].td2_4;
			displayElement4.name=tableContent2[i].td2_5;
			var t2 = document.createTextNode("PM");

			var text1 = document.createTextNode(tableContent2[i].td1);

			td21.appendChild(text1);
			td22.appendChild(displayElement1);
			td22.appendChild(displayElement2);
			td22.appendChild(displayElement3);
			td22.appendChild(t1);
			td22.appendChild(displayElement4);
			td22.appendChild(t2);
			tr2.appendChild(td21);
			tr2.appendChild(td22);

			table2.appendChild(tr2);
		}
		var tr2 = document.createElement('tr');
		var td21 = document.createElement('td');
		var td22 = document.createElement('td');
		
		var displayElement1 = document.createElement("input");                
		displayElement1.type="button";
		displayElement1.value="Result";
		displayElement1.addEventListener("click", function()
		 {	
	   				res2();
		 });

		var displayElement2 = document.createElement("input");  
		displayElement2.type="text";   
		displayElement2.id="r2";

		td21.appendChild(displayElement1);
		td22.appendChild(displayElement2);
		tr2.appendChild(td21);
		tr2.appendChild(td22);
		table2.appendChild(tr2);

		mainContainer.appendChild(table2);

		var table3 = document.createElement('table');

		var tr2 = document.createElement('tr');
		var td21 = document.createElement('td');
		var td22 = document.createElement('td');
		var text1 = document.createTextNode("Date 1:");
		var displayElement = document.createElement("input");                
		displayElement.type="date";
		displayElement.id="d5";

		td21.appendChild(text1);
		td22.appendChild(displayElement);
		tr2.appendChild(td21);
		tr2.appendChild(td22);
		table3.appendChild(tr2);

		var tableContent3=[
			{
				"td2_1":"d5_h",
				"td2_2":"d5_m",
			},
			{
				"td2_1":"d6_h",
				"td2_2":"d6_m",
			},
		];



		for (i in tableContent3)
		{

			var tr2 = document.createElement('tr'); 

			var td21 = document.createElement('td');
			var td22 = document.createElement('td');

			var displayElement1 = document.createElement("input");                
			displayElement1.type="number";
			displayElement1.id=tableContent3[i].td2_1;
			displayElement1.min=0;
			displayElement1.max=24;
			displayElement1.placeholder="HH";

			var displayElement2 = document.createElement("input");                
			displayElement2.type="number";
			displayElement2.id=tableContent3[i].td2_2;
			displayElement2.min=0;
			displayElement2.max=59;
			displayElement2.placeholder="MM";

			td22.appendChild(displayElement1);
			td22.appendChild(displayElement2);
			tr2.appendChild(td21);
			tr2.appendChild(td22);

			table3.appendChild(tr2);
		}
		var tr2 = document.createElement('tr');
		var td21 = document.createElement('td');
		var td22 = document.createElement('td');
		
		var displayElement1 = document.createElement("input");                
		displayElement1.type="button";
		displayElement1.value="Result";
		displayElement1.addEventListener("click", function()
		 {	
	   				res3();
		 });

		var displayElement2 = document.createElement("input");  
		displayElement2.type="text";   
		displayElement2.id="r3";

		td21.appendChild(displayElement1);
		td22.appendChild(displayElement2);
		tr2.appendChild(td21);
		tr2.appendChild(td22);
		table3.appendChild(tr2);

		mainContainer.appendChild(table3);

		function res1()
		{
		var date1 = new Date(document.getElementById("d1").value);
		var date2 = new Date(document.getElementById("d2").value);

		var diff1 = date2 - date1;

		var days = Math.round(diff1/(1000*60*60*24));
		var weeks = Math.round(days/7);
		var months=date2.getMonth()-date1.getMonth();
		var years= Math.round(date2.getFullYear()- date1.getFullYear());

		document.getElementById("r1").value=years+" yrs. "+months+" months "+weeks+" weeks "+days+" days";
		}

		function res2()
		{		
	    var h1,h2,min1,min2,diff,hour,minute;

	    h1=document.getElementById("d3_h").value;
	    min1=document.getElementById("d3_m").value;
	    h2=document.getElementById("d4_h").value;
	    min2=document.getElementById("d4_m").value;    
	    
	    if(document.getElementById("pm1").checked && document.getElementById("d3_h").value!="12") 
	        {
	            h1=parseInt(h1)+12;            
	        }
		else if(document.getElementById("am1").checked && document.getElementById("d3_h").value=="12")
			{
				h1=0;
			}

	    if(document.getElementById("pm2").checked && document.getElementById("d4_h").value!="12") 
	        {
	            h2=parseInt(h2)+12;            
	        } 
	    else if(document.getElementById("am1").checked && document.getElementById("d4_h").value=="12")
			{
				h1=0;
			}


	        
	    min1=parseInt(min1)+parseInt(h1)*60;
	    min2=parseInt(min2)+parseInt(h2)*60;
		diff=min2-min1;
		hour=Math.round(diff/60);
		minute=diff%60;
		if(hour<0)
		 hour+=24;
		if(minute<0)
		 minute+=60;
		document.getElementById("r2").value=hour+":"+minute;        
		}

		function res3()
		{
			var date=new Date(document.getElementById("d5").value);
			var x= date.getTime();
			x=(x+(document.getElementById("d5_h").value*3600000)+(document.getElementById("d5_m").value*60000)+(document.getElementById("d6_h").value*3600000)+(document.getElementById("d6_m").value*60000))-19800000;
			var reslt=new Date(x);
			document.getElementById("r3").value=reslt;
		}

	}

	function mortgage_calculator()
	{
		/*console.log("MC");*/
		function createElementMC(ele, obj, parent)
		{		
			var element=document.createElement(ele);
			for(var key in obj) 
				{
					element.setAttribute(key, obj[key]);
				}
			parent.appendChild(element);
			return element;
		}

		var wrapper = createElementMC("div", {"className":"wrapper"}, mainContainer);

		var form1 = createElementMC("form", {"name":"form1"}, wrapper);

		var tableContent=[
			{
				"td1":"Loan (Rs.)",
				"td2":"loan"
			},
			{
				"td1":"Rate Of Interest (%)",
				"td2":"rate"
			},
			{
				"td1":"Months",
				"td2":"month"
			},
			{
				"td1":"EMI (Rs.)",
				"td2":"emi"
			},

		];

		var table = document.createElement('table');
		var tr = document.createElement('tr');
		var th1 = document.createElement('th');
		var th2 = document.createElement('th');
		var text1 = document.createTextNode('Description');
		var text2 = document.createTextNode('Details');
		th1.appendChild(text1);
		th2.appendChild(text2);
		tr.appendChild(th1);
		tr.appendChild(th2);
		table.appendChild(tr);

		for (i in tableContent)
		{
			var displayElement = document.createElement("input");                
			displayElement.type="text";
			displayElement.name=tableContent[i].td2;
			displayElement.addEventListener("keypress", function()
			 {	
		   				return numbercheck(event);
			 });

			var tr = document.createElement('tr');   

			var td1 = document.createElement('td');
			var td2 = document.createElement('td');

			var text1 = document.createTextNode(tableContent[i].td1);

			td1.appendChild(text1);
			td2.appendChild(displayElement);
			tr.appendChild(td1);
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		
		var displayElement1 = document.createElement("input");                
		displayElement1.type="button";
		displayElement1.value="Calculate";
		displayElement1.addEventListener("click", function()
		 {	
	   				calculate();
		 });

		var displayElement2 = document.createElement("input");                
		displayElement2.type="reset";

		td1.appendChild(displayElement1);
		td2.appendChild(displayElement2);
		tr.appendChild(td1);
		tr.appendChild(td2);
		table.appendChild(tr);

		document.form1.appendChild(table);

		function calculate()
		{
			var l_len=document.form1.loan.value.length;
			var r_len=document.form1.rate.value.length;
			var m_len=document.form1.month.value.length;
			var e_len=document.form1.emi.value.length;

			var p,m,e,i;

			if(l_len!==0 && r_len!==0 && m_len!==0)
			{
				 p = document.form1.loan.value;
				 m  = document.form1.month.value;
				 i   = document.form1.rate.value / 1200;
				document.form1.emi.value = Math.round(p* i* Math.pow((1+i),m)/ ((Math.pow((1+i),m))-1));
			}
			else if(e_len!==0 && m_len!==0 && r_len!==0)
			{
				 e = document.form1.emi.value;
				 m  = document.form1.month.value;
				 i   = document.form1.rate.value / 1200;
				document.form1.loan.value = Math.round(e * ((Math.pow(1+i,m))-1)/(i*(Math.pow((1+i),m)))); 
			}
			else if(e_len!==0 && l_len!==0 && r_len!==0)
			{
				 e = document.form1.emi.value;
				 p  = document.form1.loan.value;
				 i   = document.form1.rate.value / 1200;
				var month=Math.ceil((Math.log((e)/(e-(p*i))))/(Math.log(1+i))); 
				if(isNaN(month))
					alert("Loan cannot be paid!");
				else
					document.form1.month.value = month; 
			}
			else
			{
				alert("Atleast Fill any Two fields!!");
			}

		}

		function numbercheck(e)
	    {
	       var unicode=e.charCode? e.charCode : e.keyCode;
	       if (unicode!==8)
	       {
	           if (unicode<48||unicode>57)
	               return false;
	     	}
	 	}
	}

})();