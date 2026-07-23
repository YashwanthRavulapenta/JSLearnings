const fs = require('fs')
fs.writeFile("demo.txt","hello yashwanth",(err)=>{
    if(err) throw err
    console.log("file created and written")
})

fs.readFile()