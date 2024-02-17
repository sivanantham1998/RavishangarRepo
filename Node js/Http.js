let server=require('http')

let link=server.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.write("Hello")
        res.end()
    }
    else if(req.url=="/login")
    {
        res.write("Login form created")
        res.end()
    }
    
})

link.listen(1000)
console.log("server running")
