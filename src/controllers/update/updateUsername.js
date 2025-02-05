import {  validationResult } from 'express-validator';
import {queryCheckUsernameExists} from '../../queries/checks/queryCheckUsernameExists.js'
import { queryUpdateUsername } from '../../queries/update/queryUpdateUsername.js';

export async function updateUsername(req,res){
    try{
        let checkUsername= await queryCheckUsernameExists(req.body.updateUsername)

        const validationErrors = validationResult(req);
        
        if(checkUsername==false && validationErrors.isEmpty()){
            
            queryUpdateUsername(req.body.updateUsername,res.locals.tojwt.username)
            return res.status(200).send({msg:"Username updated"})
        } else {
            return res.status(200).send({msg:"Username is occupied"})
        }
        
    } catch($e){
        console.log($e)
    }

}

