const express = require("express");
const app = express();
const port=4000;

app.get( "/",( req , res)=>{
    res.send(`Listen at Post ${port}`)
    });
    app.get( "/Home",( req , res)=>{
        res.send(`Hello At ${port}`)
        });
        app.get( "/Back",( req , res)=>{
            res.send(`Can You want to back from Port  ${port}`)
            });            
app.listen( process.env.Port ,()=>{
console.log(`Listen at Post ${port}`)
});

console.log("Hello");4