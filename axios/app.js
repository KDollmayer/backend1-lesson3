 const axios = require("axios")

 const headers = {"User-agent": "axios", "Accept": "text/plain"}

 axios
 .get("https://icanhazdadjoke.com/", {headers: headers})
 .then(res => { 
     console.log(res.data)
    return axios.get("https://icanhazdadjoke.com/", {headers: headers})
    //  return res.data
 })
 .catch(err => { 
     console.error("Somethiin went wrong", typeof err)
    
    })
 .then(res => {
     console.log("THEN, again", res.data)
     return res.data
 })
 .then(res =>{
     console.log("NO  3", res)
     return res
 })
 .then(res => {
     console.log("no 4444 ", res)
 })