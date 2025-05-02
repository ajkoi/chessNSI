function initThemeSwitcher() {
    const button = document.getElementById('change-theme');
    button.addEventListener('click', function() {
        document.body.classList.toggle('light_theme');

        // Changer le texte du bouton en fonction du mode
        if (document.body.classList.contains('light_theme')) {
            button.textContent = '';
        } else {
            button.textContent = '';
        }
    });
}
