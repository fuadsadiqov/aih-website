const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const url = document.URL
let encodedUrl = encodeURIComponent(url)
const linkedin = document.querySelector('#linkedin')
const twitter = document.querySelector('#twitter')
const notifications = document.getElementById('notifications')

// Open and close pop up
openPopupBtn.addEventListener('click', () => {
  popup.classList.toggle('active');
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});
document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && popup.classList.contains('active')){
        popup.classList.remove('active')
    }
})
// Copy url
function copyURL(){
    navigator.clipboard.writeText(url)
    notifications.style.display = 'block'
    setTimeout(() => {
        notifications.style.display = 'none'
    }, 1000);
}

document.getElementById('urlInput').innerText = window.location.href
// Share functions
document.getElementById("linkedin").addEventListener("click", function(event) {
    event.preventDefault();
    var linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url${encodedUrl}`;
    window.location.href = linkedinShareUrl;
  });
document.getElementById("twitter").addEventListener("click", function(event) {
    event.preventDefault();
    var twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
    window.location.href = twitterShareUrl;
  });
document.getElementById("facebook").addEventListener("click", function(event) {
    event.preventDefault();
    var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl;
    window.location.href = facebookShareUrl;
  });
