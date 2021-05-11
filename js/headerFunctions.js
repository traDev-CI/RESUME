const navToggle = document.querySelector('.toggle-button');
const navMenu = document.querySelector('.nav_menu');
const closeNave = document.querySelector('#close_nav');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav_menu_visible');
    if (navMenu.classList.contains("nav_menu_visible")) {
        navToggle.setAttribute("aria-laber", "Close menu")
    }else{
        navToggle.setAttribute("aria-laber", "Open menu")
    }
})

closeNave.addEventListener('click',() =>{
    if (navMenu.classList.contains("nav_menu_visible")) {
        navMenu.classList.remove("nav_menu_visible")
    }
    
})