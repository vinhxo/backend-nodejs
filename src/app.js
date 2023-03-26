
const express = require('express')
const webRouter = require('./routes/web');
const routes = require('./routes/v1');
const { errorHandler, errorConverter } = require('./middleware/error')

const app = express() // app express
// //config template
// configViewEngine(app);
app.use(express.json()); // Used to parse JSON bodies
// app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))
// app.use('/', webRouter);
// app.use('/new-user', webRouter);
// app.use('/create-user', webRouter);

// v1 api router
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// converter error
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;