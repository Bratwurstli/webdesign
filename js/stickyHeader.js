//window.alert("Test");

// sticky header

window.onscroll = function() {stickyHeader()};

function stickyHeader() {
	if (document.documentElement.scrollTop > 1) {
		document.getElementById("header").className = "stickyHeader";
	}
	else {
		document.getElementById("header").className = "";
	}
}
