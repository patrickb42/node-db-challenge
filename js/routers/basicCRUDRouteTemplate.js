"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var basicRESTCallTemplate_1 = require("./basicRESTCallTemplate");
var router = Express.Router();
exports.basicCRUDRouteTemplate = function (_a) {
    var basicModel = _a.basicModel, itemName = _a.itemName, itemValidator = _a.itemValidator, itemIdVerifier = _a.itemIdVerifier;
    var get = function (req, res) {
        basicRESTCallTemplate_1.basicRESTCallTemplate({
            dbOperation: basicModel.get,
            dbOperationArg: {},
            operationFailed: function (result) { return (result.length === 0); },
            operationFailureCode: 204,
            operationFailureObject: { message: "no " + itemName + "s found" },
            opperationSuccessCode: 200,
            operationErrorMessage: "error getting " + itemName + "s",
        })(req, res);
    };
    var getById = function (req, res) { return res
        .status(200).json(req[itemName]); };
    var post = function (req, res) {
        basicRESTCallTemplate_1.basicRESTCallTemplate({
            dbOperation: basicModel.insert,
            dbOperationArg: { item: req[itemName] },
            operationFailed: function (result) { return (result === undefined); },
            operationFailureCode: 500,
            operationFailureObject: { message: itemName + " not added due to server error" },
            opperationSuccessCode: 201,
            operationErrorMessage: "error adding " + itemName,
        })(req, res);
    };
    var put = function (req, res) {
        var id = req.params.id;
        basicRESTCallTemplate_1.basicRESTCallTemplate({
            dbOperation: basicModel.update,
            dbOperationArg: { id: id, changes: req[itemName] },
            operationFailed: function (result) { return (result === undefined); },
            operationFailureCode: 500,
            operationFailureObject: { message: "error updating " + itemName + " is id " + id },
            opperationSuccessCode: 200,
            operationErrorMessage: "error updating " + itemName + " by id " + id,
        })(req, res);
    };
    var del = function (req, res) {
        var id = req.params.id;
        basicRESTCallTemplate_1.basicRESTCallTemplate({
            dbOperation: basicModel.remove,
            dbOperationArg: { id: id },
            operationFailed: function () { return (false); },
            operationFailureCode: 404,
            operationFailureObject: { message: 'this code should never be reached' },
            opperationSuccessCode: 200,
            operationErrorMessage: "error deleting " + itemName + " by id " + id,
        })(req, res);
    };
    router.get('/', get);
    router.get('/:id', itemIdVerifier, getById);
    router.post('/', itemValidator, post);
    router.put('/:id', itemIdVerifier, itemValidator, put);
    router.delete('/:id', del);
    return router;
};
exports.default = { basicCRUDRouteTemplate: exports.basicCRUDRouteTemplate };
