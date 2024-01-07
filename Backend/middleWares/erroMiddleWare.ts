import { Request, Response, NextFunction } from 'express'
module.exports = function errorMiddleWare(err: any, req: Request, res: Response, next: NextFunction) {
	res.status(err.status).send({
		error: true,
		message: err.message,
	})
}
