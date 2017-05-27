//window.alert("Test");

// sticky header

window.onscroll = function() {stickyHeader()};
document.onscroll = function() {stickyHeader()};

function stickyHeader() {
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
		document.getElementById("header").className = "stickyHeader";
	}
	else {
		document.getElementById("header").className = "";
	}
}
