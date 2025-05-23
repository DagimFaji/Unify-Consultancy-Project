// Contact Form Handler
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
    } catch (err) {
        alert('Failed to send message');
    }
});

// Newsletter Form Handler
document.querySelector('.newsletter button')?.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('.newsletter input').value;
    if (email) {
        alert(`Subscribed with ${email}`);
    } else {
        alert('Please enter a valid email');
    }
});

// Login Form Handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.message);
    } catch (err) {
        alert('Login failed');
    }
});