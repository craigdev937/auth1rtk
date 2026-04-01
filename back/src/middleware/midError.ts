import express from "express";

class ErrorInfo {
    notFound: express.Handler = (req, res, next) => {
        const error: Error = new Error(`
            Not Found = ${req.originalUrl}
        `);
        res.status(404);
        next(error);
    };

    errHandler: express.ErrorRequestHandler =
    (error, req, res, next) => {
        let statucCode = req.statusCode === 200 ?
            500 : res.statusCode;
        let message = error.message;
        res
            .status(statucCode)
            .json({
                success: false,
                message: message,
                stack: error.stack
            });
        next(error);
    };
};

export const ERR: ErrorInfo = new ErrorInfo();


