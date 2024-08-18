"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../model/messages/messages");
const newMessageFormController = {
    get(req, res) {
        res.render('./pages/newMessageForm.ejs', { title: 'Add New Message' });
    },
    post(req, res) {
        (0, messages_1.addMessage)(req.body.text, req.body.user);
        res.redirect('/');
    }
};
exports.default = newMessageFormController;
