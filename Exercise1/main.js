function load()
{
	document.getElementById("field_main").addEventListener("change", compare); // active comparison, even before the button is pressed
	document.getElementById("field_verify").addEventListener("change", compare);
}

function compare()
{
	return(document.getElementById("field_main").value == document.getElementById("field_verify").value);
}

function validate()
{
	// if the length is more than 8 characters and the passwords match
	if(compare() && document.getElementById("field_main").value.length > 7) 
	{
		document.getElementById("feedback").innerHTML = "Success!";
	}

	
	else
	{
		// if the length is less than 8 characters and do not match
		if(!compare() && document.getElementById("field_main").value.length < 8)
		{
			document.getElementById("feedback").innerHTML = "The passwords do not match, nor are they at least 8 characters long.";
		}

		// if the length is less than 8 characters
		else if(document.getElementById("field_main").value.length < 8)
		{
			document.getElementById("feedback").innerHTML = "The password is not at least 8 characters long";
		}

		// if the passwords match but are less than 8 characters
		else
		{
			document.getElementById("feedback").innerHTML = "The passwords do not match.";
		}

		document.getElementById("field_main").value = "";
		document.getElementById("field_verify").value = "";
	}
	
}