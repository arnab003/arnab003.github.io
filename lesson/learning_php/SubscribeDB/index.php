<!DOCTYPE html>
<html>
	<head>
		<title>BasicCSS</title>
		<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
		<script src="js/myScript.js"></script>
	</head>
<body>
<?php
session_start();
?>

<div class="tabs">

	<div class="tab1" id="t1">
		<h2 id="t1h2" onclick="clk('t1');"><a href="#" ><span id="tabb1">News</span></a></h2>

		<div class="con1">
			<p class="p_h1">Welcome </p>

			<p class="p_h2"> 
			Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library.Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library. simple and effective.
			</p>		

			<p class="p_h3">
			AngularJS bindings for FusionCharts JavaScript Chariting Library.
			</p>
		</div> 

		<div class="con2"><p class="head">Latest News</p>
			<div class="image"><img src="image.jpg" alt="Image Preview"></div>
		</div>

		<a href="#"><div class="learn">LEARN MORE</div></a>

	</div>
	
	<div class="tab2" id="t2">
		<h2 id="t2h2" onclick="clk('t2');"><a href="#"><span id="tabb2">Subscribe</span></a></h2>
		<div class="wrap">
			<p class="p_h1">Subscription Form <?php if(isset($_SESSION['flagSuc']) && $_SESSION['flagSuc']) echo "=Success!"; ?></p>
			<form method="post" action="check.php">
			<div class="leftcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td valign="top"><span>Name</span></td>
						<td><input type="text" name="name" class="text" value="<?php if(isset($_SESSION['flagBind']) && isset($_SESSION["name"]) && $_SESSION['flagBind'])echo $_SESSION["name"];?>" /><span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["name"]) && $_SESSION['flagBind'])echo "*Required!";?></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Email</span></td>
						<td><input type="text" name="email" class="text" value="<?php if(isset($_SESSION["email"]) && $_SESSION['flagBind'])echo $_SESSION["email"];?>"/><span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["email"]) && $_SESSION['flagBind'])echo "*Required!"; else if (isset($_SESSION['flagEmail']) && $_SESSION['flagEmail']==false) echo "*Wrong Email format!";?></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Mobile No.(+91)</span></td>
						<td><input type="text" name="mobile" class="text" onkeypress="return numbercheck(event);" maxlength="10" id="mobile" value="<?php if(isset($_SESSION['flagBind']) && isset($_SESSION["mobile"]) && $_SESSION['flagBind'])echo $_SESSION["mobile"];?>"/>&nbsp&nbsp<span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["mobile"]) && $_SESSION['flagBind'])echo "*Required!"; else if(isset($_SESSION['flagMob']) && $_SESSION['flagMob']==false) echo "*Wrong Mobile Number format!";?></span></td>
					</tr>					
					<tr>
						<td valign="top"><span>Sex</span></td>
						<td><input type="radio" name="sex" value="Male" <?php if(isset($_SESSION['flagBind']) && isset($_SESSION["sex"]) && $_SESSION['flagBind'] && $_SESSION["sex"]=="Male")echo "checked";?>>&nbsp<span>Male</span>&nbsp&nbsp&nbsp<input type="radio" name="sex" value="Female" <?php if(isset($_SESSION['flagBind']) && isset($_SESSION["sex"]) && $_SESSION['flagBind'] && $_SESSION["sex"]=="Female")echo "checked";?>>&nbsp<span>Female</span>&nbsp&nbsp<span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["sex"]) && $_SESSION['flagBind'])echo "*Required!";?></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Interest</span></td>
						<td>
							<input type="checkbox" name="games" value="Games" id="cb1" <?php if(isset($_SESSION['interest1']) && !$_SESSION['interest1']==null && isset($_SESSION['flagBind']) && $_SESSION['flagBind']) echo "checked"; ?>>&nbsp<span>Games</span>&nbsp
	  						<input type="checkbox" name="movie" value="Movie" id="cb2" <?php if(isset($_SESSION['interest2']) && !$_SESSION['interest2']==null && isset($_SESSION['flagBind']) && $_SESSION['flagBind']) echo "checked"; ?>>&nbsp<span>Movie</span>&nbsp
	  						<input type="checkbox" name="reading" value="Reading" id="cb3" <?php if(isset($_SESSION['interest3']) && !$_SESSION['interest3']==null && isset($_SESSION['flagBind']) && $_SESSION['flagBind']) echo "checked"; ?>>&nbsp<span>Reading</span>
  						</td>
					</tr>
				</table>
			</div>
				
			<div class="rightcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td valign="top"><span>Country</span></td>
						<td>
							<select id="country" name="country" onchange="stateChange(this);" >
								<option value="<?php if(isset($_SESSION["country"]) && $_SESSION['flagBind'])echo $_SESSION["country"];?>"><?php if(isset($_SESSION["country"]) && $_SESSION['flagBind'])echo $_SESSION["country"];?></option>
								
								<option value="India">India</option>
								
								<option value="United States of America">United States of America</option>
								
							</select>
							<span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["country"]) && $_SESSION['flagBind'])echo "*Required!";?></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>States</span></td>
						<td>
							<select id="state" name="state">
							<option value="<?php if(isset($_SESSION["state"]) && $_SESSION['flagBind']) echo $_SESSION["state"];?>"><?php if(isset($_SESSION["state"]) && $_SESSION['flagBind'])echo $_SESSION["state"];?></option>
						    <script type="text/javascript">
						    	checkCon(document.getElementById("country"));
						    </script>
						    </select>
						    <span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["state"]) && $_SESSION['flagBind'])echo "*Required!";?></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>Description</span></td>
						<td><textarea name="description" spellcheck="true"><?php if(isset($_SESSION['flagBind']) && isset($_SESSION["description"]) && $_SESSION['flagBind'])echo $_SESSION["description"];?></textarea><span class="Error"><?php if(isset($_SESSION['flagBind']) && empty($_SESSION["description"]) && $_SESSION['flagBind'])echo "*Required!";?></span></td>
					</tr>
				</table>
			</div>
			<input type="reset" value="RESET" class="button" id="reset" onclick="clearSelect();" />
			<input type="submit" value="SUBSCRIBE" class="button" id="submit" onclick="display();"/>
			</form>
		</div>
		
	</div>

</div>
<?php 
if(isset($_SESSION['flagBind']) && isset($_SESSION['flagSuc']))
{
if($_SESSION['flagBind'] || $_SESSION['flagSuc']){
?>
<script type="text/javascript">clk("t2");</script>
<?php
}
}
?>

<div id="overlay">
     <div>
          <p id="cb1_sub"> 
          	Games Type:<br/><br/>               	
	        <input type="checkbox" name="games[]" id="cb1_sub_1" value="Indoor"/><span>Indoor</span>&nbsp&nbsp      
	        <input type="checkbox" name="games[]" id="cb1_sub_2" value="Outdoor"/><span>Outdoor</span> &nbsp&nbsp        
          </p>

          <p id="cb2_sub">  
          	Movie Type:<br/><br/>     
	        <input type="checkbox" name="movie[]" id="cb2_sub_1" value="Horror"/><span>Horror</span>&nbsp&nbsp	
	        <input type="checkbox" name="movie[]" id="cb2_sub_2" value="Comedy"/><span>Comedy</span>&nbsp&nbsp	
	        <input type="checkbox" name="movie[]" id="cb2_sub_3" value="Drama"/><span>Drama</span>&nbsp&nbsp	
          </p>

           <p id="cb3_sub">
           	Reading Type:<br/><br/>
	        <input type="checkbox" name="readings[]" id="cb3_sub_1" value="Novel"/><span>Novel</span>&nbsp&nbsp	
	        <input type="checkbox" name="readings[]" id="cb3_sub_2" value="Fiction"/><span>Fiction</span> &nbsp&nbsp	
	        <input type="checkbox" name="readings[]" id="cb3_sub_3" value="Biography"/><span>Biography</span>&nbsp&nbsp
          </p>
          <p><input type="button" onclick="overlay()" value="Ok"></p>
     </div>
</div>
<?php
$_SESSION['flagBind']=false;
$_SESSION['flagMob']=true;
$_SESSION['flagEmail']=true;
$_SESSION['flagSuc']=false;
?>
</body>
</html>