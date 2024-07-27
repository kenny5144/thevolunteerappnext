const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8080

appuse(cors())
app.get("/api/home", (req,res)=>{
    res.json(
        {
            message:"hello World "
        }
    )
})
app.listen(PORT ,()=>{
    console.log(`Server  is on ${PORT}`);
})