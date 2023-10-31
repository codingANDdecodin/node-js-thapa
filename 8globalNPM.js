const chalk=require("chalk");
const validator=require("validator");

const res=validator.isEmail("vaibhav00@gmail.com");
console.log(res ? chalk.green("true"):chalk.red("false"));

