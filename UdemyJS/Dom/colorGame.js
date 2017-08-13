var colors = ["rgb(255, 0, 0)",
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
// randomize color selection
randomizer = RandColor(colors);


var squares = document.querySelectorAll(".square");
var goalColor = colors[randomizer];
var successIndicator = document.querySelector("#success");

successIndicator.addEventListener("click",function(){
	alert("what is this?");
});


for(var i=0; i < squares.length; i++){
	// set color
	squares[i].style.backgroundColor = colors[i];
	// add event listener
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		// compare clicked color to goalColor

		if(clickedColor === goalColor){
			successIndicator.textContent = "WON!";
			// set background of h1 to match the right color and all the other squares
			h1.style.background = goalColor;
			changeColors(goalColor);

		} else { 
			//color squares match background and DISSAPEAR
			this.style.backgroundColor = "#232323"
			// Try Again
			successIndicator.textContent = "Try Again!"
		}
	});
}


function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function RandColor(squares){
	var randomizer = Math.floor(Math.random() * colors.length);
	return(randomizer);
}


function StartColor(){

var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);
var RGB = "rgb(" + red + ", " + green + ", " + blue + ")";
	return(RGB);
}