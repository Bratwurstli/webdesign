//window.alert("Test");

// change words

var words = ["Mathematiker", "Stripper", "Pornodarsteller"];
var i = 1;

function changeWord() {
	document.getElementById("words").innerHTML = words[i];
	i += 1;
	if (i > words.length - 1) {i = 0;}
}

window.setInterval(function(){
  changeWord();
}, Math.floor((Math.random() * 2000)) + 2000);
