const humburger = document.getElementById('menu--btn');
const nav = document.getElementById('nav');
humburger.addEventListener('click',  () => {
        nav.classList.toggle('show');
    });