import { queryRetrieveFollowRequest } from '../../queries/retrieve/queryRetrieveFollowRequest.js';
export async function retrieveFollowRequest(req,res){
    try{
        let userId
        
        let results = await queryRetrieveFollowRequest(res.locals.tojwt.id)
        res.status(200).json(results);  
    } catch(e){
        console.log(e)
    }

}