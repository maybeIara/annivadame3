function checkAnswer() {
    var answer = document.getElementById('answer').value.trim();
    var responseBox = document.getElementById('response');
    var carImage = document.getElementById('car-image');
    var iphoneImage = document.getElementById('iphone-image');

    if (answer === "") {
        responseBox.innerHTML = "Tu crois que je vais te dire ? vas le chercher seul, tiens";
        carImage.style.display = 'block';
        iphoneImage.style.display = 'block';
    } else {
        responseBox.innerHTML = "T'as cru j'allais te dire ? vas le chercher seul. tiens";
        carImage.style.display = 'block';
        iphoneImage.style.display = 'block';
    }
}
