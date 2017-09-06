"use strict";
var $ = require("jquery");
var taskService_1 = require("./tasks/taskService");
var taskMemoryStore_1 = require("./tasks/taskMemoryStore");
var Task_Model_1 = require("./tasks/Task.Model");
$(function () {
    var service = new taskService_1.TaskService(new taskMemoryStore_1.TaskMemoryStore());
    var items = service.getTask(1);
    service.saveTask(new Task_Model_1.Task('Learn Typescrtip', true));
});
//# sourceMappingURL=main.js.map