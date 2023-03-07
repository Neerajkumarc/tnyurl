const PORT = process.env.PORT || 3004;
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hi")
})
app.listen(PORT, () => {
    console.log("server started on ", PORT);
  });
  