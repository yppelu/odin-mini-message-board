"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const newMessageFormRouter_1 = __importDefault(require("./routes/newMessageFormRouter"));
const errorHandler_1 = __importDefault(require("./controllers/errorHandler"));
const PORT = 5000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', node_path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(node_path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', indexRouter_1.default);
app.use('/new', newMessageFormRouter_1.default);
app.get('*', (req, res) => {
    res.render('./pages/404');
});
app.use(errorHandler_1.default);
app.listen(PORT, () => 'Server is running');
