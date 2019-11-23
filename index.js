"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var server_1 = require("./server");
dotenv.config();
var PORT = process.env.PORT || 5000;
server_1.default.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
