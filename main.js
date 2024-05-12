const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static("public"))
app.use(express.json())
const routeData = require('./routes/route')
const { parse } = require('path')

app.use("/api/products",routeData)


app.post("/node",(req,res)=>{
    const rec = req.body;
    if(rec.name!= ""){
        if(!rec){
            return res.status(400).send({status:"failed"})
        }
        res.status(200).send({status:"success"})

        let file = fs.readFileSync('uploads/res.json','utf-8')
        let parsedData;
        if(file==""){
            parsedData = []
        }
        else{
            parsedData = JSON.parse(file)
        }
        parsedData.push(rec)
        console.log(parsedData)

        /// writing file

        fs.writeFileSync('uploads/res.json',JSON.stringify(parsedData))
    }
})

// app.post("/node", (req, res) => { /// CHAT GPT ANSWER
//     const rec = req.body;
//     if (rec.name !== "") {
//         try {
//             let file = fs.readFileSync('uploads/res.json', 'utf-8');
//             let parsedData = file ? JSON.parse(file) : []; // Initialize as an empty array if file is empty
//             parsedData.push(rec);
//             console.log(parsedData);
//             // Write back to the file
//             fs.writeFileSync('uploads/res.json', JSON.stringify(parsedData));
//             res.status(200).send({ status: "success" });
//         } catch (err) {
//             console.error("Error reading/writing file:", err);
//             res.status(500).send({ status: "error", message: "Error reading/writing file" });
//         }
//     } else {
//         res.status(400).send({ status: "failed", message: "Name should not be empty" });
//     }
// });


let data = require('./uploads/res.json')

app.get('/main',(req,res)=>{
    res.send(data)
})


app.listen(3000,()=>{
    console.log('listening on port 3000')
})



