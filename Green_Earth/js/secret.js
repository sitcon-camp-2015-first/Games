var secretArea;
var key = 0, index = 1;

function start(){

	document.addEventListener("keydown", done, false);
}

function done(){
	
	if(event.altKey){
		if(event.ctrlKey && !key){
			key = 1;
			secretArea = document.getElementById("secret");
			secretArea.innerHTML = "<img id = 'playTree' width = '50%' height = '50%' src = 'images/-1.jpg'></img>";
		}

		if(event.keyCode == 38 && key){
			var target = index % 7 - 1;
			document.getElementById("playTree").setAttribute("src", "images/" + target + ".jpg");
			index++;
		}
	}
}

window.addEventListener("load", start, false);