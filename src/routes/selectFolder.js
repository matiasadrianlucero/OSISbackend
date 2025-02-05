export async function selectFolder(req,res,next){
    console.log("body")
    console.log(req.body,req.body.asd)
    console.log("file")
    console.log(req.file)
    next()
}