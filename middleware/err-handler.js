// middlware that handle error
export const errorHandlerMiddlware =(err,req,res,next)=>{
    // !return res.status(500).json({msgOFerr:err}) 
    // resultat of err will be big so use this 
    return res.status(500).json({msgOFerr:'somthing went wrong, try again later ... '})  
}