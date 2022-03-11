import { Request, Response } from "express";
import Url from '../../Schema'

export default (req: Request, res: Response) => {
    const name = req.params.routename;
    Url.findOne({urlName: name}, (err: Error, url: any) => {
        if (err) {
            res.status(500).json({
                message: 'Error getting url',
                status: 500,
                error: err
            })
        }else{
            if (url) {
                res.redirect(url.urlToRedirect);
            }else{
                res.status(404).json({
                    message: 'Url not found',
                    status: 404
                })
            }
        }
    })
}