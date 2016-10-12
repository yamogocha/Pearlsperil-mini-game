/********* GAMEPLAY SPECIFIC JAVASCRIPT **********/
//This function resets the entire game and includes everything that needs to be reset, including updating the numbers. This will be different for each game
var restartGame = function() {
	document.getElementById("outro-container").style.display = 'none'
	document.getElementById("gitem").style.display = 'block'
	document.getElementById("gitem").className = ''
	document.getElementById("gglow").style.opacity = '0'
	document.getElementById("gbox").style.display = 'block'
	document.getElementById("gbox").className = 'box'
	document.getElementById("witem").style.display = 'block'
	document.getElementById("witem").className = ''
	document.getElementById("wglow").style.opacity = '0'
	document.getElementById("wbox").style.display = 'block'
	document.getElementById("wbox").className = 'box'
	document.getElementById("pitem").style.display = 'block'
	document.getElementById("pitem").className = ''
	document.getElementById("pglow").style.opacity = '0'
	document.getElementById("pbox").style.display = 'block'
	document.getElementById("pbox").className = 'box'
	document.getElementById("arrow").style.display = 'block'
	document.getElementById("arrow").className = 'arrow'
	document.getElementById("arrow").className += ' arrowg'
	play=0
	clickedGloves=false
	clickedWStick=false
	clickedPhone=false
}
// CALL THIS WHEN THE USER FINISHES PLAYING YOUR BUILD
// this sends the user to the end of the game if the retry is clicked and the dl is not clicked
var finishGameplay = function() {
	if (typeof gotoEndScreen != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		gotoEndScreen();
		//report that the user has finished the game
		if (typeof mn != 'undefined'){mn("play","100%");}
	}
	else {
		displayInstallScreen();
	}
}
// this sends the user to the beginning of the game if the retry is clicked and the dl is not clicked
var clickRetry = function() {
	if (typeof startTestDrive != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		startTestDrive();
	}
	else {
		restartGame();
	}
}
// this sends the user to the itunes page where they can download the game. It also is compatable with our UI
var clickDownload = function() {
	if (typeof mnUserClickDownload != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		mnUserClickDownload();
	}
	else {
		window.location.href = 'https://itunes.apple.com/us/app/pearls-peril/id594802437?mt=8';
	}
}
/********** GAMEPLAY SPECIFIC JAVASCRIPT **********/


/********** EXAMPLE JAVASCRIPT **********/

/* this code is example code filled with hopefully useful bits of javascript you can reference */
/* please feel free to adjust the and add to these code snippets to make future project easier */
/* DELETE THIS CODE WHEN YOU ARE DONE WITH YOUR PROJECT */
   
var clickedGloves=false
var clickedWStick=false
var clickedPhone=false

var clickGloves=function(){
	document.getElementById("gitem").className = 'glovesmove'
	document.getElementById("gglow").style.opacity = '1'
	setTimeout(function(){
		document.getElementById("gitem").style.display = 'none'
		document.getElementById("gbox").className += ' hide'
	}, 900)
	setTimeout(function(){
		document.getElementById("gbox").style.display = 'none'
		document.getElementById("arrow").className += ' arroww'
	}, 1100)
	clickedGloves=true
	clickedOb()
	clickPlay()
}

var clickWStick=function(){
	document.getElementById("witem").className = 'wstickmove'
	document.getElementById("wglow").style.opacity = '1'
	setTimeout(function(){
		document.getElementById("witem").style.display = 'none'
		document.getElementById("wbox").className += ' hide'
	}, 900)
	setTimeout(function(){
		document.getElementById("wbox").style.display = 'none'
		document.getElementById("arrow").className += ' arrowp'
	}, 1100)
	clickedWStick=true
	clickedOb()
	clickPlay()
}


var clickPhone=function(){
	document.getElementById("pitem").className = 'phonemove'
	document.getElementById("pglow").style.opacity = '1'
	setTimeout(function(){
		document.getElementById("pitem").style.display = 'none'
		document.getElementById("pbox").className += ' hide'
	}, 1200)
	setTimeout(function(){
		document.getElementById("pbox").style.display = 'none'
		document.getElementById("arrow").style.display = 'none'
	}, 1400)
	clickedPhone=true
	clickedOb()
	clickPlay()
}

var clickedOb=function(){
	if(clickedGloves&&clickedWStick&&clickedPhone){
		setTimeout(function(){
		 	finishGameplay();
		}, 2500)
	}
}

var play=0
var clickPlay=function(){
	play++
		
	if (play=== 1){
		console.log("25%")
		if (typeof mn != 'undefined'){mn("play","25%");}
	}

	if (play === 2){
		console.log("50%")
		if (typeof mn != 'undefined'){mn("play","50%");}
	}
	
	if (play === 3){
		console.log("75%")
		if (typeof mn != 'undefined'){mn("play","75%");}
	}
}

/* this code is example code filled with hopefully useful bits of javascript you can reference */
/* please feel free to adjust the and add to these code snippets to make future project easier */
/* DELETE THIS CODE WHEN YOU ARE DONE WITH YOUR PROJECT */

/********** EXAMPLE JAVASCRIPT *********/