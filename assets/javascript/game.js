$(document).ready(function() {

var bolLoaded = false;

setTimeout(function(){
	$("#loading").css("display", "block");
	$("#bgAudio").get(0).play();
}, 1000);

setTimeout(function(){
	$("#loading").css("display", "none");
	$("#enter").css("display", "block");
	bolLoaded = true;
	console.log(bolLoaded);
}, 3500);

document.onkeyup = function keylog(event) {
	if (event.keyCode === 13) {
		$("#enter").css("display", "none");
		$("#playerSelection").css("display", "flex");
	}

}





});