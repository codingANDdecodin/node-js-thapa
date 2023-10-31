const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    fs.readFile("./package.json","utf-8",(err,data)=>{
        if(err) throw err;
        jdata=data;
    });

    if(req.url=="/detail"){
        res.writeHead(200,{"content-type":"application/JSON"});
        res.end(jdata);
    }
}).listen(8000);

//to lern this code follow 14fist_API.txt


