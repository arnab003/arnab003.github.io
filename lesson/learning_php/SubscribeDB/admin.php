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
   
	        echo "<tr>";
	        echo "<td>";
		        echo $row["id"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["name"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["email"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["mobile"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["sex"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["interest1"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["interest2"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["interest3"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["country"];
		        echo "</td>";
		        echo "<td>";
		        echo $row["state"];
		        echo "</td>";
		         echo "<td>";
		        echo $row["description"];
		        echo "</td>";
		        echo "<td>";
		        echo "<a href='modify.php?id=".$row["id"]."&name=".$row["name"]."&email=".$row["email"]."&mobile=".$row["mobile"]."&sex=".$row["sex"]."&interest1=".$row["interest1"]."&interest2=".$row["interest2"]."&interest3=".$row["interest3"]."&country=".$row["country"]."&state=".$row["state"]."&description=".$row["description"]."'>Edit</a>";
		        echo "</td>";
		        echo "<td>";
		        echo "<a href='delete.php?id=".$row["id"]."'>Delete</a>";
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