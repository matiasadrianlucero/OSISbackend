import { queryCheckIfLiked } from '../queries/checks/queryCheckIfLiked.js';

export async function checkIfLiked(req,res){
    try{

        let postId=parseInt(req.params.postId)
        
        let results = await queryCheckIfLiked(postId,res.locals.tojwt.id)
        if(results!==false){
            res.status(200).json({results:true})
        } else {
            res.status(200).json({results:false})
        }
                
            
    } catch(e){
        console.log(e)
    }
}