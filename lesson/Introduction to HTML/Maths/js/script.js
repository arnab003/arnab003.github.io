function getRandomInt() 
			{
			  return Math.floor(Math.random() * 90) + 10;
			}

			function createMain()
			{
				var mainContainer = document.createElement("div");
				mainContainer.id = "mainContainer";
				document.body.appendChild(mainContainer);
			}

    		function create(sign) 
    		{
				document.getElementById("mainContainer").innerHTML = "";

				document.getElementById("mainContainer").style.border = "2px solid black";

				for(var i = 0; i < 20; i++) 
				{
					var divBlock = document.createElement("div");                
					divBlock.className = "blocks";
					mainContainer.appendChild(divBlock);

					var first=getRandomInt();
					var second=getRandomInt();

					if (sign=="-") 
						{
							if (first<second) 
							{
								var temp=first;
								first=second;
								second=temp;
							}
						}

					var s1= document.createElement("span");
					s1.id="s1_"+i;
					s1.innerText=first;
					divBlock.appendChild(s1);	

					var s2=document.createElement("span");
					s2.id="s2_"+i;
					s2.innerText=sign+second;
					divBlock.appendChild(s2);	

					var input = document.createElement("input");
					input.type="text";
					input.id=i;
					input.onkeyup=function() {
												rtl(this);
												check(this.id);
												return numbercheck(event);
											   	};

					input.onkeypress=function() {
												return numbercheck(event);
											   	};
					divBlock.appendChild(input);

				}
		   	}

		   	function rtl(inp)
			{   
				inp.setSelectionRange(0, 0);
			}

		   	function numbercheck(e)
		    {
		       var unicode=e.charCode? e.charCode : e.keyCode
		       if (unicode!=8){
		           if (unicode<48||unicode>57)
		               return false;
		       }
		    }

		    function check(x)
			{
				var a=document.getElementById("s1_"+x).innerHTML;
				var b=document.getElementById("s2_"+x).innerHTML;
				var c=parseInt(a)+parseInt(b);

				var user=document.getElementById(x).value;
				
				if (c==user) 
				{
					document.getElementById(x).style.backgroundColor = "#66cc66";
				}
				else
				{
					document.getElementById(x).style.backgroundColor = "#ff6666";
				}
			}