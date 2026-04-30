//Social Media Buttons
// 
const instagramBtn = document.getElementById('instagram-btn');
const tumblrBtn = document.getElementById('tumblr-btn');

// click button, open in new tab
instagramBtn.addEventListener('click', () => {
  window.open('https://www.instagram.com/ktie_arts/', '_blank');
});
// click button open in new tab
tumblrBtn.addEventListener('click', () => {
  window.open('https://www.tumblr.com/blog/ktieart', '_blank');
});