var list= ["what are you doing"];

var input= prompt("what would you like to do");

while(input !== "quit"){

	if(input === "new"){
		var newInput = prompt("what is your new list item");
		list.push(newInput);
	}

	else if(input === "delete"){
		list.pop();
	}

	else if(input === "list"){
		// console.log(list);
		list.forEach(function(list){

			console.log(list);
		});
	}


var input= prompt("what would you like to do");


}
