function clk(a)
    {
    	if(a=="t1")
    	{
    		document.getElementById(a).style.zIndex = "1";
    		document.getElementById("t2").style.zIndex = "0";
    		document.getElementById("t1h2").style.backgroundColor= "#e4efff";
    		document.getElementById("t2h2").style.backgroundColor= "white";
    		document.getElementById("tabb1").style.color= "#09569d";
    		document.getElementById("tabb2").style.color= "#717171";
    	}
    	else if(a=="t2")
    	{
    		document.getElementById(a).style.zIndex = "1";
    		document.getElementById("t1").style.zIndex = "0";
    		document.getElementById("t2h2").style.backgroundColor= "#e4efff";
    		document.getElementById("t1h2").style.backgroundColor= "white";
    		document.getElementById("tabb1").style.color= "#717171";
    		document.getElementById("tabb2").style.color= "#09569d";
    	}
    };

    function display()
    {
    	
    	if (document.getElementsByName("name")[0].value!="" && document.getElementsByName("email")[0].value!="" && document.getElementsByName("sex")[0].value!="" && document.getElementsByName("interest")[0].value!="" && document.getElementsByName("country")[0].value!="" && document.getElementsByName("address")[0].value!="")
    	{

    		var choices = [];
			var els = document.getElementsByName('interest');
			for (var i=0;i<els.length;i++){
  				if ( els[i].checked ) {
    			choices.push(els[i].value);
  				}
			}

			var radios = document.getElementsByName('sex');
			var sex="";

			for (var i = 0, length = radios.length; i < length; i++) {
			    if (radios[i].checked) {			        
			        sex=radios[i].value;			       
			        break;
			    }
			}

	    var data= {
			    	"Name": document.getElementsByName("name")[0].value,
			    	"Email": document.getElementsByName("email")[0].value,
			    	"Sex" : sex,
			    	"Interest" : choices,
			    	"Country" : document.getElementsByName("country")[0].value,
			    	"Address" : document.getElementsByName("address")[0].value
			    };

		console.log("\nJSON Structured Output -\n");
	    console.log(JSON.stringify(data));
	    alert("Output is displayed in Console");
	    };
	}