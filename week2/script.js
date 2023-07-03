function checkGuess() {
    var guess = document.getElementById("guessInput").value;
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var h1 = document.querySelector("h1");
    var input = document.querySelector("input");
    var button = document.querySelector("button");
    var result = document.getElementById("result");

    h1.style.color = getRandomColor();
    input.style.borderColor = getRandomColor();
    button.style.borderColor = getRandomColor();
    button.innerHTML = '<span class="loader"></span>';

    setTimeout(function() {
        if (guess == randomNumber) {
            result.innerHTML = "Congratulations! You guessed the correct number.";
            result.classList.add("result-correct");
        } else if (guess < randomNumber) {
            result.innerHTML = "Too low! Try again.";
            result.classList.add("result-incorrect");
        } else {
            result.innerHTML = "Too high! Try again.";
            result.classList.add("result-incorrect");
        }

        button.innerHTML = "Check";
        result.style.opacity = 1;
    }, 2000);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
