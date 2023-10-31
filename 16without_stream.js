const fs=require("fs");
const http=require("http");

const server=http.createServer();

server.on("request",(req,res)=>{
    fs.readFile("./newjson.txt","utf-8",(err,data)=>{
        if(err) throw err;
        res.end(data);
    });
});
server.listen(8000,"localhost");