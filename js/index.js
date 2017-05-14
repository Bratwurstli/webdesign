// impressum

// first impressum is hidden
var impHide = 1;

function impressum() {
	if (impHide == 1) {
		document.getElementById("impressum").style.display = "block";
		impHide = 0;
	}
	else if (impHide == 0) {
		document.getElementById("impressum").style.display = "none";
		impHide = 1;
	}
}
