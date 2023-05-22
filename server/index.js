const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const  PORT = process.env.PORT || 4040;

// app.use("/api/v1", routes)
// app.get("/api/contacts", (req,res)=>{
//   res.json({message: "get out" })
// })


app.listen(PORT, () => {
    console.log('runnig', PORT)
  })