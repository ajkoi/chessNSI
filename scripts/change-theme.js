function initThemeSwitcher() {
    const button = document.getElementById('change-theme');
    button.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');

        // Changer le texte du bouton en fonction du mode
        if (document.body.classList.contains('light-theme')) {
            button.textContent = '';
        } else {
            button.textContent = '';
        }
    });
}
