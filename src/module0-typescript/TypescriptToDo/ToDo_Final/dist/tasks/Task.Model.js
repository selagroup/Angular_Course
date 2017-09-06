"use strict";
var Task = (function () {
    function Task(title, completed) {
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.completed = completed;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=Task.Model.js.map