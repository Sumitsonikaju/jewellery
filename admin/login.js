// login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const validUsername = 'admin'; // Hardcoded for demo purposes
    const validPassword = 'password'; // Hardcoded for demo purposes

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            // Redirect to admin dashboard on successful login
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
