import { queryFindUsers } from '../queries/queryFindUsers.js';

export async function findUser (req, res) {
    const username = req.params.username;
    let results = await queryFindUsers(username);
    res.status(200).json(results);
}