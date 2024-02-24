const mongoose = require("mongoose");

const schema = mongoose.Schema;


const listingschema = new schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image:  {
        type: String,
        default: "https://unsplash.com/photos/green-plants-on-brown-concrete-building-KLOW1bD616Y",
        set: (v)=> v === "" ? "https://unsplash.com/photos/green-plants-on-brown-concrete-building-KLOW1bD616Y" : v,
    },
    price: Number,
    location: String,
    country: String
})


const Listing = mongoose.model("Listing", listingschema);

module.exports= Listing;