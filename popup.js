
var setBadgeTextMy = function(text){
	chrome.browserAction.setBadgeText({text:text});
}

$(function(){

	var clicked = true;
	$('#switchButton').click(
		function(){
			if (clicked){
				setBadgeTextMy("yeah");
				clicked = false;
			} else {
				setBadgeTextMy("");
				clicked = true;
			}
	});
	
});