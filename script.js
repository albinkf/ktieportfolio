//Social Media Buttons
// 
const instagramBtn = document.getElementById('instagram-btn');
const tumblrBtn = document.getElementById('tumblr-btn');
//github buttons
const stockphotoBtn = document.getElementById('stockphoto-btn');
const lyricsearchBtn = document.getElementById('lyricsearch-btn');
const soundboardBtn = document.getElementById('soundboard-btn');
const musicplayerBtn = document.getElementById('musicplayer-btn');
const dadjokesBtn = document.getElementById('dadjokes-btn');
const guessinggameBtn = document.getElementById('guessinggame-btn');
const canvasapiBtn = document.getElementById('canvasapi-btn');
const pianoBtn = document.getElementById('piano-btn');
const chromeBtn = document.getElementById('chrome-btn');
//SOCIAL MEDIA links
// click button, open in new tab
instagramBtn.addEventListener('click', () => {
  window.open('https://www.instagram.com/ktie_arts/', '_blank');
});
// click button open in new tab
tumblrBtn.addEventListener('click', () => {
  window.open('https://www.tumblr.com/blog/ktieart', '_blank');
});


//GITHUB links
stockphotoBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Insect-Game', '_blank');
});


lyricsearchBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Lyrics-Search/', '_blank');
});

soundboardBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Sound-Board/', '_blank');
});

musicplayerBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/music-player/', '_blank');
});
guessinggameBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Speak-Number-Guessing-Game/', '_blank');
});

dadjokesBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/dad-jokes/', '_blank');
});
canvasapiBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/canvasapi/', '_blank');
});
pianoBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Build-A-Piano/', '_blank');
});
chromeBtn.addEventListener('click', () => {
  window.open('https://albinkf.github.io/Chrome-Extension/', '_blank');
});



//derived from https://www.w3schools.com/howto/howto_css_modal_images.asp, debugging assisted by Google Overview
// get modal 
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-image"); 
var captionText = document.getElementById("caption");

// select image by class
var images = document.querySelectorAll(".grid-card img");

//add click event to each image
images.forEach(function(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// close
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}