/*
/*
To Do: Grab the values from the input boxes in the div labeled "one" which is labeled as "JavaScript Functions" on the webpage,
store them in an array in the JavaScript code titled script.js, and out put them into the div labeled "two" which is labeled as
"JavaScript Results" on the webpage
*/
let allUserInfo = []; // holds all array info

function displayInfo() {
    
	// Grabs all inputs with name="userID"
    
	let inputs = document.getElementsByName("userInfo");

    // Turn the NodeList into array of values
    
	let infoArray = [];
    
	for (let i = 0; i < inputs.length; i++) {
    
		// Checks for null entries.
		if (inputs[i].value === "")
		{
			alert("Before submitting, fill out the form completely!");
			return;
		}
		
		infoArray.push(inputs[i].value);
    
	}
	// adds entry to the beginning 
	allUserInfo.unshift(infoArray);
	
	// Only allows array to keep 5 newest entries.
	if (allUserInfo.length > 5) 
	{
		
        allUserInfo = allUserInfo.slice(0, 5);
    }

    // Output format
	
    let output = "";
	
	for (let i = 0; i < allUserInfo.length; i++) 
	{   
        output += `
        <div class="submission-card">
		<p><strong>Name:</strong> ${allUserInfo[i][0]}</p>
        <p><strong>Major:</strong> ${allUserInfo[i][1]}</p>
        <p><strong>Favorite Course:</strong> ${allUserInfo[i][2]}</p>
        <p><strong>Graduation Date:</strong> ${allUserInfo[i][3]}</p>
		</div>
		`;
	}

    // Display 
	
	document.getElementById("two").innerHTML = output;
}