require('dotenv').config();

const configViewEngine = require('./config/viewEngine')
const express = require('express')
const path = require('path')
const app = express() // app express
const webRouter = require('./routes/web');
const connection = require('./config/database')

const port = process.env.PORT //port
const hostname = process.env.HOST_NAME

//config template
configViewEngine(app);

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use('/', webRouter);
app.use('/new-user', webRouter);
app.use('/create-user', webRouter);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
