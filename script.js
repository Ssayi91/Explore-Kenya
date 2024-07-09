let search   = document.querySelector('.searchbox');

document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
}
document.getElementById('menu-icon').onclick = function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}
//header
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to hide the banner after 5 seconds
    setTimeout(function() {
        const banner = document.getElementById('banner');
        banner.style.opacity = '0';
        setTimeout(function() {
            banner.style.display = 'none';
        }, 1000); // Give time for the opacity transition
    }, 5000); // Banner visible for 5 seconds
});
