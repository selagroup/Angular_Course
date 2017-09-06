"use strict";
var TaskMemoryStore = (function () {
    function TaskMemoryStore() {
        this.items = [];
    }
    TaskMemoryStore.prototype.getItem = function (id) {
        var filtered = this.items.filter(function (task) { return task.id == id; });
        return filtered[0];
    };
    TaskMemoryStore.prototype.saveItem = function (task) {
        this.items.push(task);
        return true;
    };
    return TaskMemoryStore;
}());
exports.TaskMemoryStore = TaskMemoryStore;
//# sourceMappingURL=taskMemoryStore.js.map