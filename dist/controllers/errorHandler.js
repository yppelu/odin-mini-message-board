"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
function errorHandler(error, req, res, next) {
    res.send('500 Internal Server Error');
}
