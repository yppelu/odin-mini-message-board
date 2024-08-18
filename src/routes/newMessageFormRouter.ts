import { Router } from 'express';
import newMessageFormController from '../controllers/newMessageFormController';

const newMessageFormRouter = Router();

newMessageFormRouter.get('/', newMessageFormController.get);
newMessageFormRouter.post('/', newMessageFormController.post);

export default newMessageFormRouter;
