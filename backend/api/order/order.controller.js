const orderService = require('./order.service.js');
const logger = require('../../services/logger.service')


async function getOrders(req, res) {
  try {
    let filterBy = req.query;

    // filterBy = JSON.parse(filterBy);
    const orders = await orderService.query(filterBy);

    res.json(orders);
  } catch (err) {
    // console.log(err);
    logger.error('Failed to get orders', err);
    res.status(500).send({ err: 'Failed to get orders' });
  }
}

async function getOrderById(req, res) {
  try {
    const orderId = req.params.id;
    await orderService.getById(orderId);
    res.json('Success!');
  } catch (err) {
    logger.error('Failed to get order', err);
    res.status(500).send({ err: 'Failed to get order' });
  }
}

async function addOrder(req, res) {
  try {
    const order = req.body;
    console.log(req.session.user);
    const buyer = req.session.user;
    const addedOrder = await orderService.add(order, buyer);
    console.log(addedOrder);
    res.json(addedOrder);
  } catch (err) {
    logger.error('Failed to add order', err);
    res.status(500).send({ err: 'Failed to add stay' });
  }
}

async function updateOrder(req, res) {
  try {
    const order = req.body;

    const updatedOrder = await orderService.update(order);
    res.json(updatedOrder);
  } catch (err) {
    logger.error('Failed to update order', err);
    res.status(500).send({ err: 'Failed to update order' });
  }
}

async function removeOrder(req, res) {
  try {
    const orderId = req.params.id;
    const removedId = await orderService.remove(orderId);
    res.send(removedId);
  } catch (err) {
    logger.error('Failed to remove order', err);
    res.status(500).send({ err: 'Failed to remove order' });
  }
}

module.exports = { getOrders, getOrderById, addOrder, updateOrder, removeOrder };
