// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector('textarea');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert('Please fill out all fields');
        }
    });
}
