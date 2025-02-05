import { validationResult } from 'express-validator';
import {queryCheckEmailExists} from '../queries/checks/queryCheckEmailExists.js'
import {queryCheckUsernameExists} from '../queries/checks/queryCheckUsernameExists.js'
import { queryRegister } from '../queries/queryRegister.js';
export async function registerUser(req,res){
    const username = req.body.registerUsername;
    const password = req.body.registerPassword;
    const email = req.body.registerEmail;
    const validationErrors = validationResult(req);
    let checkEmail=await queryCheckEmailExists(email)
    let checkUsername=await queryCheckUsernameExists(username)

    if (validationErrors.isEmpty() && checkUsername==false && checkEmail==false) {
        queryRegister(username,email,password)
        return res.status(200).json({errors: [{msg: "Registration successful."}]})
    } else {
        if(checkUsername){
            validationErrors.errors.push({ msg: "Username is occupied." });
        }
        if(checkEmail){
            validationErrors.errors.push({ msg: "Email is occupied." });
        }
        return res.status(200).json(validationErrors)
    }
}