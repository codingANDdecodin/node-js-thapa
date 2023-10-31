const fs=require("fs");
const http=require("http");

const server=http.createServer();



server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("newjson.txt");
        
    rstream.on("data",(chunkdata)=>{                     //u can write data inside callback
        res.write(chunkdata);
    });

    rstream.on("end",()=>{
        res.end();
    });

    rstream.on("error",(err)=>{
        console.log(err);
        res.end("file not exist");
    });

});


server.listen(8000,"localhost");