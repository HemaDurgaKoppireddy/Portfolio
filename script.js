
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
    mobileMenu.style.display = isHidden ? 'block' : 'none';
});


const mobileLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileLinks) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
}


const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            
            if (entry.target.id === 'skills') {
                const progressFills = entry.target.querySelectorAll('.progress-fill');
                progressFills.forEach(fill => {
                    const width = fill.getAttribute('data-width');
                    fill.style.width = width;
                });
            }
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});


document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) { 
        const container = document.getElementById('background-animation');
        if(container){
            const bubbleCount = 20;
            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                const size = Math.random() * 40 + 10; 
                const left = Math.random() * 100;
                const duration = Math.random() * 10 + 15; 
                const delay = Math.random() * 15;

                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${left}%`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.animationDelay = `${delay}s`;

                container.appendChild(bubble);
            }
        }
    }
});