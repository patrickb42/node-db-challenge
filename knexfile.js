"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3',
        },
        useNullAsDefault: true,
        pool: {
            afterCreate: function (conn, done) {
                // after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
            },
        },
    },
};
