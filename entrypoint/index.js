const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const fetch = require("node-fetch");
const POW_HOST = process.env.POW_HOST;
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'pug');

app.get('/result', (req, responsive) => {
    const key = req.body.number;
    let result = 0;

    fetch(`http://${POW_HOST}:6060/get`, {
        method: "GET",
    })
        .then(resp=>resp.json())
        .then(data=>{
	    console.log(data.number)
            responsive.send(`Your result is: ${data.number}`);
        })
        .catch(err=>console.log("err: ", err))
});
  
app.listen(port, function () {
    console.log(`View listening on port ${port}!`);
});
