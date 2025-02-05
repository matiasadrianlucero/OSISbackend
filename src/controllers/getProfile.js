import { queryProfileData } from '../queries/queryProfileData.js';
import { queryProfilePosts } from '../queries/queryProfilePosts.js';
import { queryRetrieveFollowers } from '../queries/retrieve/queryRetrieveFollowers.js';
import { queryRetrieveFollowList } from '../queries/retrieve/queryRetrieveFollowList.js';
import { queryCheckIfFollowing } from '../queries/checks/queryCheckIfFollowing.js';

export async function getProfile(req,res){
    try{
        const username = req.params.username;

        let profileResults= await queryProfileData(username)
        
        let profileId=profileResults.id
        let profilePosts= await queryProfilePosts(profileId)
        let followersData= await queryRetrieveFollowers(profileId)
        let followingData= await queryRetrieveFollowList(profileId)
        let checkIfFollowing= await queryCheckIfFollowing(res.locals.tojwt.id,profileId)
        
        res.send({profileData:profileResults,profilePosts:profilePosts,followersData:followersData,followingData:followingData,checkIfFollowing:checkIfFollowing})

    } catch (err){
        console.log(err)
    }

}