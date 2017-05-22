//window.alert("Test");

// change words

var words = ["Mathematics", "Web Design", "Teaching"];
var i = 0;
var myArray = words[i].split("");

function deleteWord(word) {

	if (word.length > 0) {
		word = word.substring(0,word.length-1);
		document.getElementById("words").innerHTML = word;
		setTimeout(function(){deleteWord(word);}, Math.random()*50+50);
	}
}

function writeWord() {
	if(myArray.length > 0) {
		document.getElementById("words").innerHTML += myArray.shift();
		setTimeout(function(){writeWord();}, Math.random()*50+50);
	}
}

function changeWord() {

	var word = words[i];
	deleteWord(word);
	i += 1;
	if (i > words.length-1) {i = 0}
	myArray = words[i].split("");	
	setTimeout(function(){writeWord();}, 1500);
}

setTimeout(function(){writeWord();}, 1500);
window.setInterval(function(){changeWord();}, 6000);
