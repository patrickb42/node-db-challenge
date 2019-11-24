"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbConfig_1 = require("../dbConfig");
exports.basicTemplate = function (_a) {
    var tableName = _a.tableName;
    var get = function (_a) {
        var id = (_a === void 0 ? {} : _a).id;
        return (id === undefined)
            ? dbConfig_1.default(tableName)
            : dbConfig_1.default(tableName)
                .where('id', id);
    };
    var insert = function (_a) {
        var item = _a.item;
        return dbConfig_1.default(tableName)
            .insert(item)
            .then(function (_a) {
            var id = _a[0];
            return get({ id: id });
        });
    };
    var update = function (_a) {
        var id = _a.id, changes = _a.changes;
        return dbConfig_1.default(tableName)
            .where('id', id)
            .update(changes)
            .then(function (count) { return (count > 0 ? get({ id: id }) : null); });
    };
    var remove = function (_a) {
        var id = _a.id;
        return dbConfig_1.default(tableName)
            .where('id', id)
            .del();
    };
    return {
        get: get,
        insert: insert,
        update: update,
        remove: remove
    };
};
exports.default = { basicTemplate: exports.basicTemplate };
