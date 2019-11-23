"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up = function (knex) { return knex.schema
    .createTable('thing', function (tbl) {
    tbl.increments();
}).createTable('other thing', function (tbl) {
    tbl.increments();
}); };
exports.up = up;
var down = function (knex) { return knex.schema
    .dropTableIfExists('thing')
    .dropTableIfExists('other thing'); };
exports.down = down;
