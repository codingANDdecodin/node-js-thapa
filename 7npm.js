  const chalk = require("chalk");

// const { default: chalk } = require("chalk");

// console.log(chalk.blue.bgred("hii i am U R brother"));

//  import chalk from "chalk";


const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
