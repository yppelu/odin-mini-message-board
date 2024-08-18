import { Router } from 'express';
import indexController from '../controllers/indexController';

const indexRouter = Router();

indexRouter.get('/', indexController.get);

export default indexRouter;
