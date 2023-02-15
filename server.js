const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();


var corOptions = {
    origin: 'https://localhost:8080'
}

// middlewares
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors(corOptions));


//routers
const router = require('./routes/routes.js')
app.use('', router);



//testing api
app.post('/healthCheck', (req, res) => {
    res.json(req.body)
})



//port
const PORT = process.env.PORT || 8080


//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})






