"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var development = {
    client: 'sqlite3',
    connection: {
        filename: './data/data.db3',
    },
    useNullAsDefault: true,
    pool: {
        afterCreate: function (conn, done) {
            // after a connection is made to the sqlite engine
            conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
    },
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
};
exports.development = development;