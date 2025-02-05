import { queryCommentPost } from '../queries/queryCommentPost.js';


export function commentPost(req,res){
    try{


                queryCommentPost(req.body.comment,req.body.postId,res.locals.tojwt.id)
                res.status(200).send({result:true})
            
        
    } catch(e){
        console.log(e)
    }

}