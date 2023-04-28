let navBar = document.getElementById('nav-bar')
let hamburger = document.getElementById('hamburger')

function openNavBar(){
    hamburger.classList.add('active')
    navBar.classList.add('active');
    hamburger.setAttribute('onclick','closeNavBar()')
}
function closeNavBar(){
    navBar.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('onclick','openNavBar()')
}