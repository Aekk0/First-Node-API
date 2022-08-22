// Import Third-Party Dependencies
import { NextFunction, Request, Response } from 'express';

exports.giveTime = function(req: Request, res: Response, next: NextFunction) {
    console.log('Time:', Date.now());
    next();
};