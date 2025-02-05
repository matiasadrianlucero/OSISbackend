import {queryRespondFollowRequest} from '../queries/queryRespondFollowRequest.js'


export async function respondFollowRequest(req,res,next){
    let requestId=req.body.requestId
    let response=req.body.response
    if(response!='accepted' && response!='denied'){
        res.status(400).send("Invalid response")
    }
    try{

        let userId=res.locals.tojwt.id
        queryRespondFollowRequest(requestId,response,userId)
        res.sendStatus(200)
    

    } catch (err){
        console.log(err)
    }

}