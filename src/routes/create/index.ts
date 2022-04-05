import { Request, Response } from "express";
import Url from '../../Schema'
import express from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    const { urlName, urlToRedirect}= req.body;
    console.log(urlName, urlToRedirect);
    const url = new Url({
        urlName: urlName,
        urlToRedirect: urlToRedirect
    });
    url.save((err: Error) => {
        if (err) {
            res.status(500).json({
                message: 'Error saving url',
                status: 500,
                error: err
            })
        }else{
            res.status(200).json({
                message: 'Url saved successfully',
                status: 200,
                url: 'http://localhost:4000/' + urlName
            })
        }
    })
})

export default router;