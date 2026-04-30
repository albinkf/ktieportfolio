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

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgmodal-contn");
var captionText = document.getElementById("caption");

// 2. Select ALL images (using a class, e.g., "modal-image")
var images = document.querySelectorAll(".modal-image");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 