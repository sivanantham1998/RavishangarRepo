const { log } = require("console");
let system=require("os")

console.log(system.homedir());
console.log(system.hostname());
console.log(system.version());
console.log(system.userInfo());
console.log(system.uptime());

// local module
let name="Siva"
let address="Erode"

function sample()
{
    console.log("function working");
}

module.exports={user:name,myfun:sample}

console.log("Hai welcome");