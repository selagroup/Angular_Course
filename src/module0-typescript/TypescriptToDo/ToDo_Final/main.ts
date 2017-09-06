import * as $ from 'jquery';
import {TaskService} from "./tasks/taskService";
import {TaskMemoryStore} from "./tasks/taskMemoryStore";
import {Task} from "./tasks/Task.Model";

$(function(){
    let service = new TaskService(new TaskMemoryStore());

    let items = service.getTask(1);

    service.saveTask(new Task('Learn Typescrtip',true))
})




