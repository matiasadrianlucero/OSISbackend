
import { validationResult } from 'express-validator';
import {queryCheckEmailExists} from '../queries/checks/queryCheckEmailExists.js'

import { queryLogin } from '../queries/queryLogin.js';
export async function loginUser(req,res){
    const password = req.body.loginPassword;
    const email = req.body.loginEmail;

    const validationErrors = validationResult(req);
    let checkEmail=await queryCheckEmailExists(email)
    let loginResult
    if (validationErrors.isEmpty() && checkEmail==true) {
        loginResult =await queryLogin(email,password)
 
        res.status(200).json(loginResult)
        
    }  else {
        if(checkEmail==false){
            validationErrors.errors.push({msg:"This email doesn't exist in the database."})
        }
        loginResult=validationErrors
        res.status(200).json([loginResult])
    }
}


