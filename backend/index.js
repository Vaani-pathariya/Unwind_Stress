const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const app=express();
const port = 3001;
app.use(cors());
mongoose.connect("mongodb+srv://vaani:vaani@cluster0.v6vzm0u.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(){
    console.log("Connected Successfully");
})
app.use (bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

app.listen(port,()=>console.log(`Hello world listening from port ${port}!`))