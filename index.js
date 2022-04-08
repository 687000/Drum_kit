var buttons = document.querySelectorAll(".set button");
var names = ["tom1", "tom2", "tom3", "tom4", "snare", "crash", "kick"]
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
    });
    buttons[i].style.backgroundImage = "url('./images/" + names[i] + ".png')";
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
document.addEventListener("keyup", function (event) {
    removeButtonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
    }
}
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}