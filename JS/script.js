const buttonTheme = document.getElementById('themeToggle')

function toggleTheme(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        buttonTheme.textContent = '☀️ Светлая тема';
    }else{
            buttonTheme.textContent = '🌙 Темная тема';
    }
}

buttonTheme.addEventListener('click', toggleTheme)