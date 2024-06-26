


const express = require('express')
const cors = require('cors')
const route = require('./src/routes')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
route(app)


const PORT = 3000;
const HOST = '192.168.1.5';

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});






