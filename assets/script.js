//=============TOGGLE=============
let navbar = document.querySelector('.header .flex .navbar');
// menu btn
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
