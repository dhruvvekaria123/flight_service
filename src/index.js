const { ServerConfig }=require('./config');
const express=require("express");
const apiroutes=require('./routes');

const app=express();

app.use('/api',apiroutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully started server ${ServerConfig.PORT}`);
})