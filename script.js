const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sidemenu.style.transform = 'translateX(-16rem)';

}

function closeMenu() {
    sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','backdrop-blur-lg','shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm',);
    }
    else{
         navBar.classList.remove('bg-white','backdrop-blur-lg','shadow-sm');
         navLinks.classList.add('bg-white','shadow-sm',);
    }
})

const show = document.querySelector('#showmore');

function showmore() {
    show.style.display = 'grid';
}



