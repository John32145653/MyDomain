function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        // Show the element if its data-lang matches the selected language
        if (element.dataset.lang === lang) {
            element.style.display = 'inline';
        } else {
            element.style.display = 'none';
        }
    });
}

// Optional: Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en'); // Default to English
});
