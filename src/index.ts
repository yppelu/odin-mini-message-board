import path from 'node:path';
import express from 'express';
import indexRouter from './routes/indexRouter';
import newMessageFormRouter from './routes/newMessageFormRouter';
import errorHandler from './controllers/errorHandler';

const PORT = 5000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessageFormRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', '404.html'));
});

app.use(errorHandler);

app.listen(PORT, () => 'Server is running');
