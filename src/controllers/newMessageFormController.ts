import { Request, Response } from 'express-serve-static-core';
import { addMessage } from '../model/messages/messages';

const newMessageFormController = {
  get(req: Request, res: Response) {
    res.render('./pages/newMessageForm.ejs', { title: 'Add New Message' });
  },
  post(req: Request, res: Response) {
    addMessage(req.body.user, req.body.text);
    res.redirect('/');
  }
};

export default newMessageFormController;
