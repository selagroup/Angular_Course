import {ITaskStore} from "./ITaskStore";
import {Task} from "./Task.Model"

export class TaskMemoryStore implements ITaskStore{

    items:Task[];

    constructor(){
        this.items=[];
    }

    getItem(id:number){
        let filtered = this.items.filter((task)=>task.id==id);
        return filtered[0];
    }
    saveItem(task:Task):boolean{
        this.items.push(task);
        return true;
    }


}