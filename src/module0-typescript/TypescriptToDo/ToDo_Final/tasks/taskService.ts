import {ITaskStore} from "./ITaskStore";
import {Task} from './Task.Model'

export class TaskService{

    constructor(private store:ITaskStore){

    }
    saveTask(task:Task){
        return this.store.saveItem(task);
    }
    getTask(id:number){
        return this.store.getItem(id);
    }

}