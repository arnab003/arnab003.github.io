<!DOCTYPE html>
<html>
	<head>
		<title>BasicCSS</title>
		<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	</head>
<body>
<script src="js/myScript.js"></script>
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
			<p class="p_h1">Subscription Form</p>
			<form method="post" action="" onsubmit="return false;">
			<div class="leftcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td valign="top"><span>Name</span></td>
						<td><input type="text" id="nameID" name="name" class="text"/><span class="Error" id="nameError"></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Email</span></td>
						<td><input type="text" id="emailID" name="email" class="text"/><span class="Error" id="emailError"></span><span class="Error" id="mError"></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Mobile No.(+91)</span></td>
						<td><input type="text" id="mobileID" name="mobile" class="text" onkeypress="return numbercheck(event);" maxlength="10" id="mobile"/>&nbsp&nbsp<span class="Error" id="mobileError"></span><span class="Error" id="phnError"></span></td>
					</tr>					
					<tr>
						<td valign="top"><span>Sex</span></td>
						<td><input type="radio" id="maleID" name="sex" value="Male">&nbsp<span>Male</span>&nbsp&nbsp&nbsp<input type="radio" id="femaleID" name="sex" value="Female">&nbsp<span>Female</span>&nbsp&nbsp<span class="Error" id="sexError"></span></td>
					</tr>
					<tr>
						<td valign="top"><span>Interest</span></td>
						<td>
							<input type="checkbox" id="gameID" name="games" value="Games" id="cb1">&nbsp<span>Games</span>&nbsp
	  						<input type="checkbox" id="movieID" name="movie" value="Movie" id="cb2">&nbsp<span>Movie</span>&nbsp
	  						<input type="checkbox" id="readingID" name="reading" value="Reading" id="cb3">&nbsp<span>Reading</span>
	  						<span id="interestError" class="Error"></span>
  						</td>
					</tr>
				</table>
			</div>
				
			<div class="rightcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td valign="top"><span>Country</span></td>
						<td>
							<select id="countryID" name="country" onchange="stateChange(this);" >
								<option value=""></option>
								
								<option value="India">India</option>
								
								<option value="United States of America">United States of America</option>
								
							</select>
							<span id="countryError" class="Error"></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>States</span></td>
						<td>
							<select id="stateID" name="state" disabled>
							<option value=""></option>
						    </select>
						    <span id="stateError" class="Error"></span>
						</td>
					</tr>
					<tr>
						<td valign="top"><span>Description</span></td>
						<td><textarea id="descriptionID" name="description" spellcheck="true"></textarea><span id="descriptionError" class="Error"></span></td>
					</tr>
				</table>
			</div>
			<input type="reset" value="RESET" class="button" id="reset" onclick="clearSelect();" />
			<input type="submit" value="SUBSCRIBE" class="button" id="submit" onclick="checkInsert();"/>
			</form>
		</div>
		
	</div>

</div>
<div id="overlay">
     <div>
          <p>   	
	        <span>You are Subscribed Successfully!</span>&nbsp&nbsp     
          </p>
          <p><input type="button" onclick="overlay()" value="Ok"></p>
     </div>
</div>
</body>
</html>