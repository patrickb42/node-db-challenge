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
var basicTemplate_1 = require("./basicTemplate");
exports.default = basicTemplate_1.basicTemplate({
    tableName: 'projects',
    processData: function (data) {
        return __assign(__assign({}, data), { completed: !!data.completed });
    },
});
