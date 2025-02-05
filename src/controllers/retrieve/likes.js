import { queryRetrieveLikes } from '../../queries/retrieve/queryRetrieveLikes.js';
export async function retrieveLikes(req,res){
    let {id} =req.params
    
    let idSearch=parseInt(id)
    try{
        
        let results = await queryRetrieveLikes(idSearch)
        
        res.status(200).json(results.length);  
        
        
    } catch(e){
        console.log(e)
    }

}