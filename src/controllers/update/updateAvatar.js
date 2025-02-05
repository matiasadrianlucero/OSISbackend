import { queryUpdateAvatar } from '../../queries/update/queryUpdateAvatar.js';

export async function updateAvatar(req,res){
    try{
        queryUpdateAvatar(req.file.filename,res.locals.tojwt.email)
            
        return res.status(200).send({msg:"Avatar updated",newName:req.file.filename})

    } catch (err){
        console.log(err)
    }

}