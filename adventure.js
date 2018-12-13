var title = document.getElementById('title');
var description = document.getElementById('description');
var bg = document.getElementById('game-container');
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var inventory = document.getElementById('inventoryItem');
var clickAudio = new Audio('snd/click.mp3');
var checkAudio = new Audio('snd/checkmark.mp3');
img = false;
secret = false;
secret2 = false;

title.innerHTML = "VIP Extraction";
description.innerHTML = "Your mission is to extract a VIP out of the Vietnamese jungle. You must succeed without being spotted.";
btn1.innerHTML = "Start";
inventory.style.display = "none";
btn2.style.display = "none";
btn3.style.display = "none";

btn1.onclick = start;


function start(){
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
		clickAudio.play();
	}
	btn2.onclick = function(){
		walkForward();
		clickAudio.play();
	}
	btn3.onclick = function(){
		walkRight();
		clickAudio.play();
	}
}
	

function walkLeft(){
	btn1.innerHTML = "Go around";
	btn2.innerHTML = "Go back";
	btn3.style.display = "none";
	title.innerHTML = "Next up is objective ALPHA.";
	description.innerHTML = "Check to see if the VIP is here somewhere. Get this situation under controle.";
	bg.style.backgroundImage = "url('img/left.jpg')";
	btn1.onclick = function(){
		goAround();
		clickAudio.play();
	}
	btn2.onclick = function(){
		start();
		btn1.style.display = "none";
		clickAudio.play();
	}
}

function goAround(){
	btn1.innerHTML = "Check Building";
	btn2.innerHTML = "Go back";
	btn3.style.display = "none";
	title.innerHTML = "You arrived at objective APLHA.";    
	description.innerHTML = "The VIP might be in the building. Go check it.";
	bg.style.backgroundImage = "url('img/around.jpg')";
	btn1.onclick = function(){
		dead2();
		clickAudio.play();
	}
	btn2.onclick = function(){
		start();
		btn1.style.display = "none";
		clickAudio.play();
	}
}
function dead2(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	inventoryItem.style.display = "none";
	title.innerHTML = "The enemy got intel of an intruder in their ricefields. You failed your mission.";
	description.innerHTML = "Press F5 to start again.";
	bg.style.backgroundImage = "url('img/gameover.jpg')";
	bg.style.border = "none";
}

function walkForward(){
	btn1.style.display = "inline";
	btn3.style.display = "inline";
	btn1.innerHTML = "Go to Town ";
	btn2.innerHTML = "Go to Farm";
	btn3.style.display = "inline";
	btn3.innerHTML = "Go to Resort";
	title.innerHTML = "Location of objective CHARLIE is unknown. Find the objective.";
	description.innerHTML = "You must find the objective and check if the VIP is there. Watch out for enemy movement.";
	bg.style.backgroundImage = "url('img/street.jpg')";
	btn1.onclick = function(){
		town();
		clickAudio.play();
	}
	btn2.onclick = function(){
		farm();
		clickAudio.play();
	}
	btn3.onclick = function(){
		resort();
		clickAudio.play();
	}
}
function farm(){
	btn1.innerHTML = "Go back to Street";
	btn2.style.display = "none";
	btn3.style.display = "none";
	title.innerHTML = "The Farm has been destroyed.";
	description.innerHTML = "The VIP also isn't here but maybe you can find something of big importance.";
	bg.style.backgroundImage = "url('img/farm.jpg')";
	var secret = document.createElement('img');
	secret.src = 'img/secret.png';
	secret.id = 'secret';
	document.getElementById('game-container').appendChild(secret);
	btn1.onclick = function(){
		clickAudio.play();
		if (secret == false) {
				alert('Maybe there is something important.');
			}else{
				walkForward();
				secret.style.display = "none";
				btn2.style.display = "none";
				btn3.style.display = "inline";
			}
		}
		secret.onclick = function(){
			console.log('Top secret')
			secret.style.display = "none";
			secret = true;
			checkAudio.play();
		}
}

function town(){
	btn1.innerHTML = "Go to Woods";
	btn2.style.display = "inline";
	btn2.innerHTML = "Search for VIP";
	btn3.style.display = "none";
	title.innerHTML = "You have found objective CHARLIE"; //***TEKST AANPASSEN***//
	description.innerHTML = "You must check if the VIP is there.";
	bg.style.backgroundImage = "url('img/town.jpg')";
	btn1.onclick = function(){
		clickAudio.play();
		if (img == false) {
			alert('The VIP was seen here.')
		}else{
			woods();
		}
	}
	btn2.onclick = function(){									
		search();
		clickAudio.play();
	}
}

function search(){
	btn1.innerHTML = "Go to Woods";
	btn2.style.display = "none";
	btn3.style.display = "none";
	title.innerHTML = "You have found the VIP";
	description.innerHTML = "Take him with you.";
	bg.style.backgroundImage = "url('img/house.jpg')";
	var img = document.createElement('img');
	img.src = 'img/VIP.png';
	img.id = 'VIP';
	document.getElementById('game-container').appendChild(img);
	btn1.onclick = function(){
		clickAudio.play();
		if (img == true) {
			woods();		
		}else{
			alert('The VIP last known location is here.');
		}
	}
	img.onclick = function(){
		img.style.display = "none";				
		img = true;
		checkAudio.play();
		console.log('VIP');
	}
}

function woods(){
	btn1.innerHTML = "Bridge";
	btn2.style.display = "inline";
	btn2.innerHTML = "Trench";
	inventoryItem.style.display = "none";
	title.innerHTML = "You have found the VIP and now you need to bring him to safety.";
	description.innerHTML = "be very careful.";
	bg.style.backgroundImage = "url('img/forest.jpg')";
	btn1.onclick = function(){
		dead3();
	}
	btn2.onclick = function(){
		win1();
	}
}

function win1(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	inventoryItem.style.display = "none";
	title.innerHTML = "Well done! You have brought the VIP to safety.";
	description.innerHTML = "Press F5 to start again.";
	bg.style.backgroundImage = "url('img/win.jpg')";
	bg.style.border = "none";
}

function dead3(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	inventoryItem.style.display = "none";
	title.innerHTML = "The enemy noticed you with the VIP. They shot you and the VIP immediatly.";
	description.innerHTML = "Press F5 to start again.";
	bg.style.backgroundImage = "url('img/gameover.gif')";
	bg.style.border = "none";
}

function resort(){
	btn1.innerHTML = "Go back ";
	btn2.innerHTML = "Go to Woods";
	btn3.style.display = "none";
	title.innerHTML = "The objective also is not here";
	description.innerHTML = "Turn around.";
	bg.style.backgroundImage = "url('img/resort.jpg')";
	var secret2 = document.createElement('img');
	secret2.src = 'img/secret.png';
	secret2.id = 'secret2';
	document.getElementById('game-container').appendChild(secret2);
	btn1.onclick = function(){
		secret2.style.display = "none";
		clickAudio.play();
		if (secret2 == false) {
			secret2.style.display = "none";
			dead4();
		}else{
			secret2.style.display = "none";
			dead4();
		}
	}
	btn2.onclick = function(){	
		btn1.style.display = "none";								
		woods();
		clickAudio.play();
		if (secret2 == false) {
			secret2.style.display = "none";
			woods();
		}else{
			secret2.style.display = "none";
			woods();
		}
	}
	secret2.onclick = function(){
		secret2.style.display = "none";
		secret2 = true;
		btn1.style.display = "none";
		checkAudio.play();
		console.log('Secret 2');
	}
}

function dead4(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	inventoryItem.style.display = "none";
	title.innerHTML = "The Vietnamese rebels blocked the way and killed you.";
	description.innerHTML = "Press F5 to start again.";
	bg.style.backgroundImage = "url('img/gameover.jpg')";
	bg.style.border = "none";
}

function walkRight(){
	btn1.innerHTML = "Check hut";
	btn2.innerHTML = "Go back";
	btn3.style.display = "none";
	title.innerHTML = "Next up is objective BRAVO.";
	description.innerHTML = "Maybe the VIP is in the hut.";
	bg.style.backgroundImage = "url('img/hut_night.jpg')";
	btn1.onclick = function(){
		dead1();
	}
	btn2.onclick = function(){
		start();
		btn3.style.display = "none";
		clickAudio.play();
	}
}

function dead1(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	inventoryItem.style.display = "none";
	title.innerHTML = "Mission failed, we'll get em' next time.";
	description.innerHTML = "Press F5 to start again.";
	bg.style.backgroundImage = "url('img/gameover.jpg')";
	bg.style.border = "none";
}


