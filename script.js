
const btn = document.getElementById('themeBtn');

btn.addEventListener('click', function () {
    // Переключаем класс dark-theme у тега <body>
    document.body.classList.toggle('dark-theme');
});
