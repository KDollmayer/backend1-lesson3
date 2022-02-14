const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 3000

app.get("/", async (req, res, next) => {
    const headers = {"User-Agent": "axios", "Accept": "text/plain"}
    try{
        const response = await axios.get("https://icanhazdadjoke.com/123", {headers})
    res.send(response.data)
    } catch (error) {
        next(error)
    }
    
})

app.listen(PORT, () => {
    console.log(`Server up Port ${PORT}`)
} )