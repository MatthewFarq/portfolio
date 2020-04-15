const hamburger_button = document.getElementById('hamburger-button');
const overlay = document.getElementById('drawer-overlay');
const body = document.getElementById('body');

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
    overlay.classList.toggle('hide');
}
