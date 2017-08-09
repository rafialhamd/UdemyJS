var todos =["Buy new turtle"];
var input = prompt("Wnat would you like to do")

while(input !== "quit")
{
	if(input === "list"){
		console.log(todos);
	}
	else if(input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}

	input = prompt("What would you like to do?");
}
console.log("OK YOU QUIT THE APP");

//  Hey, are you tired of real doors, cluttering up your house, where you open 'em, and they actually go somewhere? [music starts] And you go in another room?
