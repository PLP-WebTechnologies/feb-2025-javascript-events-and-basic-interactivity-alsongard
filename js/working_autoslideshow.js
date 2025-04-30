let slideIndex = 0;

const bgButton = document.getElementById('bgChange');
const moveRight = document.querySelector('.right');
const moveLeft = document.querySelector(".left");
const slidesImages = document.getElementsByClassName('slide');
const header  = document.getElementById("header");

const headerPosition = header.offsetTop;
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky-header', window.scrollY > 0)
})


function slideShow()
{
    let i;
    for (i = 0; i < slidesImages.length; i++)
    {
          slidesImages[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slidesImages.length)
    {
        slideIndex = 1;
    }
    slidesImages[slideIndex-1].style.display = 'block';
    setTimeout(slideShow, 5000);
}
slideShow();