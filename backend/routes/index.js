const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const { postUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { linkVerify } = require('../utils/regexFunc');
const NotFoundError = require('../stat_code_errors/NotFoundError');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(linkVerify),
  }),
}), postUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), login);

router.use('/users', auth, usersRouter);
router.use('/cards', auth, cardsRouter);

router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Not Found'));
});

module.exports = router;
