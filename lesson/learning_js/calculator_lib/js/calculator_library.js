	(function master()
	{

		var header = document.createElement("div");
		header.id = "header";
		header.style.width="42%";
		header.style.height="550px";
		header.style.border="1px solid #6F6F6F";
		header.style.marginLeft="27%";
		header.style.marginTop="3%";
		header.style.padding="10px";
		document.body.appendChild(header);

		function createElement(tagName, obj, parent)
		{		
			var element=document.createElement(tagName);
			for(var key in obj) 
				{
					element.setAttribute(key, obj[key]);
				}
			parent.appendChild(element);
			return element;
		}

		var t = document.createTextNode("Choose Calculator Type:");
		header.appendChild(t);

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
		    var radios=createElement("input",{"type":"radio","name":"options","id":option[i].id},  header);
		    radios.addEventListener("click", function()
				 {	
			   		init(this.id);

				 });
			var t = document.createTextNode(option[i].name);
		    header.appendChild(t);
		}

		var mainContainer=createElement("div",{"id":"mainContainer","style":"width:100%; height:93%; border:1px solid #6F6F6F; border-radius:5px; margin-top:20px;"}, header);
		var BCwrapper = createElement("div", {"className":"BCwrapper","style":"display:none; width: 300px;height: 450px;border: 2px solid #6F6F6F;border-radius: 5px;margin: 5% 0% 0% 25%;"}, mainContainer);
		var MCwrapper=createElement("div", {"className":"MCwrapper","style":"display:none; border: 1px solid #6F6F6F;border-radius:5px; width:50%;height:150px;margin-top:5%;margin-left:25%;"}, mainContainer);
		var DCwrapper=createElement("div", {"className":"DCwrapper","style":"display:none; border: 1px solid #6F6F6F;border-radius:5px; width:75%;margin-top:5%;margin-left:12%;"}, mainContainer);

		function init(val_id)
		{
			if (val_id=="o1") 
			{
				BCwrapper.innerHTML="";
				MCwrapper.style.display="none";
				DCwrapper.style.display="none";
				BCwrapper.style.display="inline-block";
				basic_calculator();
			}
			else if (val_id=="o2") 
			{
				DCwrapper.innerHTML="";
				MCwrapper.style.display="none";
				DCwrapper.style.display="inline-block";
				BCwrapper.style.display="none";
				date_calculator();
			}
			else if (val_id=="o3") 
			{
				MCwrapper.innerHTML="";
				BCwrapper.style.display="none";
				DCwrapper.style.display="none";
				MCwrapper.style.display="inline-block";
				mortgage_calculator();
			}
		}

		function basic_calculator()
		{
			var displayDiv = createElement("div", {"className":"displ","style":"width: 90%;height: 45px;margin: 4%;"}, BCwrapper);
			var displayElement = createElement("input",{"type":"text","id":"view","value":"0","style":"width: 99%;height: 100%;text-align: right;border-radius: 3px;font-size: 25px;"}, displayDiv);		
			displayElement.onkeypress=function()
			{
				return false;
			}						
			var buttonDiv = createElement("div",{"className":"buttons","style":"width: 90%;height: 80%;margin: 0% 0% 0% 5%;padding-left: 1%;padding-top: 5%;"}, BCwrapper);
			var butns=["MC","M+","M-","MR","CLS","CAN","REM","%","7","8","9","+","4","5","6","-","1","2","3","x",".","0","=","/"];
			for(i in butns)
			{
				var buttonElement = createElement("input", {"type":"button","value":butns[i],"style":"width: 21%;height: 12%;margin: 2% 0% 2% 2%;display: inline-block;vertical-align: middle;"}, buttonDiv);
				buttonElement.addEventListener("click", function()
				 {	
			   				butnClick(this);
				 });
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
				var str=(document.getElementById("view").value).toString();

				for(i=0;i<str.length;i++)
				{
					if(str.charAt(i)==".")
					{
						flagDecimal=true;
						break;
					}
				}

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

		}//end of basic_calculator()

		function mortgage_calculator()
		{			
			var formMC=createElement("form", {"name":"form1"}, MCwrapper);

			var contentMC=[
							{
								"title":"Loan (Rs.) ",
								"name":"loan"
							},
							{
								"title":"Rate of Interest (%) ",
								"name":"rate"
							},
							{
								"title":"Months ",
								"name":"month"
							},
							{
								"title":"EMI (Rs.) ",
								"name":"emi"
							},

						];
			for(i in contentMC)
			{
				var divMC=createElement("div", {"style":"width:95%; margin:2%"}, formMC);			
				var t = document.createTextNode(contentMC[i].title);
				divMC.appendChild(t);
				var inp=createElement("input", {"type":"text","name":contentMC[i].name,"size":"12","style":"text-align:right; float:right"}, divMC);
				inp.onkeypress=function()
				 {	
			   		return isNumber(event);

				 };
			}

			var divMC=createElement("div", {"style":"width:95%; margin:2%"}, formMC);			
			createElement("input", {"type":"reset","value":"Reset","style":"margin:2%; float:left;"}, divMC);
			var b1=createElement("input", {"type":"button","value":"Calculate","style":"margin:2%; float:right;"}, divMC);
			b1.onclick=function()
				 {	
			   		calculate();

				 };

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

			function isNumber(evt) 
			{
			    evt = (evt) ? evt : window.event;
			    var charCode = (evt.which) ? evt.which : evt.keyCode;
			    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			        return false;
			    }
			    return true;
			}
		}// end of mortgage_calculator()

		function date_calculator()
		{
			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Date 1:");
			divDC.appendChild(t);
			var inp=createElement("input", {"type":"date","id":"d1","size":"12","style":"text-align:right; float:right"}, divDC);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Date 2:");
			divDC.appendChild(t);
			var inp=createElement("input", {"type":"date","id":"d2","size":"12","style":"text-align:right; float:right"}, divDC);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 4% 2%;"}, DCwrapper);
			var inp=createElement("input", {"type":"button","value":"Result"}, divDC);
			inp.onclick=function()
			{
				res1();
			}
			var inp=createElement("input", {"type":"text","id":"r1","size":"42","style":"text-align:right; float:right","placeholder":"Date Difference"}, divDC);
			inp.onkeypress=function()
			{
				return false;
			}

			createElement("hr",{},DCwrapper);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Time 1:");
			divDC.appendChild(t);
			createElement("input", {"type":"number","id":"d3_h","min":"0","max":"12","placeholder":"HH","style":"margin-left:21%;"}, divDC);
			createElement("input", {"type":"number","id":"d3_m","min":"0","max":"59","placeholder":"MM"}, divDC);
			createElement("input", {"type":"radio","id":"am1","name":"mode1","value":"AM"}, divDC);
			var lbl=createElement("span", {}, divDC);
			var t = document.createTextNode("AM");
			lbl.appendChild(t);
			createElement("input", {"type":"radio","id":"pm1","name":"mode1","value":"PM"}, divDC);
			var lbl=createElement("span", {}, divDC);
			var t = document.createTextNode("PM");
			lbl.appendChild(t);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Time 2:");
			divDC.appendChild(t);
			createElement("input", {"type":"number","id":"d4_h","min":"0","max":"12","placeholder":"HH","style":"margin-left:21%;"}, divDC);
			createElement("input", {"type":"number","id":"d4_m","min":"0","max":"59","placeholder":"MM"}, divDC);
			createElement("input", {"type":"radio","id":"am2","name":"mode2","value":"AM"}, divDC);
			var lbl=createElement("span", {}, divDC);
			var t = document.createTextNode("AM");
			lbl.appendChild(t);
			createElement("input", {"type":"radio","id":"pm2","name":"mode2","value":"PM"}, divDC);
			var lbl=createElement("span", {}, divDC);
			var t = document.createTextNode("PM");
			lbl.appendChild(t);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 4% 2%;"}, DCwrapper);
			var inp=createElement("input", {"type":"button","value":"Result"}, divDC);
			inp.onclick=function()
			{
				res2();
			}
			var inp=createElement("input", {"type":"text","id":"r2","size":"30","style":"text-align:right;margin-left:25%;","placeholder":"Time Difference"}, divDC);
			inp.onkeypress=function()
			{
				return false;
			}

			createElement("hr",{},DCwrapper);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Date & Time:");
			divDC.appendChild(t);
			var inp=createElement("input", {"type":"date","id":"d5","style":"text-align:right;margin-left:1%;"}, divDC);
			createElement("input", {"type":"number","id":"d5_h","min":"0","max":"12","placeholder":"HH"}, divDC);
			createElement("input", {"type":"number","id":"d5_m","min":"0","max":"59","placeholder":"MM"}, divDC);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 0% 2%;"}, DCwrapper);			
			var t = document.createTextNode("Enter Time Interval:");
			divDC.appendChild(t);
			createElement("input", {"type":"number","id":"d6_h","min":"0","placeholder":"HH","style":"margin-left:8%;"}, divDC);
			createElement("input", {"type":"number","id":"d6_m","min":"0","max":"59","placeholder":"MM"}, divDC);

			var divDC=createElement("div", {"style":"width:95%; margin:4% 2% 4% 2%;"}, DCwrapper);
			var inp=createElement("input", {"type":"button","value":"Result"}, divDC);
			inp.onclick=function()
			{
				res3();
			}
			var inp=createElement("input", {"type":"text","id":"r3","size":"40","style":"text-align:right;float:right;","placeholder":"Calculated TimeStamp"}, divDC);
			inp.onkeypress=function()
			{
				return false;
			}

			function res1()
			{
				if(document.getElementById("d1").value!="" && document.getElementById("d2").value!="")
				{
					var date1 = new Date(document.getElementById("d1").value);
					var date2 = new Date(document.getElementById("d2").value);

					var diff1 = date2 - date1;

					var days = Math.round(diff1/(1000*60*60*24));
					var weeks = Math.round(days/7);
					var months=Math.round(days/30);
					var years= parseFloat(days/365).toFixed(2);

					document.getElementById("r1").value="Yrs:"+years+", Months:"+months+", Weeks:"+weeks+", Days:"+days;
				}
				else
				{
					alert("Empty fields!");
				}
			}

			function res2()
			{		
			    var h1,h2,min1,min2,diff,hour,minute;

			    h1=document.getElementById("d3_h").value;
			    min1=document.getElementById("d3_m").value;
			    h2=document.getElementById("d4_h").value;
			    min2=document.getElementById("d4_m").value;  

			    if(h1!="" && min1!="" && h2!="" && min2!="")  
			    {			    
			    	if(h1>12 || min1>59 || h2>12 || min2>59)
			    	{
			    		alert("Invalid Input!");
			    	}
			    	else
			    	{
					    if(document.getElementById("pm1").checked && document.getElementById("d3_h").value!="12") 
					        {
					            h1=parseInt(h1)+12;            
					        }
						if(document.getElementById("am1").checked && document.getElementById("d3_h").value=="12")
							{
								h1=0;
							}

					    if(document.getElementById("pm2").checked && document.getElementById("d4_h").value!="12") 
					        {
					            h2=parseInt(h2)+12;            
					        } 
					    if(document.getElementById("am2").checked && document.getElementById("d4_h").value=="12")
							{
								h2=0;
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
						document.getElementById("r2").value=hour+" hours "+minute+" minutes "; 
					}  
				}  
				else
				{
					alert("Empty fields!");
				}   
			}

			function res3()
			{
				if(document.getElementById("d5").value!="" && document.getElementById("d5_h").value!="" && document.getElementById("d5_m").value!="" && document.getElementById("d6_h").value!="" && document.getElementById("d6_m").value!="")
				{
					if(document.getElementById("d5_h").value>23 || document.getElementById("d5_m").value>59 || document.getElementById("d6_m").value>59)
			    	{
			    		alert("Invalid Input!");
			    	}
			    	else
			    	{
						var date=new Date(document.getElementById("d5").value);
						var x= date.getTime();
						x=(x+(document.getElementById("d5_h").value*3600000)+(document.getElementById("d5_m").value*60000)+(document.getElementById("d6_h").value*3600000)+(document.getElementById("d6_m").value*60000))-(19800000);
						var reslt=new Date(x);
						document.getElementById("r3").value=reslt;
					}
				}
				else
				{
					alert("Empty fields!");
				}
			}
		}
	})();