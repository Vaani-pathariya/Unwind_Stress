const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const port = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(port,()=>console.log(`hello world listening on port: ${port}`))