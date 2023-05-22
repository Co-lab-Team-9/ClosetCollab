const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const  PORT = 4040;

// app.use("/api/v1", routes)


app.listen(PORT, () => {
    console.log('runnig', PORT)
  })