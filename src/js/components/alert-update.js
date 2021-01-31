import { closeAlertListener } from './alert-save';
import { deleteCard, createCard } from './task-card';
import { Tasks } from '../classes/tasks';

const tasks = new Tasks();

//@params ${task}: is required to show the tasks to update
export function showUpdateDialog(task) {

    const alertContainer = document.createElement('div');
    alertContainer.className = 'alert-create';
    alertContainer.innerHTML = `
        <div class="alert-card">
            <div class="close">x</div>
            <div class="alert-card__title"><div>Tasks</div > </div>
            <div class="components-form">
                <span>Title</span>
                        <div class="components-form__input">
            <input type="text" placeholder="Write the title " class="components-form__input-title"  value="${task.title}">
            <i>El campo no debe estar vacio</i>
        </div>
                <span>Description</span>
                <div class="components-form__input">
            <textarea rows="3" class="components-form__input-description"  placeholder="Write the task description" >${task.description}</textarea>
            <i>El campo no debe estar vacio</i>
        </div>
                <span>Group</span>
                     <select id="" class="comboBox">
            <option value="to-do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </select>
                <div class="buttons">
                    <input type="button" value="Delete" class="button delete">
                    <input type="button" value="Update" class="button update">
                </div>
            </div>
        </div>`;
    document.body.appendChild(alertContainer);
    closeAlertListener(alertContainer);

    //Delete task listener
    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        tasks.deleteTask(task.id);
        deleteCard(task);
        document.body.removeChild(alertContainer);
    });

    //Update task listener
    const updateButton = document.querySelector('.update');
    updateButton.addEventListener('click', () => {
        const titleValue = document.querySelector('.components-form__input-title').value;
        const descValue = document.querySelector('.components-form__input-description').value;
        const groupValue = document.querySelector('.comboBox').value;
        let taskObject = {
            'id': task.id,
            'title': titleValue,
            'description': descValue,
            'group': groupValue
        }
        deleteCard(task);
        createCard(taskObject);
        tasks.updateTask(taskObject);
        document.body.removeChild(alertContainer);
    });
}

