<?php
session_start();

$_SESSION['name']=$_POST["name"];
$_SESSION['email']=$_POST["email"];
$_SESSION['mobile']=$_POST["mobile"];
$_SESSION['sex']=$_POST["sex"];
$_SESSION['interest1']=$_POST["games"];
$_SESSION['interest2']=$_POST["movie"];
$_SESSION['interest3']=$_POST["reading"];

/*$_SESSION['games1']=$_POST["games"][0];
$_SESSION['games2']=$_POST["games"][1];

$_SESSION['movie1']=$_POST["movie"][0];
$_SESSION['movie2']=$_POST["movie"][1];
$_SESSION['movie3']=$_POST["movie"][2];

$_SESSION['readings1']=$_POST["readings"][0];
$_SESSION['readings2']=$_POST["readings"][1];
$_SESSION['readings3']=$_POST["readings"][2];*/

$_SESSION['country']=$_POST["country"];
$_SESSION['state']=$_POST["state"];
$_SESSION['description']=$_POST["description"];

$_SESSION['flagBind']=true;
$_SESSION['flagSuc']=false;

echo $_SESSION['interest1'];

$mail=false;
$phn=false;

if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
  //echo("$email is a valid email address");
  $mail=true;
} 
  
function phoneNumbervalidation($mobile)
{
 if(preg_match('/^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1})?([0-9]{10})$/', $mobile,$matches)){
 return true;
 }
 else
 return false;
}
  
$phn=phoneNumbervalidation($_POST["mobile"]);

$_SESSION['flagMob']=false;
$_SESSION['flagEmail']=true;


$_SESSION['flagMob']=phoneNumbervalidation($_POST["mobile"]);

$_SESSION['flagEmail']=$mail;


if ($_SESSION['name']!= null && $_SESSION['email']!= null && $_SESSION['mobile']!= null && $_SESSION['sex']!= null && $_SESSION['country']!= null && $_SESSION['state']!= null && $_SESSION['description']!= null) 
{
	if ($_SESSION['flagMob']==true && $_SESSION['flagEmail']==true) 
	{
		
		$_SESSION['flagSuc']=true;
		
		$data1=array
		(
		$_POST['name'],
		$_POST['email'],
		$_POST['mobile'],
		$_POST['sex'],
		$_POST["games"],
		$_POST["movie"],
		$_POST["reading"],
		$_POST['country'],
		$_POST['state'],
		$_POST['description']
		);

		insert($data1);
	}
}

function insert($data1)
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

	$sql = "INSERT INTO subscription (name, email, mobile, sex, interest1, interest2, interest3, country, state, description)
	VALUES ('$data1[0]', '$data1[1]', '$data1[2]', '$data1[3]', '$data1[4]', '$data1[5]', '$data1[6]', '$data1[7]', '$data1[8]', '$data1[9]')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
}

header('Location: ' . $_SERVER['HTTP_REFERER']);
?>