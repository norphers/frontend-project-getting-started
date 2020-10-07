const form = document.getElementById('registerFormId');

function registerValidation() {
	
	var errorAccount = 0;

	form.classList.remove('is-invalid');
	
    var inputFirstName = document.forms["registerForm"]["inputFirstName"];
    var inputLastName = document.forms["registerForm"]["inputLastName"];
	var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.forms["registerForm"]["inputPassword"];
    var inputAddress = document.forms["registerForm"]["inputAddress"];
	var inputProvince = document.forms["registerForm"]["inputProvince"];
	var inputCity = document.forms["registerForm"]["inputCity"];
	var inputZip = document.forms["registerForm"]["inputZip"];
	var gridCheck = document.forms["registerForm"]["gridCheck"];

	if (inputFirstName.value == "") 
	{
		inputFirstName.classList.add("is-invalid");
		document.getElementById("errorFirstName").textContent = "First name is a required field";
		errorAccount ++;
	}

	if (inputLastName.value == "") 
	{
		inputLastName.classList.add("is-invalid");
		document.getElementById("errorLastName").textContent = "Last name is a required field";
		errorAccount ++;
	}

	if (inputEmail.value == "") 
	{
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email is a required field";
        errorAccount ++;
	} 
	else if (!validate_email(inputEmail.value))
	{
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Email format error";
		errorAccount ++;
	}

	if (inputPassword.value == "") 
	{
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Password is a required field";
		errorAccount ++;
	}
	
	if (inputAddress.value == "") 
	{
		inputAddress.classList.add("is-invalid");
		document.getElementById("errorAddress").textContent = "Address is a required field";
		errorAccount ++;
	}

	if (inputProvince.value == "") 
	{
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Province is a required field";
		errorAccount ++;
	}
	
	if (inputCity.value == "") 
	{
		inputCity.classList.add("is-invalid");
		document.getElementById("errorCity").textContent = "City is a required field";
		errorAccount ++;
	}
	
	if (inputZip.value == "" || inputZip.length!=5) 
	{
		inputZip.classList.add("is-invalid");
		document.getElementById("errorZip").textContent = "Zip code is a required field and must have 5 numbers";
		errorAccount ++;
	}
	
	if (!gridCheck.checked) 
	{
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Accept Privacy Policy";
		errorAccount ++;
	}
	
	if (errorAccount > 0) {
        return false;
	} else {
		return false;
	}
}

form.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validate_email(email) 
{
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
