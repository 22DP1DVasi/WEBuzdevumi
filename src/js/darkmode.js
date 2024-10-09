document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if there is a saved mode in the local storage
    const currentMode = localStorage.getItem('dark-mode');
    if (currentMode === 'enabled') {
        enableDarkMode();
    }

    // Button click handler
    toggleButton.addEventListener('click', function() {
        const darkModeEnabled = body.classList.contains('dark-mode');
        if (darkModeEnabled) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        document.querySelector('.navbar-inverse').classList.add('dark-mode');
        document.querySelector('.greeting').classList.add('dark-mode');
        document.querySelector('.flex-container').classList.add('dark-mode');
        document.querySelector('.container-fluid').classList.add('dark-mode');
        document.querySelector('.activepage').classList.add('dark-mode');
        document.querySelectorAll('.column').forEach(function(column) {
            column.classList.add('dark-mode');
        });
        document.querySelectorAll('.button').forEach(function(button) {
            button.classList.add('dark-mode');
        });

        localStorage.setItem('dark-mode', 'enabled'); // Save to local storage
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        document.querySelector('.navbar-inverse').classList.remove('dark-mode');
        document.querySelector('.greeting').classList.remove('dark-mode');
        document.querySelector('.flex-container').classList.remove('dark-mode');
        document.querySelector('.container-fluid').classList.remove('dark-mode');
        document.querySelector('.activepage').classList.remove('dark-mode');
        document.querySelectorAll('.column').forEach(function(column) {
            column.classList.remove('dark-mode');
        });
        document.querySelectorAll('.button').forEach(function(button) {
            button.classList.remove('dark-mode');
        });

        localStorage.setItem('dark-mode', 'disabled'); // Save to local storage
    }
});
