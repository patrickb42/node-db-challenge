"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResource = function (req, res, next) {
    var _a = req.body, name = _a.name, description = _a.description;
    req.resource = { name: name, description: description };
    return (name === undefined)
        ? res.status(400).json({ message: 'Resources must have a name' })
        : next();
};
exports.default = {};
