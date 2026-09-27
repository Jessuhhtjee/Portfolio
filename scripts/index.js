const over = document.querySelector('.over');
const foto = document.querySelector('.over-foto img');

let hasScrolled = false;

window.addEventListener('scroll', () => {
    hasScrolled = true;

    if (over.getBoundingClientRect().top < window.innerHeight) {
        foto.src = foto.dataset.src;
        over.classList.add('geladen');
    }
}, { once: true });