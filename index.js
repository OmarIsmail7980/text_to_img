const express = require("express");
const cors = require("cors");
const PORT = 8080;
const textToImage = require("./routes/txtToImg");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/toimg", textToImage);

app.get("/", (req,res)=>{
    res.send("server is up and running")
})

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}`);
})

module.exports = app;