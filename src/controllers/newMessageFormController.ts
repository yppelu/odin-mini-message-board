import { Request, Response } from 'express-serve-static-core';

const newMessageFormController = {
  get(req: Request, res: Response) {
    res.render('./pages/newMessageForm.ejs');
  },
  post(req: Request, res: Response) {
    res.end();
  }
};

export default newMessageFormController;
