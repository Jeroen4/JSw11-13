var title = document.getElementById('title');
var description = document.getElementById('description');
var bg = document.getElementById('game-container');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var inventory = document.getElementById('inventoryItem');
var clickAudio = new Audio('snd/click.mp3');
var audio = new Audio('snd/soundtrack.mp3');

title.innerHTML = "VIP Extraction";
description.innerHTML = "Your mission is to extract a VIP out of the Vietnamese jungle. You must succeed without being spotted.";
btn1.innerHTML = "Start";
inventory.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";

btn1.onclick = function(){
	audio.play();
	audio.loop = true;
	clickAudio.play();
	btn1.innerHTML = "Walk left";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	btn2.innerHTML = "Walk forward";
	btn3.innerHTML = "Walk right";
	title.innerHTML = "You have landed and you must find and extract the VIP.";
	description.innerHTML = "Try to get out of here. The VIP has three possible locations. Infiltrate all 3 objectives and extract the VIP when found. Shoot only if necessary. You are armed with a pistol and 2 magazine's.";
	inventory.style.display = "inline";
	inventory.src = "img/16.png";
	bg.style.backgroundImage = "url('img/start.jpg')";
	btn1.onclick = function(){
		walkLeft();
	}
	btn2.onclick = function(){
		walkForward();
	}
	btn3.onclick = function(){
		walkRight();
	}
}

function walkLeft(){
	btn1.innerHTML = "Go around";
	btn2.innerHTML = "Shoot";
	btn3.innerHTML = "Melee";
	title.innerHTML = "Next up is objective ALPHA.";
	description.innerHTML = "Check to see if the VIP is in the building. Enemy movement up ahead! Get this situation under controle.";
	bg.style.backgroundImage = "url('img/left.jpg')";
	btn1.onclick = function(){
		walkLeft();
	}
	btn2.onclick = function(){
		walkForward();
	}
	btn3.onclick = function(){
		walkRight();
	}
}

function walkForward(){
	btn1.innerHTML = "Go to Town ";
	btn2.innerHTML = "Go to Farm";
	btn3.innerHTML = "Go to Hotel";
	title.innerHTML = "Location of objective CHARLIE is unknown. Find the objective.";
	description.innerHTML = "You must find the objective and check if the VIP is there. Watch out for enemy movement.";
	document.getElementById('game-container').style.backgroundImage = "url('img/start.jpg')";
}

function walkRight(){
	btn1.innerHTML = "Check the bunker";
	btn2.innerHTML = "Go back to the street";
	btn3.innerHTML = "Wait";
	title.innerHTML = "Next up is objective BRAVO.";
	description.innerHTML = "Maybe the VIP is in the bunker.";
	document.getElementById('game-container').style.backgroundImage = "url('img/start.jpg')";
	btn1.onclick = function(){
		dead1();
	}
	btn2.onclick = function(){
		walkForward();
	}
}


function dead1(){
	btn2.style.display = "none";
	btn3.style.display = "none";
	title.innerHTML = "Next up is objective BRAVO.";
	description.innerHTML = "Maybe the VIP is in the bunker.";
	document.getElementById('game-container').style.backgroundImage = "url('img/start.jpg')";
}