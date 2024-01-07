"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function errorMiddleWare(err, req, res, next) {
    res.status(err.status).send({
        error: true,
        message: err.message,
    });
};
