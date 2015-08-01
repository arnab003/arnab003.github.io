<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<h2 align="center"><u>Subscription Records</u></h2>
<div id="rec">
<?php
function selectRow()
{
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "arnab003";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "SELECT id,name, email, mobile, sex, interest1, interest2, interest3, country, state, description FROM subscription";
	$result = $conn->query($sql);

	return $result;
	$conn->close();
} 

$result=selectRow();

if ($result->num_rows > 0)
	 {	   
	    echo "<table cellspacing=10 cellpadding=5>";
	    echo "<tr>";
	    	echo "<th>";
	    	echo "Id";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Name";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Email";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Mobile";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Sex";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Interest 1";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Interest 2";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Interest 3";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Country";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "State";
	    	echo "</th>";
	    	echo "<th>";
	    	echo "Description";
	    	echo "</th>";								
	    echo "</tr>";
	    while($row = $result->fetch_assoc())
			{   
				echo "<tr id=".$row["id"].">";
				echo "<td>";
				echo "<input type=\"text\" id=inp1".$row["id"]." value=\"".$row["id"]."\" disabled readonly/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp2".$row["id"]." value=\"".$row["name"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp3".$row["id"]." value=\"".$row["email"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp4".$row["id"]." value=\"".$row["mobile"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp5".$row["id"]." value=\"".$row["sex"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp6".$row["id"]." value=\"".$row["interest1"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp7".$row["id"]." value=\"".$row["interest2"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp8".$row["id"]." value=\"".$row["interest3"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp9".$row["id"]." value=\"".$row["country"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp10".$row["id"]." value=\"".$row["state"]."\" disabled/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"text\" id=inp11".$row["id"]." value=\"".$row["description"]."\" disabled/>";
				echo "</td>";	        	
				echo "<td>";
				echo "<input type=\"button\" id=ed".$row["id"]." value=\"Edit\" onclick=\"edit(".$row["id"].")\"/>";
				echo "</td>";
				echo "<td>";
				echo "<input type=\"button\" id=dlt".$row["id"]." value=\"Delete\" onclick=\"dlt(".$row["id"].")\"/>";
				echo "</td>";
				echo "</tr>";	       
			}
	     echo "</table>";
	}
	else 
	{
	    echo "0 results";
	}
?>
</div>
<script src="js/adminScript.js"></script>
</body>
</html>