const buttonTheme = document.getElementById('themeToggle');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalTasksSpan = document.getElementById('totalTasks');
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
    const taskText = taskInput.value.trim();

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

    saveTasks();
    // обновляем список задач
    renderTasks();

    //обновляем счетчики задач
    updateCounters();

}

//функция для выполнения задачи
function toggleTaskCompletion(taskId){
    //будем исать задачу в массиве по id
    //find()-метод поиска элемента в массиве
    const task = tasks.find(task => task.id === taskId);
    
    //если задача найдена
if(task){
    task.completed = !task.completed; // преобразовать в противополож значение
    saveTasks();
    renderTasks();
    updateCounters();
}
}

//функция удаления задачи
function deleteTask(taskId){
    //filter()-метод создания нового массива с элементами которые прощли фильтрацию
    // оставлеям только те залачи которые прошли проверку
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
    updateCounters();

}

//обновление счестчик задач при изменении задач(удалении ,добавлении и тд)
function updateCounters(){
    //lenght - свойство которое возращает число элемнтов в массиве
    const totalTasks = tasks.length;

    const completedTask = task.filter(task => task.completed).length;

    //обновим текст счетчиков в HTML
    totalTasksSpan.textContent = totalTasks;
    completedTasksSpan.textContent = completedTask;
}

function renderTasks(){ 
    //чищение текщего списка
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
        taskItem.innerHTML=`
            <input type="checkbox" class ="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class ="task-text">${task.text}</span>
            <button class ="delete-btn">❌<button>
        `;

        //обработчики событий для чекбокса и крестика
        const checkbox = taskItem.querySelector('.task-checkbox');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        // обработка нажатия на чекбокс
        checkbox.addEventListener('click', () =>{
            toggleTaskCompletion(task.id)
        });

        deleteBtn.addEventListener('click',() =>{
            deleteTask(task.id);
        }
        )


        //обработка нажатия по кнопке креситику
        //  добавление задачи в список HTML
        //apendChld()- метод добавления элемента в конец другого элемнта
        taskList.appendChild(taskItem)
    });
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
// загружаем задачи из localstorage при загрузке страницы
function loadTasks(){
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks){
        tasks = JSON.parse(savedTasks);  // преобразование строк обратно в массив
        renderTasks();
        updateCounters();

    }
}
//сохр задачи в localStorage
function saveTasks (){
    //JSON.stringify преобразуем массив задач в строу(важно дя сохр)
localStorage.setItem('tasks', JSON.stringify(tasks));
}

//обновляем функцию добавлния задачи,чтобы она сохр задачу в локал хранилище
//const originalAddTasks = addTask;
//addTask = function(){
//  originalAddTasks();
// saveTasks();
// };

// загружаем задачи при запуске страницы
loadTasks();
