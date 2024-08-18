"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newMessageFormController_1 = __importDefault(require("../controllers/newMessageFormController"));
const newMessageFormRouter = (0, express_1.Router)();
newMessageFormRouter.get('/', newMessageFormController_1.default.get);
newMessageFormRouter.post('/', newMessageFormController_1.default.post);
exports.default = newMessageFormRouter;
