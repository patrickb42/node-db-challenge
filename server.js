"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var helment = require("helmet");
var server = express();
server.use(helment());
server.use(express.json());
exports.default = server;
