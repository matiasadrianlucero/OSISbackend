import { queryRetrieveFollowList } from '../../queries/retrieve/queryRetrieveFollowList.js';

import { queryRetrievePosts } from '../../queries/retrieve/queryRetrievePosts.js';

export async function retrieveFeed(req,res){
    
    let lastDate=req.headers['lastdate']
    try{
        
        let resultsFollowList = await queryRetrieveFollowList(res.locals.tojwt.id)
        
        let listArr=[]
        listArr.push(res.locals.tojwt.id)
        resultsFollowList.forEach((async (result) => {
            if(result.response=='accepted'){
                listArr.push(result.sentToId)
            }
            
        }
        ))
        let postsList = await queryRetrievePosts(listArr,lastDate)
        res.status(200).send({postsList:postsList,followList:resultsFollowList})
    } catch(e){
        console.log(e)
    }

}