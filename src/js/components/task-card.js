import { showUpdateDialog } from './alert-update'
const tasksList = document.querySelectorAll('.task-list');

export const createCard = function (task) {

    const taskCard = document.createElement('div');
    taskCard.className = `task s${task.id}`;
    taskCard.innerHTML = `
    <div class="task__menu" id="s${task.id}">-</div>
    <span>${task.title}</span>
    <div class="task__tag"></div>`;

    switch (task.group) {
        case 'to-do':
            tasksList[0].appendChild(taskCard);
            break;
        case 'doing':
            tasksList[1].appendChild(taskCard);
            break;
        case 'done':
            tasksList[2].appendChild(taskCard);
            break;
    }
    const taskMenu = document.getElementById('s'+task.id);
    taskMenu.addEventListener('click', function (e) {
        showUpdateDialog(task);
    });


}

export const deleteCard = function (task) {
    const taskCard = document.querySelector(`.s` + task.id);
    switch (task.group) {
        case 'to-do':
            tasksList[0].removeChild(taskCard);
            break;
        case 'doing':
            tasksList[1].removeChild(taskCard);
            break;
        case 'done':
            tasksList[2].removeChild(taskCard);
            break;
    }
}
