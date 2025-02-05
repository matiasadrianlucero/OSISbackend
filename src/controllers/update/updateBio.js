import { queryUpdateBio } from '../../queries/queryUpdateBio.js';

export async function updateBio(req,res){
    try{
        const result = await queryUpdateBio(req.body.bio,res.locals.tojwt.id,res.locals.tojwt.email);
        return res.status(200).send({msg:"Bio updated"})

    }catch(err){
        return res.status(200).send({err:err})

    }



}