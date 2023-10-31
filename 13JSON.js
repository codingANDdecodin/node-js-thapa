const bioData={
    name :"vikas",
    age:222,
    channel:"jquery"
};


const json_data=JSON.stringify(bioData);  //convert obj to json
//console.log(json_data);

const fs=require("fs");
fs.writeFile("./newjson.txt",json_data,(err)=>{
    if(err) throw err;
    else{
        console.log("data enter successfully");
    }
});

fs.readFile("./newjson.txt","utf-8",(err,data)=>{
    if(err) throw err;
    
    console.log(JSON.parse(data));       //convert json to obj

});
