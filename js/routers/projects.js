"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicCRUDRouteTemplate_1 = require("./basicCRUDRouteTemplate");
var models_1 = require("../data/models");
var middleware_1 = require("../middleware");
var middleware_2 = require("../middleware");
exports.router = basicCRUDRouteTemplate_1.basicCRUDRouteTemplate({
    basicModel: models_1.Projects,
    itemName: 'project',
    itemValidator: middleware_1.validateProject,
    itemIdVerifier: middleware_2.verifyProjectId,
});
exports.default = {};
