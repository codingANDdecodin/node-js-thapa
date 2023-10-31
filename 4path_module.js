const path=require("path");
console.log(path.dirname("C:/Users/dell/Desktop/javascript/node js/node js thapa/4path_module.js"));
// console.log(path.extname("C:/Users/dell/Desktop/javascript/node js/node js thapa/4path_module.js"));
 console.log(path.basename("C:/Users/dell/Desktop/javascript/node js/node js thapa/4path_module.js"));
var mypath=path.parse("C:/Users/dell/Desktop/javascript/node js/node js thapa/4path_module.js");
 console.log(mypath);
 console.log(typeof(mypath));
// console.log(mypath.name);
// console.log(mypath.root);
console.log(path.format(mypath)); //it will accept obj and return  path in string format
var p=path.join("C:/Users/dell/Desktop/javascript/node js/node js thapa","C:/Users/dell/Desktop/javascript/node js/node js thapa/3os_module.js");
console.log(path.delimiter);   //return (;) for window  user