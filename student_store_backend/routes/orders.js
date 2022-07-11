const express = require('express');
const router = express.Router();
const Order = require('../models/orders');
const User = require('../models/user');
const { requireAuthenticatedUser } = require('../middleware/security');
const { BadRequestError } = require('../utils/errors');

router.get('/', requireAuthenticatedUser, async (req, res) => {
  const { email } = res.locals.user;
  const user = await User.fetchUserByEmail(email);
  const orders = await Order.listOrdersForUser(user.id);
  res.status(200).json({ orders });
});

router.post('/', requireAuthenticatedUser, async (req, res) => {
  if (!req.body?.order) {
    throw new BadRequestError('Missing order');
  }
  console.log(req.body);
  const { email } = res.locals.user;
  const user = await User.fetchUserByEmail(email);
  const order = await Order.createOrder(user, req.body.order);
  res.status(201).json({ order });
});

module.exports = router;
