<?php

$mailV=$phnV="false";

if (!empty($_GET["mail"])) 
	{
		if (!filter_var($_GET["mail"], FILTER_VALIDATE_EMAIL) === false) 
		{
		  $mailV="true";
		} 
}

  
function phoneNumbervalidation($mobile)
{
	 if(preg_match('/^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1})?([0-9]{10})$/', $mobile,$matches))
	 {
	 	return "true";
	 }
	 else
	 	return "false";
}

if (!empty($_GET["mobile"])) 
	{
		$phnV=phoneNumbervalidation($_GET["mobile"]);
	}

$sexErr=$interestErr=$nameErr=$mailErr=$mobileErr=$countryErr=$stateErr=$descriptionErr="true";

if(!isset($_GET["name"])||empty($_GET["name"]))
{
	$nameErr="false";
}

if(empty($_GET["mail"]))
{
	$mailErr="false";
}

if(empty($_GET["mobile"]))
{
	$mobileErr="false";
}

if($_GET["male"]=="false" && $_GET["female"]=="false")
{
	$sexErr="false";
}

if($_GET["game"]=="false" && $_GET["movie"]=="false" && $_GET["reading"]=="false")
{
	$interestErr="false";
}


if(empty($_GET["country"]))
{
	$countryErr="false";
}

if(empty($_GET["state"]))
{
	$stateErr="false";
}

if(empty($_GET["description"]))
{
	$descriptionErr="false";
}

//condition true when all inputs are valid
if($nameErr=="true" && $mailErr=="true" && $mobileErr=="true" && $sexErr=="true" && $interestErr=="true" && $countryErr=="true" && $stateErr=="true" && $descriptionErr=="true" && $phnV=="true" && $mailV=="true")
{
	if($_GET["male"]=="true")
		$sexValue=$_GET["maleValue"];
	else if($_GET["female"]=="true")
		$sexValue=$_GET["femaleValue"];

	if($_GET["game"]=="true")
		$gameValue=$_GET["gameValue"];
	else
		$gameValue=null;

	if($_GET["movie"]=="true")
		$movieValue=$_GET["movieValue"];
	else
		$movieValue=null;

	if($_GET["reading"]=="true")
		$readingValue=$_GET["readingValue"];
	else
		$readingValue=null;

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "arnab003";

	$data1=array
		(
		$_GET['name'],
		$_GET['mail'],
		$_GET['mobile'],
		$sexValue,
		$gameValue,
		$movieValue,
		$readingValue,
		$_GET['country'],
		$_GET['state'],
		$_GET['description']
		);

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$sql = "INSERT INTO subscription (name, email, mobile, sex, interest1, interest2, interest3, country, state, description)
	VALUES ('$data1[0]', '$data1[1]', '$data1[2]', '$data1[3]', '$data1[4]', '$data1[5]', '$data1[6]', '$data1[7]', '$data1[8]', '$data1[9]')";

	if ($conn->query($sql) === TRUE) {
	    echo "{}";
		die();
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
	
}

  echo  "{
	   	\"nameErr\":".$nameErr.",
	   	\"mailErr\":".$mailErr.",
	   	\"mobileErr\":".$mobileErr.",
	   	\"sexErr\":".$sexErr.",
	   	\"interestErr\":".$interestErr.",
	   	\"countryErr\":".$countryErr.",
	   	\"stateErr\":".$stateErr.",
	   	\"descriptionErr\":".$descriptionErr.",
	   	\"phnV\":".$phnV.",
	   	\"mailV\":".$mailV."   
	   }";
?>