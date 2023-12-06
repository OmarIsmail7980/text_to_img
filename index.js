const express = require("express");
const cors = require("cors");
const PORT = 8080;
const textToImage = require("./routes/txtToImg");

const app = express();
app.use(cors());
app.use("/toimg", textToImage);

app.listen(PORT,()=>{
    console.log(`Listening on PORT: ${PORT}`);
})

module.exports = app;