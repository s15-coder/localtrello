import { TaskModel } from '../classes/task-model';
import { Tasks } from '../classes/tasks';
import {createCard} from './task-card';

const newTask = document.querySelector(".new-task");

// Open dialog listener button
newTask.addEventListener('click', showSaveDialog);

function showSaveDialog() {
    //Create parent of HTML
    const alertContainer = document.createElement("div");
    alertContainer.className = 'alert-create';
    let alertContent = `
    <div class="alert-card">
    <div class="close">x</div>

    <div class="alert-card__title">New Task</div>
    <div class="components-form">
        <span>Title</span>
        <div class="components-form__input">
            <input type="text" placeholder="Write the title " class="components-form__input-title" >
            <i>El campo no debe estar vacio</i>
        </div>
        <span>Description</span>
        <div class="components-form__input">
            <textarea  rows="3" class="components-form__input-description"  placeholder="Write the task description" ></textarea>
            <i>El campo no debe estar vacio</i>
        </div>
        <span>Group</span>
        <select  id="" class="comboBox" >
            <option value="to-do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </select>
        <input type="button" value="SAVE" class="button save">
    </div>
  
</div>`;
    alertContainer.innerHTML = alertContent;
    document.body.appendChild(alertContainer);

    //Event Listeners
    closeAlertListener(alertContainer)
    document.querySelector('.save').addEventListener('click', () => {
        saveEvent(alertContainer)
    });
}


export function closeAlertListener(alertContainer) {
    const closeIcon = document.querySelector('.close');
    closeIcon.addEventListener('click', () => document.body.removeChild(alertContainer));
}


function saveEvent(alertContainer) {
    //Get value of inputs
    const titleElement = document.querySelector('.components-form__input-title');
    const descriptionElement = document.querySelector('.components-form__input-description');
    const groupElement = document.querySelector('.comboBox');

    const groupValue = groupElement.value;
    const titleValue = titleElement.value;
    const descriptionValue = descriptionElement.value;

    if (titleValue != '' && descriptionValue != '') {

        //Save tasks in LocalStorage
        const tasks = new Tasks();
        tasks.createNewTask(titleValue, descriptionValue, groupValue);
        createCard(new TaskModel(titleValue, descriptionValue,groupValue));
        //Close alert
        document.body.removeChild(alertContainer);

    } else {

        const warnings = document.querySelectorAll('i');
        for (let i = 0; i < warnings.length; i++) {
            warnings[i].style['font-size'] = '10px';
        }

    }
}