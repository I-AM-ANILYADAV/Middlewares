const express= require("express");
const app = express();
const ExpressError = require("./ExpressError")
const port= 8080;

// app.use((req,res ,next)=>{
//     console.log("Hi , I am 1st middlewares");
//      next();
// })
// app.use((req,res ,next)=>{
//     console.log("Hi , I am 2nd middlewares");
//     next();

// })

//Logger - Morgan
// app.use((req, res ,next) =>{
//     req.time =new Date(Date.now()).toString();
//     console.log(req.method, req.hostname , req.path ,req.time);
//     next();
// })
const checkToken = (req, res ,next)=>{
    let{token}= req.query;
    if (token === "giveaccess"){
        next();
    }
    else{
        throw new ExpressError(401 ,"Access Denied");
    }


};
app.get("/api", checkToken ,(req,res)=>{
    res.send("Data");
})

app.get("/",(req, res) =>{
    res.send("Hi , I am root");
})




app.get("/random", (req, res) =>{
    res.send("this is a random page")
})

app.get("/wrong" ,(req, res) =>{
    abcd =abcd;
})

app.get("/admin" ,(req,res)=>{
    throw new ExpressError(403 ,"Access to admin is Forbidden");
})

app.use((err ,req, res, next)=>{
    let {status , message} = err
    res.status(status).send(message);
})

// app.use((req,res)=>{
//     res.send("Page not found");
// })
app.listen(port,(res,req) =>{
    console.log("Server listening on port 8080");
})