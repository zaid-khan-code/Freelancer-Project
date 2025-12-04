const menuBtn = document.getElementById('menu-btn');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    mobileOverlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('hidden');
});

// Close the mobile menu when a link is clicked
const mobileLinks = mobileOverlay.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileOverlay.classList.add('hidden');
    });
});
