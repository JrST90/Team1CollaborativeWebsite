/*
To Do: Grab the values from the input boxes in the div labeled "one" which is labeled as "JavaScript Functions" on the webpage,
store them in an array in the JavaScript code titled script.js, and out put them into the div labeled "two" which is labeled as
"JavaScript Results" on the webpage
*/

function displayInfo() {
    
	// Grabs all inputs with name="userID"
    
	let inputs = document.getElementsByName("userInfo");

    // Turn the NodeList into array of values
    
	let infoArray = [];
    
	for (let i = 0; i < inputs.length; i++) {
    
		infoArray.push(inputs[i].value);
    
	}

    // Output format
	
    let output = `
        
		<p><strong>Name:</strong> ${infoArray[0]}</p>
        <p><strong>Major:</strong> ${infoArray[1]}</p>
        <p><strong>Favorite Course:</strong> ${infoArray[2]}</p>
        <p><strong>Graduation Date:</strong> ${infoArray[3]}</p>`;

    // Display 
	
    document.getElementById("two").innerHTML = output;
}