
function revealColor(){
	"use strict";
	var clickedCard = event.target;
	var j;
	for(j = 0; j < colors2.length; j++){
		var colorLoop = colors2[j];
		if(clickedCard.classList.contains(colorLoop) === true){
			clickedCard.style.backgroundColor = "#" + colorLoop;
			// Take the color from the class and apply it to the background color
			selectedCardValues.splice(0, 0, colorLoop);
			// Add that color value to an array for pair checking later
		}
	}
	
	clickedCard.classList.add('selected');
	// Add selected class for any styling
			
	if(selectedCards.length > 1){
		freezeClicks();
		checkForPair();
	}
	
	if(matchFound.length > 15){
		gameComplete();
	}
}

function checkForPair(){
	"use strict";
	
	guessCounter = guessCounter + 1;
	// uptick guess counter
	
	if(selectedCardValues[0] == selectedCardValues[1]){
		var l;
		for(l = 0; l < selectedCards.length; l++) {
			console.log(selectedCards);
			selectedCards[l].classList.add('match-card-found');
			selectedCards[l].classList.remove('match-card');
		}
		var m;
		for (m = 0; m < matchFound.length; m++) {
			matchFound[m].classList.remove('selected');
		}
		var n;
		for (n = 0; n < matchCards.length; n++) {
			matchCards[n].style.pointerEvents = 'auto';
		}
	} else {
		setTimeout(resetBoard,1000);
	}
}

function freezeClicks(){
	"use strict";
	var k;
	for (k = 0; k < matchCards.length; k++) {
		matchCards[k].style.pointerEvents = 'none';
	}
}

function resetBoard(){
	"use strict";
	var i;
	for (i = 0; i < matchCards.length; i++) {
		matchCards[i].style.backgroundColor = '#cccccc';
		matchCards[i].style.pointerEvents = 'auto';
		matchCards[i].classList.remove('selected');
	}
}

function gameComplete(){
	document.getElementById("guess-counter").innerHTML = guessCounter;
	document.getElementById("game-complete").style.visibility = 'visible';
	document.getElementById("game-complete").style.opacity = 1;
}