// to simplif code and remove try catch bloc from controller
export const asyncWrapper = (fctn) => {
    return async(req,res,next)=>{
        try{
            await fctn(req,res,next)
        }catch(error){
            next(error)
        }
    }
}