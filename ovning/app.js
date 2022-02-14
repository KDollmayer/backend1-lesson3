const express = require("express")
const axios = require("axios")
const fs = require("fs")
const app = express()
const PORT = 3000


// app.get("/", (req, res, next) => {
//     const headers = { "User-Agent": "axios", "Accept": "text/plain" }

//     axios.get("https://icanhazdadjoke.com/", { headers: headers })
//         .then((response) => res.send(response.data))
//         .catch((err) => next(err))

// })


app.get("/", async (_req, res) => {
    const headers = { headers: { "User-Agent": "axios", "Accept": "text/plain" } };
    const response = await axios.get("https://icanhazdadjoke.com/", headers);
    res.send(response.data);
    
});

app.listen(PORT, () => {
    console.log(`Server up on Port ${PORT}`)
})