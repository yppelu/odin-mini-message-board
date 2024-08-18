import { Request, Response } from 'express-serve-static-core';
import { messages } from '../model/messages/messages';

const indexController = {
  get(req: Request, res: Response) {
    res.render('./pages/index.ejs', { title: 'Mini Message Board', messages });
  }
};

export default indexController;
