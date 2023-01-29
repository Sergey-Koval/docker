const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const fetch = require("node-fetch");
const RAND_HOST = process.env.RANDOM_HOST;
const port = process.env.PORT || 6060;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello from Rendomizer!")
})

app.post('/random', (req, res) => {
    const key = req.body;
    res.send({result: key});    
    
});


app.get('/get', (req, res) => {
fetch(`http://${RAND_HOST}:5000/random`, {
        method: "GET",
    })
        .then(resp=>resp.json())
        .then(data=>{
	    console.log(data)
	    num = Math.pow(Number(data.number), 2)
            res.send({number: num});
        })
        .catch(err=>console.log("err: ", err))
});
  
app.listen(port, function () {
    console.log(`Randomaizer listening on port ${port}!`);
});
