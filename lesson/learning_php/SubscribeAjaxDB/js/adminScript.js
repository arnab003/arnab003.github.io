    
    document.getElementById("rec").style.display="inline-block";
    document.getElementById("rec").style.width="95%";
    document.getElementById("rec").style.height="36em";
    document.getElementById("rec").style.marginLeft="2.5%";
    document.getElementById("rec").style.border="1px solid black";
    document.getElementById("rec").style.overflow = "scroll";

    //function to update and delete from database via ajax call
    function ajax(q,Id)
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
                if(xmlhttp.responseText=="Record deleted successfully")
                {
                  //delete row from table
                  document.getElementById(Id).remove();
                }
                else
                {
                  var data=JSON.parse(xmlhttp.responseText);

                  document.getElementById(Id).innerHTML="";

                  var row = document.getElementById(Id);
                  var i=0;

                  //re-populate updated row in table
                  for(var key in data)
                    {
                      if(i==0)
                      {
                        var x = row.insertCell(i);
                        x.innerHTML ="<input type=\"text\" id=inp"+(i+1)+Id+" value=\""+data[key]+"\" disabled readonly/>";
                      }
                      else
                      {
                        var x = row.insertCell(i);
                        x.innerHTML ="<input type=\"text\" id=inp"+(i+1)+Id+" value=\""+data[key]+"\" disabled/>";
                      }
                        i++;
                    }
                    var x = row.insertCell(11);
                    x.innerHTML ="<input type=\"button\" id=ed"+Id+" value=\"Edit\" onclick=\"edit("+Id+")\"/>";

                    var x = row.insertCell(12);
                    x.innerHTML ="<input type=\"button\" id=dlt"+Id+" value=\"Delete\" onclick=\"dlt("+Id+")\"/>";
                }
            }
          }
        xmlhttp.open("GET",q,true);
        xmlhttp.send();
    }

    //function to call ajax for deletion
    function dlt(Id)
    {
         ajax("mod.php?action=delete&id="+Id,Id);
    }

    //function to enable edit mode
    function edit(Id)
    {
      document.getElementById("ed"+Id).value="Update";
      document.getElementById("ed"+Id).id="U"+Id;
      document.getElementById("U"+Id).setAttribute("onclick","updt("+Id+");");
      document.getElementById("dlt"+Id).value="Cancel";
      document.getElementById("dlt"+Id).id="can"+Id;
      document.getElementById("can"+Id).setAttribute("onclick","cancel("+Id+");");
      for(var i=1;i<=11;i++)
      {
        document.getElementById("inp"+i+Id).disabled=false;
      }
    }

    //function to call ajax to update database
    function updt(Id)
    {
      ajax("mod.php?action=update&id="+Id+"&name="+document.getElementById("inp2"+Id).value+"&email="+document.getElementById("inp3"+Id).value+"&mobile="+document.getElementById("inp4"+Id).value+"&sex="+document.getElementById("inp5"+Id).value+"&interest1="+document.getElementById("inp6"+Id).value+"&interest2="+document.getElementById("inp7"+Id).value+"&interest3="+document.getElementById("inp8"+Id).value+"&country="+document.getElementById("inp9"+Id).value+"&state="+document.getElementById("inp10"+Id).value+"&description="+document.getElementById("inp11"+Id).value,Id);
    }

    //function to cancel edit mode
    function cancel(Id)
    {
      document.getElementById("U"+Id).value="Edit";
      document.getElementById("U"+Id).id="ed"+Id;
      document.getElementById("ed"+Id).setAttribute("onclick","edit("+Id+");");
      document.getElementById("can"+Id).value="Delete";
      document.getElementById("can"+Id).id="dlt"+Id;
      document.getElementById("dlt"+Id).setAttribute("onclick","dlt("+Id+");");
      for(var i=1;i<=11;i++)
      {
        document.getElementById("inp"+i+Id).disabled=true;
      }
    }
