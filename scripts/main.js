const menuBtn = document.getElementById('menu-btn');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('hidden');
});