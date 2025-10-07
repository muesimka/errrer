const buttonTheme = document.getElementById('themeToggle')

function toggleTheme(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        buttonTheme.textContent = '☀️ Светлая тема';
    }else{
            buttonTheme.textContent = '🌙 Темная тема';
    }
}


buttonTheme.addEventListener('click', toggleTheme);s

const homeButton = document.getElementById('homeButton'); 
 
function ButtonHome(){ 
    document.body.classList.toggle('dark-theme'); 
    if(document.body.classList.contains('dark-theme')){ 
        homeButton.textContent = 'мой сайт'; 
 
    }else{ 
        homeButton.textContent = 'мой сайт'; 
    } 
} 
 
homeButton.addEventListener('click', ButtonHome);