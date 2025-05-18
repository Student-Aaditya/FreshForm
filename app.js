
require("dotenv").config();
const express=require("express");
const app=express();
const port=6055;
const path=require("path");
// const mongoose=require("mongoose");
// const User=require("./model/user.js");
// const MongoURL=process.env.MongoURL;
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// main()
//     .then(() => {
//         console.log("Successful connection");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     async function main() {
//         try {
//             await mongoose.connect(process.env.MongoURL, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                 serverSelectionTimeoutMS: 10000, 
//                 socketTimeoutMS: 45000,         
//             });
//             console.log("Connected to MongoDB");
//         } catch (err) {
//             console.error("Error connecting to MongoDB:", err);
//         }
//     }
    
    
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit-data",async(req,res)=>{
    let {username,gender,city,fav_book,website_name,website_problem,current_book}=req.body;
    let data=new User({
        username:username,
        gender:gender,
        city:city,
        fav_book:fav_book,
        current_book:current_book,
        website_name:website_name,
        website_problem:website_problem,
    });

    try{
        await data.save();
        console.log(data);
        console.log("data saved");
        res.render("data.ejs");
    }catch(err){
        console.log(err);
    }

})

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})