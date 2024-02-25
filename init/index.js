const mongoose = require("mongoose");
const initData =require("./data.js");
const Listing =require("../models/listing.js");



const ul = "mongodb://127.0.0.1:27017/wanderlust";


main()
.then(() => {
    console.log("connect to db")
})
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect(ul)
}



const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data)
    console.log("data was inited")

};

initDB();
