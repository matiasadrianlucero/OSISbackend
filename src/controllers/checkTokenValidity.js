import jwt from 'jsonwebtoken'

export default  async function checkTokenValidity(req,res){
        jwt.verify(req.token, '?', (err, authorizedData) => {
          if(err){
              res.status(200).send({result:false})
          } else {
              res.status(200).send({result:true})
          }
        })
      
}
