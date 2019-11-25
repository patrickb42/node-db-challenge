"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProject = function (req, res, next) {
    var _a = req.body, name = _a.name, description = _a.description, completed = _a.completed;
    req.project = { name: name, description: description, completed: completed };
    return (name === undefined)
        ? res.status(400).json({ message: 'Projects must have a name' })
        : next();
};
exports.default = {};
