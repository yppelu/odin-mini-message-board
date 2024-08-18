import { Request, Response } from 'express-serve-static-core';

const indexController = {
  get(req: Request, res: Response) {
    res.render('./pages/index.ejs');
  }
};

export default indexController;
