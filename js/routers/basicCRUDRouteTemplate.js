"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var basicCRUDFunctionsTemplate_1 = require("./basicCRUDFunctionsTemplate");
exports.basicCRUDRouteTemplate = function (_a) {
    var basicModel = _a.basicModel, itemName = _a.itemName, itemValidator = _a.itemValidator, itemIdVerifier = _a.itemIdVerifier;
    var router = Express.Router();
    var _b = basicCRUDFunctionsTemplate_1.basicCRUDFunctionsTemplate({ basicModel: basicModel, itemName: itemName }), get = _b.get, getById = _b.getById, post = _b.post, put = _b.put, del = _b.del;
    router.get('/', get);
    router.get('/:id', itemIdVerifier, getById);
    router.post('/', itemValidator, post);
    router.put('/:id', itemIdVerifier, itemValidator, put);
    router.delete('/:id', del);
    return router;
};
exports.default = {};
