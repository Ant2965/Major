const express = require("express")
const mongoose = require("mongoose")
const app = express();
const Listing = require ("./models/listing.js")
const path =require("path")
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended: true}))
const url = "mongodb://127.0.0.1:27017/wanderlust"


main().then(() => {
    console.log("connect to db")
})
    .catch((err) => {
        console.log(err)
    })

async function main() {
    mongoose.connect(url)
}

app.get("/", (req, res) => {
    res.send("Hi i am root")
})


// app.get("/testlisting", async (req, res) => {
//     let samplelisting = new Listing({
//         title: "My new villa",
//         description: "by rhe beach",
//         price: 21000,
//         location: "calcultta",
//         country: "India"

//     })
//     await samplelisting.save();
//     console.log("sample data saved")
//     res.send("success test")
// })



app.get("/listings",async (req,res)=>{
  const alllisting= await Listing.find({})

  res.render("listings/index.ejs",{alllisting});
      
})




// show route


app.get("/listings/:id",async (req,res)=>{

    let{id}=req.params;
    const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});


})












app.listen(8069, () => {
    console.log("server on on 8069")
})