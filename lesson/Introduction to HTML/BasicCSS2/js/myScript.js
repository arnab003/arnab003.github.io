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
    	if (document.getElementsByName("name")[0].value!="" && document.getElementsByName("email")[0].value!="" && document.getElementsByName("sex")[0].value!="" && document.getElementsByName("interest")[0].value!="" && document.getElementsByName("country")[0].value!="" && document.getElementsByName("address")[0].value!="" && document.getElementById("mobDiv").style.visibility == "hidden")
    	{

    		var choices = [];

            if (cb1.checked == true)
            {
                var els = document.getElementsByName('games');
                var games = [];

                for (var i=0;i<els.length;i++)
                {
                    if ( els[i].checked ) 
                    {
                     games.push(els[i].value);
                    }
                }
                choices.push({"Games" : games});
            }

            if (cb2.checked == true)
            {
                var els = document.getElementsByName('movie');
                var movie = [];

                for (var i=0;i<els.length;i++)
                {
                    if ( els[i].checked ) 
                    {
                     movie.push(els[i].value);
                    }
                }
                choices.push({"Movie" : movie});
            }
           
            if (cb3.checked == true)
            {
                var els = document.getElementsByName('readings');
                var readings = [];

                for (var i=0;i<els.length;i++)
                {
                    if ( els[i].checked ) 
                    {
                     readings.push(els[i].value);
                    }
                }
                choices.push({"Reading" : readings});
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
                    "Mobile" : document.getElementById("mobile").value,
			    	"Sex" : sex,
			    	"Interest" : choices,
			    	"Country" : document.getElementsByName("country")[0].value,
                    "State" : document.getElementById("state").value,
			    	"Description" : document.getElementsByName("address")[0].value
			    };

		console.log("\nJSON Structured Output -\n");
	    console.log(JSON.stringify(data));
	    alert("Output is displayed in Console");
	    };
	}

    var states = new Array(2) 
    states["0"] = ["Select"]; 
    states["India"] = 
    ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim", 
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"];
     
     states["United States of America"] = 
     ["Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",    
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"];

    function stateChange(selectObj) 
    { 
        document.getElementById("state").disabled=false;
        var idx = selectObj.selectedIndex;
        var which = selectObj.options[idx].value;
        uList = states[which];
        var state = document.getElementById("state");
     
        while (state.options.length > 0) 
            { 
                state.remove(0); 
            }
        var newOption;
        // create and add new options 
        for (var i=0; i<uList.length; i++) 
        {
            newOption = document.createElement("option"); 
            newOption.value = uList[i];  
            newOption.text=uList[i];
            try { 
                state.add(newOption); 
                } 
            catch (e) { 
                state.appendChild(newOption);
                } 
        }
    }

    function numbercheck(e)
    {
       var unicode=e.charCode? e.charCode : e.keyCode
       if (unicode!=8){
           if (unicode<48||unicode>57)
               return false;
       }
    }

    function checkIndia()
    {
        var number=document.getElementsByName("mobile")[0].value;
        var res = number.charAt(0);
        if (res=="7" || res=="8" || res=="9") 
        {
            if (number.length==10)
            {
            document.getElementById("mobDiv").style.visibility = "hidden";
            document.getElementsByName("mobile")[0].style.borderColor = "#cccccc";
            }
            else
            {
            document.getElementById("mobDiv").style.visibility = "visible";
            document.getElementsByName("mobile")[0].style.borderColor = "red";
            document.getElementById("mob").src = "invalid.png";
            }
        }
        else
        {
            document.getElementById("mobDiv").style.visibility = "visible";
            document.getElementsByName("mobile")[0].style.borderColor = "red";
            document.getElementById("mob").src = "invalid.png";
        }
    }

    function overlay(cb,bool) 
    {    
	    el = document.getElementById("overlay");
	    el.style.visibility = bool ? "visible" : "hidden";
	    var cb1_sub=document.getElementById("cb1_sub");
	    var cb2_sub=document.getElementById("cb2_sub");
	    var cb3_sub=document.getElementById("cb3_sub");

	    if(cb==1)
	    {
	        cb1_sub_1.checked=false;
	        cb1_sub_2.checked=false;
	        cb1_sub.style.display="block";
	        cb2_sub.style.display="none";
	        cb3_sub.style.display="none";
	    }

	    if(cb==2)
	    {
	        cb2_sub_1.checked=false;
	        cb2_sub_2.checked=false;
	        cb2_sub_3.checked=false;
	        cb1_sub.style.display="none";
	        cb2_sub.style.display="block";
	        cb3_sub.style.display="none";
	    }

	    if(cb==3)
	    {
	        cb3_sub_1.checked=false;
	        cb3_sub_2.checked=false;
	        cb3_sub_3.checked=false;
	        cb1_sub.style.display="none";
	        cb2_sub.style.display="none";
	        cb3_sub.style.display="block";
	    }
    }

    function clearSelect()
    {
        document.getElementById("state").innerHTML="";       
        document.getElementById("state").disabled=true;
    }