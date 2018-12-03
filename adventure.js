var title = document.getElementById('title');
var description = document.getElementById('description');
var bg = document.getElementById('game-container');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var inventory = document.getElementById('inventoryItem');


title.innerHTML = "VIP Extraction";
description.innerHTML = "Your mission is to extract a VIP out of the Vietnamese jungle. You must succeed without being spotted.";
btn1.innerHTML = "Start";
inventory.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";

btn1.onclick = function(){
	btn1.innerHTML = "Walk left";
	btn2.style.display = "inline";
	btn3.style.display = "inline";
	btn2.innerHTML = "Walk forward";
	btn3.innerHTML = "Walk right";
	title.innerHTML = "You have landed and you must find and extract the VIP.";
	description.innerHTML = "Try to get out of here. The VIP has three possible locations. Infiltrate all 3 objectives and extract the VIP when found. Shoot only if necessary. You are armed with a pistol and 2 magazine's.";
	inventory.style.display = "inline";
	inventory.src = "img/16.png";
	document.getElementById('game-container').style.backgroundImage = "url('img/start.jpg')";
	btn1.onclick = function(){
		walkLeft();
	}
}

function walkLeft(){
	btn1.innerHTML = "Walk left";
	btn2.innerHTML = "Walk forward";
	btn3.innerHTML = "Walk right";
	title.innerHTML = "Next up is objective ALPHA.";
	description.innerHTML = "Watch out for Tango's. You do not want them to see you.";
	document.getElementById('game-container').style.backgroundImage = "url('img/start.jpg')";
}