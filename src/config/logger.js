const winston = require('winston');
const config = require('./config');

const enumerateErrorFormat = winston.format((info) => {
  // nếu log là error hiển thị stack trace còn không hiển thị message của log
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',

  // format của log được kết hợp thông qua format.combine
  format: winston.format.combine(
    enumerateErrorFormat(),

    // thêm màu sắc
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    // thiết lập định dạng của log
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    // hiển thị log thông qua console
    new winston.transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});

module.exports = logger;
