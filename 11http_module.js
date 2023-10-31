const http=require("http");

const server=http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url=="/"){
        res.end("hii i am u r server use in home");
    }else if(req.url=="/contact"){
        res.end("hii i am u r server use an i contact");
    }else{
        res.writeHead(404,'{"Content-type":"text/html"}');
        res.end("<h2>page does not exist</h2>");
    }
   
});
server.listen(8000,"localhost",()=>{
    console.log("listning......")
});

