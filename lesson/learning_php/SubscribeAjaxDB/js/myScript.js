//function to toggle tabs
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

    //function to populate states according to Countries
    function stateChange(selectObj) 
    { 
        document.getElementById("stateID").disabled=false;
        var idx = selectObj.selectedIndex;
        var which = selectObj.options[idx].value;
        uList = states[which];
        var state = document.getElementById("stateID");
     
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

    //function to restrict number inputs only in mobile number field input
    function numbercheck(e)
    {
       var unicode=e.charCode? e.charCode : e.keyCode
       if (unicode!=8){
           if (unicode<48||unicode>57)
               return false;
       }
    }

    //function to display Success message as modal window
    function overlay(bool) 
    {    
	    el = document.getElementById("overlay");
	    el.style.visibility = bool ? "visible" : "hidden";
    }  

    //function to clear states
    function clearSelect()
    {
        document.getElementById("stateID").innerHTML="";       
        document.getElementById("stateID").disabled=true;
    }

    //function to check all input validations and insertion in database via ajax call
    function checkInsert()
    {   
        var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                if (xmlhttp.responseText=== '{}') //condition true when Insertion in database is successful
                {
                    document.getElementById("nameError").innerHTML="";
                    document.getElementById("emailError").innerHTML="";
                    document.getElementById("mobileError").innerHTML="";
                    document.getElementById("sexError").innerHTML="";
                    document.getElementById("interestError").innerHTML="";
                    document.getElementById("countryError").innerHTML="";
                    document.getElementById("stateError").innerHTML="";
                    document.getElementById("descriptionError").innerHTML="";
                    document.getElementById("phnError").innerHTML="";
                    document.getElementById("mError").innerHTML="";

                    document.getElementById("nameID").value="";
                    document.getElementById("emailID").value="";
                    document.getElementById("mobileID").value="";
                    document.getElementById("countryID").value="";
                    document.getElementById("stateID").value="";
                    document.getElementById("descriptionID").value="";
                    document.getElementById("maleID").checked=false;
                    document.getElementById("femaleID").checked=false;
                    document.getElementById("gameID").checked=false;
                    document.getElementById("movieID").checked=false;
                    document.getElementById("readingID").checked=false;
                    overlay(true);
                }
                 else
                 {
                    var data=JSON.parse(xmlhttp.responseText);

                    if(data.nameErr==false)
                        document.getElementById("nameError").innerHTML="*Required!";
                    else
                         document.getElementById("nameError").innerHTML="";

                     if(data.mailErr==false)
                        document.getElementById("emailError").innerHTML="*Required!";
                    else
                         document.getElementById("emailError").innerHTML="";

                     if(data.mobileErr==false)
                        document.getElementById("mobileError").innerHTML="*Required!";
                    else
                         document.getElementById("mobileError").innerHTML="";

                     if(data.sexErr==false)
                        document.getElementById("sexError").innerHTML="*Required!";
                    else
                         document.getElementById("sexError").innerHTML="";

                     if(data.interestErr==false)
                        document.getElementById("interestError").innerHTML="*Required!";
                    else
                         document.getElementById("interestError").innerHTML="";

                     if(data.countryErr==false)
                        document.getElementById("countryError").innerHTML="*Required!";
                    else
                         document.getElementById("countryError").innerHTML="";

                     if(data.stateErr==false)
                        document.getElementById("stateError").innerHTML="*Required!";
                    else
                         document.getElementById("stateError").innerHTML="";

                     if(data.descriptionErr==false)
                        document.getElementById("descriptionError").innerHTML="*Required!";
                    else
                         document.getElementById("descriptionError").innerHTML="";

                     if(data.mobileErr==true && data.phnV==false)
                        document.getElementById("phnError").innerHTML="*Invalid Format!";
                    else
                         document.getElementById("phnError").innerHTML="";

                     if(data.mailErr==true && data.mailV==false)
                        document.getElementById("mError").innerHTML="*Invalid Format!";
                    else
                         document.getElementById("mError").innerHTML="";
                 }
                
            }
          }
        xmlhttp.open("GET","checkE.php?name="+document.getElementById("nameID").value+"&mail="+document.getElementById("emailID").value+"&mobile="+document.getElementById("mobileID").value+"&male="+document.getElementById("maleID").checked+"&female="+document.getElementById("femaleID").checked+"&game="+document.getElementById("gameID").checked+"&movie="+document.getElementById("movieID").checked+"&reading="+document.getElementById("readingID").checked+"&maleValue="+document.getElementById("maleID").value+"&femaleValue="+document.getElementById("femaleID").value+"&gameValue="+document.getElementById("gameID").value+"&movieValue="+document.getElementById("movieID").value+"&readingValue="+document.getElementById("readingID").value+"&country="+document.getElementById("countryID").value+"&state="+document.getElementById("stateID").value+"&description="+document.getElementById("descriptionID").value,true);
        xmlhttp.send();
    }