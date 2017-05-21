//window.alert("Test");

// sticky header

function stickyHeader() {
	if (document.documentElement.scrollTop > 1) {
		document.getElementById("header").className = "stickyHeader";
	}
	else {
		document.getElementById("header").className = "";
	}
}

window.onscroll = function() {stickyHeader()};
