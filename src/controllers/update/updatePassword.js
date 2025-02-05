import {  validationResult } from 'express-validator';
import { queryUpdatePassword } from '../../queries/update/queryUpdatePassword.js';

export async function updatePassword(req,res){

    try{
        const validationErrors = validationResult(req);

        if(validationErrors.isEmpty()){
            let result = await queryUpdatePassword(req.body.updatePasswordUpdate,req.body.updatePasswordCurrent,res.locals.tojwt.email)
            return res.status(200).send({msg:result})
        }               
        return res.status(200).send({msg:"Invalid password"})

    } catch($e){
        console.log($e)
    }

}