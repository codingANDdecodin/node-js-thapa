
// we use IIFE function 
//when we create a module or variable in node that variable is private by default
// because node wrappe the code   export ,require,module,__filename,__dirname are parameters
//it invoke when run code

(function(exports,require,module,__filename,__dirname){
    const name="vinod";
    console.log(name);

})();

//console.log(name);