"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var basicModelTemplate_1 = require("./basicModelTemplate");
var utils_1 = require("../../utils");
exports.default = basicModelTemplate_1.basicModelTemplate({
    tableName: 'tasks',
    preprocessData: function (data) { return utils_1.convertObjectCamelToSnake({ obj: data }); },
    processResult: function (result) { return (__assign(__assign({}, utils_1.convertObjectSnakeToCamel({ obj: result })), { completed: !!result.completed })); },
});
