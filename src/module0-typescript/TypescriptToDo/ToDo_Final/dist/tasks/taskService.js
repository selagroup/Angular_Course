"use strict";
var TaskService = (function () {
    function TaskService(store) {
        this.store = store;
    }
    TaskService.prototype.saveTask = function (task) {
        return this.store.saveItem(task);
    };
    TaskService.prototype.getTask = function (id) {
        return this.store.getItem(id);
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=taskService.js.map