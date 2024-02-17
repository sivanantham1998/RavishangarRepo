let express=require('express')
let app=express()
let mongoose=require('mongoose')
const cors=require('cors')
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173'
}))
mongoose.set("strictQuery",true)
mongoose.connect('mongodb+srv://ravi:ravi@cluster0.fxpqzae.mongodb.net/raviShangar?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let collection=mongoose.model("stu_info",mongoose.Schema({
    name:String,
    age:Number
}))


app.get("/",async function(req,res)
{
    let view=await collection.find();
    res.json(view)
})
app.post("/",async function(req,res)
{
    let store=await collection(
        {
            name:req.body.name,
            age:req.body.age
        }
    )
    store.save()
    res.json(store)
    
})

app.get("/:id",async(req,res)=>{
    let {id}=req.params
    let user=await collection.findById(id)
    res.json(user)
})

app.put("/:id",async(req,res)=>{
    let {id}=req.params;
    let user=await collection.findById(id)
    user.name=req.body.name;
    user.age=req.body.age;
    user.save()
    res.json(user)
})
app.delete("/:id",async(req,res)=>{
    let {id}=req.params
    await collection.findByIdAndDelete(id)
    res.json("id deleted")
})

app.listen(2000)
console.log('server running')