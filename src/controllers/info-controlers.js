const { statusCodes }=require("http-status-code");

const info=(req,res)=>{
    return res.status(statusCodes.OK).json({
        success:true,
        message:"Api is live",
        error:{},
        data:{}
    })
}
module.exports={
    info
}