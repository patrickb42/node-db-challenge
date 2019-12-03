"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicItemVerifierTemplate_1 = require("./basicItemVerifierTemplate");
var models_1 = require("../data/models");
exports.verifyResourceId = basicItemVerifierTemplate_1.basicItemVerifierTemplate({
    itemName: 'sesource',
    getItemFromDb: models_1.Resources.get,
});
exports.default = {};
