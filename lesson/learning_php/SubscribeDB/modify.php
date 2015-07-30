
<form method="post" action="update.php">
<?php
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

	    echo "<tr>";
	        echo "<td>";
		       echo "<input type=\"text\" name=\"id\" value=\"".$_GET["id"]."\" onkeypress=\"return false;\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"name\" value=\"".$_GET["name"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"email\" value=\"".$_GET["email"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"mobile\" value=\"".$_GET["mobile"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"sex\" value=\"".$_GET["sex"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"interest1\" value=\"".$_GET["interest1"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"interest2\" value=\"".$_GET["interest2"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"interest3\" value=\"".$_GET["interest3"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"country\" value=\"".$_GET["country"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"state\" value=\"".$_GET["state"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"text\" name=\"description\" value=\"".$_GET["description"]."\"/>";
		        echo "</td>";
		        echo "<td>";
		        echo "<input type=\"submit\" value=\"Update\"/>";
		        echo "</td>";
	        echo "</tr>";
	        ?>
	        </form>

<?php

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

/*$sql = "UPDATE subscription SET lastname='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}*/

$conn->close();

//header('Location: ' . $_SERVER['HTTP_REFERER']);
?>