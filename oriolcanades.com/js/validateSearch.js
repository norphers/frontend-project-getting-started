const searchForm = document.getElementById('searchFormId');

function searchValidation() 
{
	searchForm.classList.remove('is-invalid');	
    var inputSearch = document.forms["searchForm"]["inputSearch"];

	if (inputSearch.value == "") 
	{
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "This is a required field";
		return false;
    } 
    else 
    {
		return true;
	}
}

searchForm.addEventListener ('blur', (event) => {
	console.log(event);
	if (event.target.value!='') event.target.classList.remove('is-invalid');
}, true);