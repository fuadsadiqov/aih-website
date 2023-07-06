const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const url = document.URL
const linkedin = document.querySelector('#linkedin')
const twitter = document.querySelector('#twitter')

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

function getUrlHref(){
    document.getElementById('urlInput').innerText = url
}
function copyURL(){
    navigator.clipboard.writeText(url)
}
function shareFacebook(){
    const facebook = document.querySelector('#facebook')
    let postUrl = encodeURI(url)
    let postTitle = encodeURI('Share this post')
    let postImg = encodeURI(facebook.src)
    console.log(postImg);
    console.log(postTitle);
    console.log(postUrl);
    console.log(
        facebook.setAttribute(
            'href',
            `https://www.facebook.com/sharer.php?u=${postUrl}`
        )

    );
}
getUrlHref()  
// 
// https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
// https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
