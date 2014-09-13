document.getElementById("date").innerHTML = Date();
function myfunction() {
	var firt = document.forms["gform"]["firt-input"].value;
	if (firt="") {
		alert("Firt name not null");
		return false;
	};
	var last = document.forms["gform"]["last-input"].value;
	if (last="") {
		alert("last name not null");
		return false;
	};
	var email = document.forms["gform"]["email-input"].value;
	var acong=email.indexOf("@");
	var daucham=email.lastIndexOf(".");
	if (email="") {
		alert("Email not null");
		return false;
	}
	else if ((acong<1) || (daucham<acong+2) || (daucham+2>email.length)) {
		alert("Email Not validate");
		return false;
	};
}