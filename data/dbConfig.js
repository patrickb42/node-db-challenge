"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex = require("knex");
var knexfile_1 = require("../knexfile");
exports.default = knex(knexfile_1.default.development);
