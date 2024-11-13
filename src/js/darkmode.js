console.log("darkmode.js подключен");
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (!toggleButton) {
        console.error("Кнопка darkModeToggle не найдена");
        return;
    }
    // Функция ожидания появления кнопки
    function waitForToggleButton() {
        const toggleButton = document.getElementById('darkModeToggle');
        
        if (toggleButton) {
            initializeDarkMode(toggleButton);
        } else {
            // Пробуем снова через 100 мс, если toggleButton не найден
            setTimeout(waitForToggleButton, 100);
        }
    }

    // Основная функция инициализации темного режима
    function initializeDarkMode(toggleButton) {
        const body = document.body;

        // Проверка сохраненного состояния
        const currentMode = localStorage.getItem('dark-mode');
        if (currentMode === 'enabled') {
            enableDarkMode();
        }

        // Обработчик для переключения
        toggleButton.addEventListener('click', function() {
            const darkModeEnabled = body.classList.contains('dark-mode');
            if (darkModeEnabled) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    function enableDarkMode() {
        console.log(document.querySelector('.navbar-inverse')); // Должен показать элемент navbar
        console.log(document.querySelector('.greeting')); // Должен показать элемент greeting
        body.classList.add('dark-mode');
        document.querySelector('.navbar-inverse').classList.add('dark-mode');
        document.querySelector('.greeting').classList.add('dark-mode');
        document.querySelector('.flex-container').classList.add('dark-mode');
        document.querySelector('.container-fluid').classList.add('dark-mode');

        document.querySelectorAll('.navbar-button').forEach(function(button) {
            button.classList.add('dark-mode');
        });

        document.querySelectorAll('.column').forEach(function(column) {
            column.classList.add('dark-mode');
        });
        document.querySelectorAll('.button').forEach(function(button) {
            button.classList.add('dark-mode');
        });

        document.querySelector('.footer').classList.add('dark-mode');
        document.querySelector('.navbar-dropdown-button').classList.add('dark-mode');
        document.querySelector('.navbar-custom-dropdown').classList.add('dark-mode');

        localStorage.setItem('dark-mode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        document.querySelector('.navbar-inverse').classList.remove('dark-mode');
        document.querySelector('.greeting').classList.remove('dark-mode');
        document.querySelector('.flex-container').classList.remove('dark-mode');
        document.querySelector('.container-fluid').classList.remove('dark-mode');

        document.querySelectorAll('.navbar-button').forEach(function(button) {
            button.classList.remove('dark-mode');
        });

        document.querySelectorAll('.column').forEach(function(column) {
            column.classList.remove('dark-mode');
        });
        document.querySelectorAll('.button').forEach(function(button) {
            button.classList.remove('dark-mode');
        });

        document.querySelector('.footer').classList.remove('dark-mode');
        document.querySelector('.navbar-dropdown-button').classList.remove('dark-mode');
        document.querySelector('.navbar-custom-dropdown').classList.remove('dark-mode');

        localStorage.setItem('dark-mode', 'disabled');
    }
});