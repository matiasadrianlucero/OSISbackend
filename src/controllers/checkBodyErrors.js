import { validationResult } from 'express-validator';

export default async function checkBodyErrors(req,res,next){
    const validationErrors = validationResult(req);
    if(validationErrors.isEmpty()){
        next()
    } else {
        return res.status(400).send({validationErrors:validationErrors})
    }
}