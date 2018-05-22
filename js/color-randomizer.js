
function assignColors(){
	"use strict";
	var i;
    for (i = 0; i < matchCards.length; i++) {
		
		var randomColor = colors[Math.floor(Math.random() * colors.length)];
		// Create a random color each time the loop runs
		var randomColorPosition = colors.indexOf(randomColor);
		// Get the array position of the random color
		
		matchCards[i].classList.add(randomColor);
		// Count through cards and assign color styles
		
		if(document.getElementsByClassName(randomColor).length > 1){
			colors.splice(randomColorPosition,1);
			colors2.splice(0, 0, randomColor);
			randomColor = colors[Math.floor(Math.random() * colors.length)];
		}
		// Check if there are two of a color. If true, remove the color from the array.
    }
}

window.onload = assignColors();
