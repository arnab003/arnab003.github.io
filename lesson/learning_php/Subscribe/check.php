<?php
session_start();

$arr1=array("name"=>$_GET["name"], "email"=>$_GET["email"], "mobile"=>$_GET["mobile"], "sex"=>$_GET["sex"], "interest"=>$_GET["interest"], "country"=>$_GET["country"], "description"=>$_GET["description"]);

$_SESSION['submitted_data'] = json_encode($arr1);

$arr3=[];

$mail=false;
$phn=false;

if (!filter_var($arr1['email'], FILTER_VALIDATE_EMAIL)) {
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
  
$phn=phoneNumbervalidation($arr1['mobile']);

$arr2=[];

foreach($arr1 as $x => $x_value) {
    if($x_value==null)
    {
    	array_push($arr2,$x);
    }
    else
    {
    	array_push($arr3,$arr3["$x"]=$x_value);
    }
}

if($mail==true)
{
	array_push($arr2,"email");
}
if($phn==false)
{
	array_push($arr2,"mobile");
}

if(count($arr2)==0)
{
	$fp = fopen("formdata.csv","a"); 
	if($fp)
	{
		fwrite($fp,json_encode($arr3)); 
        fclose($fp); 
	}
	$_SESSION['success']="Success!";
}
else
{
	$_SESSION['error']=json_encode($arr2);
	print_r($_SESSION['error']);
}

foreach ($arr1 as $value) {
	echo $value;
}

header('Location: ' . $_SERVER['HTTP_REFERER']);
?>