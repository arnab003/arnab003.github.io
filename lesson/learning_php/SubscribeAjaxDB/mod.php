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

function getValue()
{
	global $conn;

	$sql = "SELECT * FROM subscription WHERE id=".$_GET["id"];
		$result = $conn->query($sql);
		 while($row = $result->fetch_assoc())
	     {
	     	echo  "{
		     	\"id\":\"".$row["id"]."\",
			   	\"name\":\"".$row["name"]."\",
			   	\"email\":\"".$row["email"]."\",
			   	\"mobile\":\"".$row["mobile"]."\",
			   	\"sex\":\"".$row["sex"]."\",
			   	\"interest1\":\"".$row["interest1"]."\",
			   	\"interest2\":\"".$row["interest2"]."\",
			   	\"interest3\":\"".$row["interest3"]."\",
			   	\"country\":\"".$row["country"]."\",
			   	\"state\":\"".$row["state"]."\",
			   	\"description\":\"".$row["description"]."\"   
		   		}";
	     }
}

if($_GET["action"]=="delete")
	{
		// sql to delete a record
		$sql = "DELETE FROM subscription WHERE id=".$_GET["id"];

		if ($conn->query($sql) === TRUE) {
		    echo "Record deleted successfully";
		} else {
		    echo "Error deleting record: " . $conn->error;
		}
	}
else if($_GET["action"]=="update")
	{
		$data1=array
		(
		$_GET['id'],
		$_GET['name'],
		$_GET['email'],
		$_GET['mobile'],
		$_GET['sex'],
		$_GET["interest1"],
		$_GET["interest2"],
		$_GET["interest3"],
		$_GET['country'],
		$_GET['state'],
		$_GET['description']
		);

		$sql = "UPDATE subscription SET name='$data1[1]', email='$data1[2]', mobile='$data1[3]', sex='$data1[4]', interest1='$data1[5]', interest2='$data1[6]', interest3='$data1[7]', country='$data1[8]', state='$data1[9]', description='$data1[10]'  WHERE id='$data1[0]'";

		if ($conn->query($sql) === TRUE) 
		{
			getValue();
		}
		else 
		{
		    echo "Error updating record: " . $conn->error;
		}

	}
else if($_GET["action"]=="cancel")
	{
		getValue();
	}

$conn->close();

?>