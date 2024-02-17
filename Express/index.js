let express=require('express')
let app=express();
let port=1200;
let bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:true}))

let name="Ravishangar"

let person={
    name:'Siva',
    address:'Erode',
    age:26
}

let ar=[]

app.get("/",function(req,res)
{
    // res.send(`<h1>Welcome to Express Js</h1>`)
    res.render('index.ejs',{user:name,detail:person,arr:ar})
})

app.post("/",function(req,res)
{
   ar.push(req.body.name)
   res.redirect("/")
}
)
app.get("/register",function(req,res)
{
    res.sendFile(__dirname+"/Register.html")
})

app.listen(port)
console.log(`${port} running`)
