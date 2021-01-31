import  './components/alert-save';
import {Tasks} from './classes/tasks';
import {createCard} from './components/task-card';
function main(){
    const taks = new Tasks();
    for (let i = 0; i < taks.tasks.length; i++) {
        
        createCard(taks.tasks[i]);
    }
}

main();