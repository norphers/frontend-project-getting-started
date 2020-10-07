const form = document.getElementById('loginFormId');

function loginValidate() {
	
	var errorAccount = 0;

	form.classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.forms["loginForm"]["inputPassword"];

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
	
	if (errorAccount > 0) {
        return false;
	} else {
		return true;
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
