const fs= require('fs');

// fs.mkdir("new_folder",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("folder created");
//     }
// });


// fs.writeFile("./new_folder/aj.txt","my name is shri ram",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("data inserted");
//     }
// });


// fs.appendFile("./new_folder/aj.txt"," and he is my freind",(err)=>{
//     if(err) throw err;
//     else{
//         console.log("data appended");
//     }
// })


// fs.open("./new_folder/aj.txt",'w',(err)=>{   //w is flag represent writing mode
//     if(err) throw err;
//     else{
//         console.log("created");
//     }

// });

fs.rename("./new_folder/aj.txt","./new_folder/aji.txt",(err)=>{
      if(err) throw err;
      else{
        console.log("file rename succesfully");
      }
});