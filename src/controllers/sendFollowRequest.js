import { queryCheckFollowRequestsExists } from '../queries/checks/queryCheckFollowRequestsExists.js';
import { queryCreateFollowRequest } from '../queries/queryCreateFollowRequest.js';


export async function sendFollowRequest(req,res,next){
    try{
        let checkRequestExists= await queryCheckFollowRequestsExists(res.locals.tojwt.id,req.body.id)
        if(checkRequestExists==false){
            queryCreateFollowRequest(res.locals.tojwt.id,req.body.id)
            res.sendStatus(200)

        } else {
            res.sendStatus(403)
        }

    } catch (err){
        console.log(err)
    }

}