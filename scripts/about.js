const images = [
    "assets/images/about/image3.png",
    "assets/images/about/image4.png",
    "assets/images/about/image5.png",
    "assets/images/about/image1.png",
    "assets/images/about/image2.png",
];

let currentImageIndex = 0;
const imageElement = document.getElementById("about-image");

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageUrl = images[currentImageIndex];
    imageElement.src = newImageUrl;
}, 700);

function openAboutPopup(){
    document.getElementById('about-me-popup').style.left = '0'
}
function closeAboutPopup(){
    document.getElementById('about-me-popup').style.left = '-100%'
}

function showMoreGallery() {
    document.querySelector('.gallery-items-wrapper').style.height = 'unset'
    document.querySelector('.gallery-button').style.display = 'none'
}