import { queryUnfollowUser } from '../queries/queryUnfollowUser.js';

export async function unfollowUser(req,res,next){
    
    try{        
        let checkRequestExists= await queryUnfollowUser(res.locals.tojwt.id,req.body.id,req.body.requestId)
        res.status(200).send("User unfollowed.")
    } catch (err){
        console.log(err)
    }

}