 const os=require("os");

console.log(os.arch()); //return version of oprating system
console.log(os.hostname());    //desktop ch je nav aahe te return krnar
console.log(os.platform());    //o/p= win32/linux/freebsd
console.log(os.tmpdir());      //we can seen our temp folder location
console.log(os.type());         //trturn our oprating system name

const freememory=os.freemem();
console.log(`${freememory}`);     //it will return amount of free memory in our system
console.log(`${freememory/1024/1024/1024}`); //here convrt it into GB


const totalMemory=os.totalmem();       //return our total memory of system
console.log(totalMemory);
console.log(`${totalMemory/1024/1024/1024}`);

