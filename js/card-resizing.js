
function setBoardDimensions(){
	"use strict";
	var w = window.innerWidth, // Get height and width of window
		h = window.innerHeight;
	var widthDriven = Math.floor(w * 0.2),
		heightDriven = Math.floor(h * 0.2);
	var setCardSize = document.getElementsByClassName("match-card"),
		setMatchedCardSize = document.getElementsByClassName("match-card-found"),
		setColumnWidth = document.getElementsByClassName("card-column");
	var i;

	if(h > w){
		for (i = 0; i < setCardSize.length; i++) {
			setCardSize[i].style.height = widthDriven + "px";
			setCardSize[i].style.width = widthDriven + "px";
		}
		for (i = 0; i < setMatchedCardSize.length; i++) {
			setMatchedCardSize[i].style.height = widthDriven + "px";
			setMatchedCardSize[i].style.width = widthDriven + "px";
		}
		for (i = 0; i < setColumnWidth.length; i++) {
			setColumnWidth[i].style.width = (widthDriven+10) + "px";
		}
	}else if(w > h){
		for (i = 0; i < setCardSize.length; i++) {
			setCardSize[i].style.height = heightDriven + "px";
			setCardSize[i].style.width = heightDriven + "px";
		}
		for (i = 0; i < setMatchedCardSize.length; i++) {
			setMatchedCardSize[i].style.height = heightDriven + "px";
			setMatchedCardSize[i].style.width = heightDriven + "px";
		}
		for (i = 0; i < setColumnWidth.length; i++) {
			setColumnWidth[i].style.width = (heightDriven+10) + "px";
		}
	}else{
		for (i = 0; i < setCardSize.length; i++) {
			setCardSize[i].style.height = heightDriven + "px";
			setCardSize[i].style.width = heightDriven + "px";
		}
		for (i = 0; i < setMatchedCardSize.length; i++) {
			setMatchedCardSize[i].style.height = heightDriven + "px";
			setMatchedCardSize[i].style.width = heightDriven + "px";
		}
		for (i = 0; i < setColumnWidth.length; i++) {
			setColumnWidth[i].style.width = (heightDriven+10) + "px";
		}
	}
}
window.onload = setBoardDimensions();
window.addEventListener("resize", setBoardDimensions);
window.onload = document.getElementById('game-wrapper').style.transform = 'scale(1)';
window.onload = document.getElementById('game-wrapper').style.visibility = 'visible';
window.onload = document.getElementById('game-wrapper').style.opacity = 1;
