//@ts-check

const button = document.getElementById("guessing-game");

console.log(button);

button?.addEventListener("click", function () {
	// console.log("Clicked!");
	let answer = 7;

	let guess = Number(prompt("Pick a number between 1 and 10"));

	if (answer == guess) {
		alert("You won!");
	}

	console.log(guess);
});
