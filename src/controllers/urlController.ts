import { Request, Response } from "express";
import Url from '../Schema/index';

const create = (req: Request, res: Response) => {
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
}

const redirect = (req: Request, res: Response) => {
    const name = req.params.routename;
	Url.findOne({ urlName: name }, (err: Error, url: any) => {
		if (err) {
			res.status(500).json({
				message: 'Error getting url',
				status: 500,
				error: err
			});
		} else {
			if (url) {
				res.redirect(url.urlToRedirect);
			} else {
				res.status(404).json({
					message: 'Url not found',
					status: 404
				});
			}
		}
	});
}

export {
    create,
    redirect
}