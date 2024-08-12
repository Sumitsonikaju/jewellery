import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    fetch(config.headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Set the logo path dynamically
            const logo = document.getElementById('company-logo');
            if (logo) logo.src = config.logoPath;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    fetch(config.footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
