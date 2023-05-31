const descriptions = ["My name is Gyimah Emmanuel","am a developer.","love coding.","Creative."];
let countingItems = 0;
let index = 0;
let currentItem = "";
let letter = "";

(function type() {
    if (countingItems === descriptions.length) {
        countingItems = 0;
    }

    currentItem = descriptions[countingItems];
    letter = currentItem.slice(0, ++index);

    document.querySelector(".type").innerHTML = letter;

    if (countingItems > 0) {
        document.querySelector(".type").innerHTML = "I " + letter;
    }

    if (letter.length === currentItem.length) {
        countingItems++;
        index = 0;
    }

    setTimeout(type,400);
}())