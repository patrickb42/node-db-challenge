"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicItemVerifierTemplate_1 = require("./basicItemVerifierTemplate");
var models_1 = require("../data/models");
exports.verifyProjectId = basicItemVerifierTemplate_1.basicItemVerifierTemplate({
    itemName: 'project',
    getItemFromDb: models_1.Projects.get,
});
exports.default = {};
