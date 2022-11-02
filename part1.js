const child_process1= require("child_process");
const child_process2= require("child_process");


console.log("1: Start");
const newProcess1= child_process1.spawn("node",
["fibonacci33.js"], {stdio : "inherit"});
//require("./fibonacci33");
console.log("2: End");


console.log("1: Start");
const newProcess2= child_process2.spawn("node",
["fibonacciminus30.js"], {stdio : "inherit"});
//require("./fibonacciminus30");
console.log("2: End");