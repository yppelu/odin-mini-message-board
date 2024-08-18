import path from 'node:path';
import express from 'express';
import indexRouter from './routes/indexRouter';
import newMessageFormRouter from './routes/newMessageFormRouter';

const PORT = 5000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newMessageFormRouter);

app.listen(PORT, () => 'Server is running');
