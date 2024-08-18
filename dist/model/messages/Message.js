"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(text, user) {
        this.text = text;
        this.user = user;
        this.added = new Date();
    }
}
exports.default = Message;
