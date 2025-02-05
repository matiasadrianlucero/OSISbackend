
import { queryCreatePost } from '../queries/queryCreatePost.js';


export function createPost(req,res){
    try{

        queryCreatePost(req.body.postText,
            req.body.postImg,
            res.locals.tojwt.id,
            req.body.visibility)

            res.sendStatus(200)

    } catch(e){
        console.log(e)
    }

}