const fs=require("fs");
const http=require("http");


//create server and stor in server variable
const server=http.createServer();

//apply request  event on server
server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("newjson.txt");  
    rstream.pipe(res);    //send response to server ,no nees to write "res.write()" we simply write "res inside pipe method"
});
server.listen(8000,"localhost");