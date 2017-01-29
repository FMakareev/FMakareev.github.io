var btnAddTask = document.getElementById("addTask"),
    btnDelTask = document.getElementById("delTask"),
    inpTitleTask = document.getElementById("titleInput"),
    inpContentTask = document.getElementById("contentInput"),
    containerTask = document.querySelector(".todo__main-list");

function createObj(taskId, taskTitle, taskContent) {
    this.taskId = taskId;
    this.taskTitle = taskTitle;
    this.taskContent = taskContent;
}

function addNewTask() {
    titleTask = inpTitleTask.value,
        contentTask = inpContentTask.value;
    if (titleTask.length > 5 && contentTask.length > 5) {
        var numberTask = containerTask.childNodes.length + 1,
            idTask = 'taskId-' + numberTask;
        var taskObj = new createObj(idTask, titleTask, contentTask);
        localStorage.setItem(idTask, JSON.stringify(taskObj));
        createElem(numberTask, titleTask, contentTask, idTask);
    } else {

    }

}

function createElem(numberTask, titleTask, contentTask, idTask) {
    var taskRow = document.createElement('li');
    var taskStr = '<div class="todo__main-item_title">' + titleTask + '</div><div class="todo__main-item_content">' + contentTask + '</div><div class="todo__main-item_del"><button data-taskid="delTask">&#215;</button></div>';
    taskRow.classList.add('todo__main-item');
    taskRow.setAttribute("id", idTask);
    taskRow.innerHTML = taskStr;
    containerTask.prepend(taskRow);
    addEvent()
}

function addEvent() {
    var btnDelTask = document.querySelectorAll('[data-taskid="delTask"]');
    for (var i = 0; i < btnDelTask.length; i++) {
        btnDelTask[i].addEventListener("click", delTask)
    }
}

function delTask(e) {
    var elem = e.target.parentElement.parentElement;
    var taskId = elem.getAttribute("id");
    containerTask.removeChild(elem);
    localStorage.removeItem(taskId)
}

function initList() {
    var locStor = localStorage
    for (var i = 0; i < locStor.length; i++) {
        var itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        createElem(i + 1, itemObj.taskTitle, itemObj.taskContent, itemObj.taskId);
    }
}
initList()
