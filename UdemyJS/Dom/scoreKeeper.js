// p1 and p2 button and the scores shown
var p1button = document.querySelector("#p1button");
var p2button = document.querySelector("#p2button");
var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");

// change the input
var numInput = document.querySelector("#memes");


// score intialization
p1scoreCount = 0;
p2scoreCount = 0;

// score max and gameover
gameover = false;


p1button.addEventListener("click", function(){

	p1scoreCount++;
	
	if(gameover === false){

		if(p1scoreCount < numInput.value){
			p1score.textContent = p1scoreCount;
		}
		else{  //gameover
			p1score.textContent = p1scoreCount;
			p1score.classList.add("green");
			gameover = true
		}


	}
	

});

p2button.addEventListener("click", function(){

	p2scoreCount++;
	
	if(gameover === false){

		if(p2scoreCount < numInput.value){
			p2score.textContent = p2scoreCount;
		}
		else{  //gameover
			p2score.textContent = p2scoreCount;
			p2score.classList.add("green");
			gameover = true
		}


	}
	

});



numInput.addEventListener("change", function(){

	finalScore.textContent = numInput.value;

});