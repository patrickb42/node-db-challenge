"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Knex = require("knex");
var config = require("../knexfile");
exports.default = Knex(config.development);
