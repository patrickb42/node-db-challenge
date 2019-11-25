"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicItemVerifierTemplate_1 = require("./basicItemVerifierTemplate");
var models_1 = require("../data/models");
exports.verifyTaskId = basicItemVerifierTemplate_1.basicItemVerifierTemplate({
    itemName: 'task',
    getItemFromDb: models_1.Tasks.get,
});
exports.default = {};
