import { queryRetrieveExplore } from '../../queries/retrieve/queryRetrieveExplore.js';
export async function retrieveExplore(req,res){
    try{        
        let postsList = await queryRetrieveExplore()
        res.status(200).send({postsList:postsList})
    } catch(e){
        console.log(e)
    }

}