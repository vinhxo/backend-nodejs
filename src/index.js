const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

let server;

mongoose.connect(config.moogoose.url, config.moogoose.options).then(() => {
    logger.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
        logger.info(`Listening to port ${config.port}`);
    });
});