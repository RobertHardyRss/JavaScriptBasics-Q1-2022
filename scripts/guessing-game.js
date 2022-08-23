//@ts-check

const button = document.getElementById("guessing-game");

console.log(button);

button?.addEventListener("click", function () {
	// console.log("Clicked!");
	// random returns a number between 0 and 1
	// multiply it by 10 and add then get the whole
	// number using floor.
	let answer = Math.floor(Math.random() * 10 + 1);
	let numberOfGuesses = 3;
	let usedGuesses = 1;
	let isGameOver = false;

	while (isGameOver == false) {
		let guess = Number(prompt("Pick a number between 1 and 10"));
		usedGuesses = usedGuesses + 1;

		if (answer == guess) {
			alert("You won!");
			isGameOver = true;
		} else if (usedGuesses > numberOfGuesses) {
			alert("You lose! No more guesses!");
			isGameOver = true;
		} else {
			if (guess < answer) {
				alert("Too low! Guess again.");
			} else {
				alert("Too high! Guess again.");
			}
		}
	}
});
