
import { queryRetrieveFollowers } from '../../queries/retrieve/queryRetrieveFollowers.js';


export async function retrieveFollowers(req,res){
    
    let id=req.params.id
    try{        
        let results= await queryRetrieveFollowers(parseInt(id))
        res.status(200).send(results)
    } catch(e){
        console.log(e)
    }

}