
var matchCards = document.getElementsByClassName("match-card");
var selectedCards = document.getElementsByClassName("selected");
var matchFound = document.getElementsByClassName("match-card-found");
var selectedCardValues = [];
var colors = [
	'ff7676',	//Red
	'55a2ff',	//Blue
	'85ce74',	//Green
	'ffe780',	//Yellow
	'cc79d3',	//Purple
	'ffb87d',	//Orange
	'9cdbdb',	//Light Blue
	'ffcaea'	//Pink
];
var colors2 = [];
var guessCounter = 0;

function reloadPage(){
	window.location.reload();
}