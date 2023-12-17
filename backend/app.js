const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const corsErrors = require('./middlewares/corsErrors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(corsErrors);
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.listen(PORT);
console.log(`App listening on port ${PORT}`);
