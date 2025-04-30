let slideIndex = 1;

const bgButton = document.getElementById('bgChange');
// const moveRight = document.querySelector('.right');
// const moveLeft = document.querySelector(".left");
const slidesImages = document.getElementsByClassName('slide');
const header  = document.getElementById("header");
const sun = document.getElementsByClassName('fa-sun');
const body  = document.body;
const smallMenu = document.getElementById('smallMenu');
const smallMenuContainer = document.getElementById('smallNavContainer');
const smallbgChange = document.getElementById('smallbgChange');
const signBtn = document.getElementById('signBtn');
const loginBtn = document.getElementById('loginBtn');
const userPhone = document.getElementById('user_phone');
const userName = document.getElementById('user_name');
const userRepeatPassword = document.getElementById('user_repeat_password');
const submitBtn  = document.getElementById('submitButton')
loginBtn.addEventListener('click', ()=>{

    userPhone.style.display = 'none';
    userName.style.display= 'none';
    userRepeatPassword.style.display = 'none';

    loginBtn.style.backgroundColor = 'black';
    loginBtn.style.color = 'white'
    signBtn.style.backgroundColor = 'white';
    signBtn.style.color = 'black';
    submitBtn.value = 'Login'
})
signBtn.addEventListener('click', ()=>{
    userPhone.style.display = 'flex';
    userName.style.display= 'flex';
    userRepeatPassword.style.display = 'flex';
    submitBtn.value = 'Signup'

    loginBtn.style.backgroundColor = 'white';
    loginBtn.style.color = 'black';
    signBtn.style.backgroundColor='black';
    signBtn.style.color='white';
})



function ChangeBackground()
{
    body.classList.toggle('changeBg');
    console.log(`Color is : ${bgButton.style.color}`)
    // sun.classList.toggle('sun-darkmode');
    let currentColor = getComputedStyle(document.querySelector('#bgChange')).color;
    // console.log(`Current color: ${currentColor}`)
    if (currentColor == 'rgb(0, 0, 0)')
    {
        bgButton.style.color = 'white';
    }
    else
    {
        bgButton.style.color = 'black';

    }
}

smallbgChange.addEventListener('click', ChangeBackground);
bgButton.addEventListener('click', ChangeBackground);
smallMenu.addEventListener('click', ()=>{
    smallMenuContainer.classList.toggle('smallNavDisplay');
})
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



