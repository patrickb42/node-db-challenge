"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = function (req, res, next) {
    var _a = req.body, description = _a.description, notes = _a.notes, completed = _a.completed;
    req.task = { description: description, notes: notes, completed: completed };
    return (description === undefined)
        ? res.status(400).json({ message: 'Tasks must have a description' })
        : next();
};
exports.default = {};
