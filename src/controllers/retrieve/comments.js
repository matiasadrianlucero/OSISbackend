import { queryRetrieveComments } from '../../queries/retrieve/queryRetrieveComments.js';
export async function retrieveComments(req,res){
    let {id} =req.params
    
    let int=parseInt(id)
    try{
        
        let results = await queryRetrieveComments(int)
        
        
        res.status(200).json(results);  
    } catch(e){
        console.log(e)
    }

}