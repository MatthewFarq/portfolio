
// Mobile nav drawer
const hamburger_button = document.getElementById('hamburger-button');
const overlay = document.querySelector('.overlay');
const body = document.getElementById('body');
const navDrawer = document.querySelector('.nav-drawer');

if (hamburger_button) {
    hamburger_button.addEventListener('click', handleMenuToggle);
}

if (overlay) {
    overlay.addEventListener('click', (event) => {
        if (event.target !== overlay) {
            return;
        } 
        handleMenuToggle()
    });
}

function handleMenuToggle() {
    body.classList.toggle('no-scroll');
    navDrawer.classList.toggle('active');
    overlay.classList.toggle('hide');
}
