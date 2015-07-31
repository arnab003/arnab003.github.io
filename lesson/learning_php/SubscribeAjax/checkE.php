<?php

$mailV="false";
$phnV="false";

if (!empty($_GET["mail"])) 
	{
		if (!filter_var($_GET["mail"], FILTER_VALIDATE_EMAIL) === false) {
	  //echo("$email is a valid email address");
	  $mailV="true";
	} 
}

  
function phoneNumbervalidation($mobile)
{
 if(preg_match('/^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1})?([0-9]{10})$/', $mobile,$matches)){
 return "true";
 }
 else
 return "false";
}

if (!empty($_GET["mobile"])) 
	{
		$phnV=phoneNumbervalidation($_GET["mobile"]);
	}

$sexErr="true";
$interestErr="true";

if(!isset($_GET["name"])||empty($_GET["name"]))
{
	$nameErr="false";
}
else
{
	$nameErr="true";
}

if(empty($_GET["mail"]))
{
	$mailErr="false";
}
else
{
	$mailErr="true";
}

if(empty($_GET["mobile"]))
{
	$mobileErr="false";
}
else
{
	$mobileErr="true";
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
else
{
	$countryErr="true";
}

if(empty($_GET["state"]))
{
	$stateErr="false";
}
else
{
	$stateErr="true";
}

if(empty($_GET["description"]))
{
	$descriptionErr="false";
}
else
{
	$descriptionErr="true";
}

if($nameErr=="true" && $mailErr=="true" && $mobileErr=="true" && $sexErr=="true" && $interestErr=="true" && $countryErr=="true" && $stateErr=="true" && $descriptionErr=="true" && $phnV=="true" && $mailV=="true")
{
	if($_GET["male"]=="true")
		$sexValue=$_GET["maleValue"];
	else if($_GET["female"]=="true")
		$sexValue=$_GET["femaleValue"];

	if($_GET["game"]=="true")
		$gameValue=$_GET["gameValue"];
	else
		$gameValue="null";

	if($_GET["movie"]=="true")
		$movieValue=$_GET["movieValue"];
	else
		$movieValue="null";

	if($_GET["reading"]=="true")
		$readingValue=$_GET["readingValue"];
	else
		$readingValue="null";


	$data=$_GET["name"].",".$_GET["mail"].",".$_GET["mobile"].",".$sexValue.",".$gameValue.",".$movieValue.",".$readingValue.",".$_GET["country"].",".$_GET["state"].",".$_GET["description"]."\n";
	
	if(file_get_contents("DataRecords.csv"))
	{
		$fp = fopen("DataRecords.csv","a"); 
		if($fp)
		{
		fwrite($fp,$data); 
		fclose($fp); 
		}
	}
	else
	{
		$head="Name,Email,Mobile,Sex,Interest1,Interest2,Interest3,Country,State,Description\n";
		$fp = fopen("DataRecords.csv","a"); 
		if($fp)
		{
		fwrite($fp,$head); 
		fwrite($fp,$data);
		fclose($fp); 
		}
	}

	echo "{}";
	die();
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