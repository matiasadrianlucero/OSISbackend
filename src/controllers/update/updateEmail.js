import {  validationResult } from 'express-validator';
import {queryCheckEmailExists} from '../../queries/checks/queryCheckEmailExists.js'
import { queryUpdateEmail } from '../../queries/update/queryUpdateEmail.js';

import jwt from 'jsonwebtoken'

export async function updateEmail(req,res){
    try{
        let checkEmail= await queryCheckEmailExists(req.body.updateEmail)

        const validationErrors = validationResult(req);
        if(checkEmail==false && validationErrors.isEmpty()){
            queryUpdateEmail(req.body.updateEmail,res.locals.tojwt.email)
            return res.status(200).send({msg:"Email updated, please log in again."})
    
        } else {
            if(!validationErrors.isEmpty()){
                return res.status(200).send({msg:"Invalid email"})
            } else {
                return res.status(200).send({msg:"Email is occupied"})
            }
        }        
    } catch($e){
        console.log($e)
    }

        
}

