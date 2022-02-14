fs = require("fs")


fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log(data)

    // if (err) {
        //console.error("error", err)

    // kan använda return istället för else
        //} else {
            //console.log(data)
       // }
})

//error handling 

const foo = {bar: {baz: "foobar"}}

try{
 console.log(foo.bar.baz)
} catch (error){
    console.error("Wrong", error)
}


console.log("Hej!")