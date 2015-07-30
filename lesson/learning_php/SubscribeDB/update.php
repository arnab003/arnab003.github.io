<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "arnab003";

$data1=array
	(
	$_POST['id'],
	$_POST['name'],
	$_POST['email'],
	$_POST['mobile'],
	$_POST['sex'],
	$_POST["interest1"],
	$_POST["interest2"],
	$_POST["interest3"],
	$_POST['country'],
	$_POST['state'],
	$_POST['description']
	);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE subscription SET name='$data1[1]', email='$data1[2]', mobile='$data1[3]', sex='$data1[4]', interest1='$data1[5]', interest2='$data1[6]', interest3='$data1[7]', country='$data1[8]', state='$data1[9]', description='$data1[10]'  WHERE id='$data1[0]'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
header("Location:admin.php");
?>