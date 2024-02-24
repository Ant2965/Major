const express =require("express")
const mongoose= require("mongoose")
const app = express();


const url = "mongodb://127.0.0.1:27017/wanderlust"


main().then(()=>{
    console.log("connect to db")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    mongoose.connect(url)
}

app.get("/",(req,res)=>{
    res.send("Hi i am root")
})

app.listen(8082,()=>{
    console.log("server on on 8081")
})