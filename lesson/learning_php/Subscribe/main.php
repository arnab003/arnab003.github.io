<?php
if(isset($_SESSION['error'])) 
{
?>
<script type="text/javascript">
  clk('t2');
 var data=<?=$_SESSION["submitted_data"] ?>;
 document.getElementById("name").value=data.name;
 document.getElementById("email").value=data.email;
 document.getElementById("mobile").value=data.mobile;
 document.getElementById("country").value=data.country;
 document.getElementById("description").value=data.description;
 if(data.sex=="Male")
 	document.getElementById("Male").checked=data.sex;
 else if(data.sex=="Female")
 	document.getElementById("Female").checked=data.sex;
</script>
<?php
}
if(isset($_SESSION['success']))
{
	echo "Success!";
	session_destroy();
}
?>