"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = function (req, res, next) {
    var _a = req.body, projectId = _a.projectId, description = _a.description, notes = _a.notes, completed = _a.completed;
    req.task = {
        projectId: projectId,
        description: description,
        notes: notes,
        completed: completed,
    };
    return (projectId === undefined
        || description === undefined)
        ? res.status(400).json({ message: 'Tasks must have a projectId and description' })
        : next();
};
exports.default = {};
