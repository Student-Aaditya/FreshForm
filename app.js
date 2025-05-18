
require("dotenv").config();
const express=require("express");
const app=express();
const port=6055;
const path=require("path");
const mongoose=require("mongoose");
const Feedback=require("./Model/user.js");
const MongoURL=process.env.MONGO;
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
    .then(() => {
        console.log("Successful connection");
    })
    .catch((err) => {
        console.log(err);
    });

    async function main() {
        try {
            await mongoose.connect(MongoURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,   
                serverSelectionTimeoutMS: 10000, 
                socketTimeoutMS: 45000,    
            });
            console.log("Connected to MongoDB");
        } catch (err) {
            console.error("Error connecting to MongoDB:", err);
        }
    }
    
    
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit-data",async(req,res)=>{
    const {name,mobile,rating, issue,interests,deliveryTiming,suggestion} = req.body;
    let data=new Feedback({
        name:name,
        mobile:mobile,
        rating:rating,
        issue:issue,
        interests:interests,
        deliveryTiming:deliveryTiming,
        suggestion:suggestion,
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