"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../model/messages/messages");
const indexController = {
    get(req, res) {
        res.render('./pages/index.ejs', { title: 'Mini Message Board', messages: messages_1.messages });
    }
};
exports.default = indexController;
