setTimeout(() => {
    console.log("Done")
}, 2000, (null, "hello"))


const timeout = new Promise ((resolve, reject) =>{ 
     setTimeout(args => {
         resolve("Done Waiting")
        }, 3000)
})

timeout.then(data => {
    console.log(data)
})

