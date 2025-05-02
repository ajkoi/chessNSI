function initThemeSwitcher() {
    const button = document.getElementById('change-theme');
    button.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Changer le texte du bouton en fonction du mode
        if (document.body.classList.contains('dark-theme')) {
            button.textContent = '';
        } else {
            button.textContent = '';
        }
    });
}
