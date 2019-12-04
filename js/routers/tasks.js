"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicCRUDRouteTemplate_1 = require("./basicCRUDRouteTemplate");
var models_1 = require("../data/models");
var middleware_1 = require("../middleware");
exports.router = basicCRUDRouteTemplate_1.basicCRUDRouteTemplate({
    basicModel: models_1.Tasks,
    itemName: 'task',
    itemValidator: middleware_1.validateTask,
    itemIdVerifier: middleware_1.verifyTaskId,
});
exports.default = {};
