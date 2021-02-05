const homeTitles = ["Mathieu LOBSTEIN", "Production Audiovisuelle", "Drone", "Publicité", "Clip", "Fiction"];
const timeoutTime = 5000;
const animationText = 750;
let index = 1;

setTimeout(function changeHomeTitle() {
    $('#homeTitle').fadeOut(animationText);
    setTimeout(setTitle, animationText);
    setTimeout(changeHomeTitle, timeoutTime);
}, timeoutTime);

function setTitle() {
    $('#homeTitle')[0].innerHTML = homeTitles[index];
    $('#homeTitle').fadeIn(animationText);
    index = (index + 1) % homeTitles.length;
}