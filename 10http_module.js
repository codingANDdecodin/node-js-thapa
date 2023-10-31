const http=require("http");

const server=http.createServer((req,res)=>{

    //write method send resposne but we have to also close the res so we use end() it will end the response plus send response 
    //res.write("hii i am u r server");
    res.end("hii i am u r server use end()");
});
server.listen(8000,"localhost",()=>{
    console.log("listning......")
});