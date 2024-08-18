"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
exports.addMessage = addMessage;
const Message_1 = __importDefault(require("./Message"));
exports.messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];
function addMessage(text, user) {
    const newMessage = new Message_1.default(text, user);
    exports.messages.push(newMessage);
}
