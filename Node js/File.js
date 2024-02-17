let file=require('fs')

file.writeFileSync("sample.txt","Hello friends welcome to the Node js")

console.log(file.readFileSync("sample.txt").toString());

file.unlinkSync("sample.txt")