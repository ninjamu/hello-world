<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Adding a Flash Video</title>
<link  href="Untitled-1.css" type="text/css" rel="stylesheet" />
<script src="http://html5shiv.googlecode.com/svn/
trunk/html5.js"></script>
@font-face {
font-family: 'QuicksandBook';
src: url('fonts/Quicksand_Book-webfont.eot');
src: url('fonts/Quicksand_Book-webfont.eot?#iefix') format('embedded-opentype'),
url('fonts/Quicksand_Book-webfont.woff') format('woff'),
url('fonts/Quicksand_Book-webfont.ttf') format('truetype'),
url('fonts/Quicksand_Book-webfont.svg#QuicksandBook') format('svg');
font-weight: normal;
font-style: normal;}
body {
color: #665544;
background-color: #d4d0c6;
background-image: url(image/bg.jpg);
font-family: Georgia, "Times New Roman", serif;
text-align: center;}
.wrapper {
width: 720px;
margin: 0px auto;
background:#CCFFFF;}
.header1 {
margin: 40px 0px 20px 0px;}
.entry {
width: 220px;
float: left;
margin: 10px;
height: 198px;
background-image: url("images/shadow.png");
background-repeat: no-repeat;
background-position: bottom;}
figure {
display: block;
width: 202px;
height: 170px;
background-color: #e7e3d8;
padding: 9px;
text-align: left;}
figure img {
width: 200px;
height: 150px;
border: 1px solid #d6d6d6;}
figcaption {
background-image: url("images/icon.png");
padding-left: 20px;
background-repeat: no-repeat;}
.menu
{margin-top: 20px; color: #000000; float:left; margin-left: 0px; display:block;}
.wrapper { 
width: 940px; 
margin: 120px auto 20px auto; 
border: 2px solid #000000; 
background-color: #FFFFFF} 
header { 
height: 160px; 
background-image: url(images/header.jpg);} 
h1 { 
text-indent: -9999px; 
width: 940px; 
height: 130px; 
margin: 0px;} 
nav, footer { 
clear: both; 
color: #ffffff; 
background-color: #aeaca8; 
height: 30px;} 
nav ul { 
margin: 0px; 
padding: 5px 0px 5px 30px;} 
nav li { 
display: inline; 
margin-right: 40px;} 
nav li a {
color: #ffffff;} 
nav li a:hover, nav li a.current { 
color: #000000;} 
section.courses { 
float: left; 
width: 659px; 
border-right: 1px solid #eeeeee;} 
article { 
clear: both; 
overflow: auto; 
width: 100%;} 
hgroup { 
margin-top:40px;} 
figure { 
float: left; 
width: 290px; 
height: 220px; 
padding: 5px; 
margin: 20px; 
border: 1px solid #eeeeee;} 
figcaption { 
font-size: 90%; 
text-align: left;} 
aside { 
width: 230px; 
float: left; 
padding: 0px 0px 0px 20px;} 
aside section a { 
display: block; 
padding: 10px; 
border-bottom: 1px solid #eeeeee;} 
aside section a:hover { 
color: #985d6a; 
background-color: #efefef;} 
h1, h2, h3 { 
font-weight: normal;} 
h2 {
margin: 10px 0px 5px 0px; 
padding: 0px;} 
h3 { 
margin: 0px 0px 10px 0px; 
color: #de6581;} 
aside h2 { 
padding: 30px 0px 10px 0px; 
color: #de6581;} 
footer { 
font-size: 80%; 
padding: 7px 0px 0px 20px;}
<style>
</style>
</head>
<body>
<img src="image/logo.jpg" alt="Pedal Faster - The modern bicycle magazine" 
width="216" height="96" class="logo" align="left"/><a href="">HOME</a> / <a  href="">GAME ONLINE</a>/ <a href="">GAME OFFLINE</a>/
<a href="">ABOUT</a>/ <a  href="">CONTACT</a>
<div class="wrapper">
<header>
<h1>Yoko's Kitchen</h1>
<nav>
<ul>
<li><a href="" class="current">HOME</a></li>
<li><a href="">GAME ONLINE</a></li>
<li><a href="">GAME OFFLINE</a></li>
<li><a href="">ABOUT</a></li>
<li><a href="">CONTACT</a></li>
</ul>
</nav>
</header>
<section class="courses">
<article>
<figure>
<video poster="C:\Users\an\Desktop\troll\10174917_285875121574748_7505465676559940322_n.jpg"
src="C:\Users\an\Desktop\web\image\321.mp4"
width="290" 
height="220" preload controls autoplay loop>
<figcaption>Bok Choi</figcaption>
</figure>
<hgroup>
<h2>Japanese Vegetarian</h2>
<h3>Five week course in London</h3>
</hgroup>
<p>A five week introduction to traditional Japanese vegetarian meals,
teaching you a selection of rice and noodle dishes.</p>
</article> 
<article>
<figure>
<img src="image/logo.jpg" alt="Teriyaki sauce" />
<figcaption>Teriyaki Sauce</figcaption>
</figure>
<hgroup>
<h2>Sauces Masterclass</h2>
<h3>One day workshop</h3>
</hgroup>
<p>An intensive one-day course looking at how to create the most delicious 
sauces for use in a range of Japanese cookery.</p>
</article> 
</section>
<aside>
<section class="populra-recipes">
<h2>Popular Recipes</h2>
<a href="">Yakitori (grilled chicken)</a>
<a href="">Tsukune (minced chicken patties)</a>
<a href="">Okonomiyaki (savory pancakes)</a>
<a href="">Mizutaki (chicken stew)</a>
</section>
<section class="contact-details">
<h2>Contact</h2>
<p>Yoko's Kitchen<br />
27 Redchurch Street<br />
Shoreditch<br />
London E2 7DP</p>
</section>
</aside>
<div>
<form>
<hgroup>
<h1>Awesome Widgets</h1>
<h2>All the cool kids have got one :)</h2>
</hgroup>
<fieldset id="email">
<legend>Where do we send your receipt?</legend>
<label for="email">Email Address</label>
<input type="email" name="email" placeholder="Email 
Address"/>
</fieldset>
<fieldset id="details">
<legend>Personal Details</legend>
<select name="title" id="field_title">
<option value="" selected="selected">Title</option>
<option value="Mr">Mr</option>
<option value="Mrs">Mrs</option>
<option value="Miss">Miss</option>
</select>
<label for="firstname">First Name</label>
<input name="firstname" placeholder="First Name"/>
<label for="initial">Initial</label>
<input name="initial" placeholder="Initial" size="3"/
>
<label for="surname">Surname</label>
<input name="surname" placeholder="Surname"/>
</fieldset>
<fieldset id="payment">
<legend>Payment Details</legend>
<label for="cardname">Name on card</label>
<input name="cardname" placeholder="Name on card"/>
<label for"cardnumber">Card number</label>
<input name="cardnumber" placeholder="Card number"/>
<select name="cardType" id="field_cardType">
<option value="" selected="selected">Select Card 
Type</option>
<option value="1">Visa</option>
<option value="2">American Express</option>
<option value="3">MasterCard</option>
</select>
<label for="cardExpiryMonth">Expiry Date</l
><select id="field_cardExpiryMonth"
name="cardExpiryMonth">
<option selected="selected" value="mm">MM</
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
</select> /
<select id="field_cardExpiryYear"
name="cardExpiryYear">
<option value="yyyy">YYYY</option>
<option value="2011">11</option>
<option value="2012">12</option>
<option value="2013">13</option>
<option value="2014">14</option>
<option value="2015">15</option>
<option value="2016">16</option>
<option value="2017">17</option>
<option value="2018">18</option>
<option value="2019">19</option>
 </select>
 <label for"securitycode">Security code</label>
 <input name="securitycode" type="number"
placeholder="Security code" size="3"/>
 <p>Would you like Insurance?</p>
 <input type="radio" name="Insurance"
id="insuranceYes"/>
 <label for="insuranceYes">Yes Please!</label>
 <input type="radio" name="Insurance"
id="insuranceNo"/>
 <label for="insuranceNo">No thanks</label>
 </fieldset>
 <fieldset id="submit">
 <button type="submit" name="Submit"disabled>Here I 
come!</button>
 </fieldset>
</form>
</div>
<footer>
&copy; 2011 Yoko's Kitchen
</footer>
</div>
</body>
</html>
