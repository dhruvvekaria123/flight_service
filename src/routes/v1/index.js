const express=require("express");
const router=express.Router();
const {Infocontrolers}=require('../../controllers')

router.get('/info',Infocontrolers.info);

module.exports=router;