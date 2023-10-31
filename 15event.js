const EventEmitter=require("events");

const event= new EventEmitter();

event.on("saymyname",()=>{
    console.log("hii i know U, u R rohan");
});

event.on("saymyname",()=>{
    console.log("hii i know u, U R pradip");
});

event.on("saymyname",()=>{
    console.log("hii i know U , U R sushil");
});

//we can add multiple listner on same event
event.emit("saymyname");

//we can pass paramteer for listner

event.on("cheakpage",(sc,msg)=>{
    console.log(`status code is ${sc} and massage is ${msg}`);
}); 

//we call event and pass argument
event.emit("cheakpage",24,"ok");