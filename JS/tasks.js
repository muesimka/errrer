const buttonTheme = document.getElementById('themeToggle');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalTaskSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTask');

let tasks = [];
function toggleTheme(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        buttonTheme.textContent = '☀️ Светлая тема';
        localStorage.setItem('darkTheme', 'enabled');

    }else{
            buttonTheme.textContent = '🌙 Темная тема';
            localStorage.setItem('darkTheme', 'disabled');
    }
}
// функции для работы с задачами
// фнк добавления новы задач
function  addTask(){
    // trim убирает лишние пробелы в знчении
    const taskText = taskInput.ariaValueMax.trim();

    //проверка на пустое поле ввода
    if (taskText == '') {
        alert(' Пожалуйста введите задачу');
        return; //выход из функции
    }
    //создание обьета задачи
    //обьекты это структура которая хранит данные в виде пар- ключ значение 
    const newTask = {
        id : Date.now(),
        text: taskText,
        completed: false
    }
    //добавление наш6ей задачи в список массив задач
    // push()- добавление элемнта в конец списка
    tasks.push(newTask);
    //очищаем поля ввода после внесения данных
    taskInput.value = '';
    // обновляем список задач
    renderTasks();

    //обновляем счетчики задач
    updateCounters();

}

function renderTasks(){ 
    //очищение текщего списка
    taskList.innerHTML = '';
    // перебиаем все элементы в массиве
    // forEach()- метод перебра каждог элемепнта массива
    tasks.forEach(task =>{
        // создание элемента списка
        // CreateElement()- МЕТОД содания новоого html элемента
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        //добапвление класса если задача выполнена
        if (taskItem.classList.add('completed'));

        //со-здание HTML СТРУКТУРЫ ДЛЯ НОВОЙ ЗАДАЧИ
        <span class ="task-text">${task.text}</span>
        ;

        //  добавление задачи в список HTML
        //apendChld()- метод добавления элемента в конец другого элемнта
        taskList.appendChild(taskItem)
    })
}
// обработчики собитий
buttonTheme.addEventListener('click', toggleTheme);
addTaskBtn.addEventListener('click', addTask);

//инициализация
//проверка сох темы
 if(localStorage.getItem('darkTheme') ==='enabled'){
    document.body.classList.add('dark-theme');
    buttonTheme.textContent = 'Светлая тема' ;
 }
b