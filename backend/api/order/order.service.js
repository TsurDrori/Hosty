const dbService = require('../../services/db.service');
const logger = require('../../services/logger.service');
const ObjectId = require('mongodb').ObjectId;
const stayService = require('../stay/stay.service');

//our pipe pile

async function query(filterBy) {
  try {
    const criteria = buildCriteria(filterBy);

    const collection = await dbService.getCollection('order');
    let orders = await collection.find(criteria).toArray();
    return orders;
  } catch (err) {
    console.log('the err', err);
    logger.error('cannot find orders', err);
    throw err;
  }
}

function buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.userId) {
    //if key user id
    criteria['buyer._id'] = ObjectId(filterBy.userId);
  }
  if (filterBy.hostId) {
    criteria['host._id'] = ObjectId(filterBy.hostId);
  }
  return criteria;
}

async function getById(orderId) {
  try {
    const collection = await dbService.getCollection('order');
    const order = await collection.findOne({ _id: ObjectId(orderId) });
    // stay.reviews = await reviewService.query({ stayId })

    return order;
  } catch (err) {
    logger.error(`while finding order ${orderId}`, err);
    throw err;
  }
}

async function add(order, buyer) {
  try {
    const updatedOrder = {
      ...order,
      host: { ...order.host, _id: ObjectId(order.host._id) },
      status: 'pending',
      buyer: { ...buyer, _id: ObjectId(buyer._id) },
    };
    const collection = await dbService.getCollection('order');
    await collection.insertOne(updatedOrder);
    return order;
  } catch (err) {
    logger.error('cannot insert stay', err);
    throw err;
  }
}

async function update(order) {
  // console.log('order:', order);

  const orderToUpdate = {
    status: order.status,
  };

  try {
    let id = ObjectId(order._id);
    delete order._id;
    const collection = await dbService.getCollection('order');
    await collection.updateOne({ _id: id }, { $set: { ...orderToUpdate } });
  } catch (err) {
    // console.log('the err in update', err);
    logger.error(`cannot update stay ${order}`, err);
    throw err;
  }
}

async function remove(orderId) {
  try {
    const collection = await dbService.getCollection('order');
    await collection.deleteOne({ _id: ObjectId(orderId) });
    return orderId;
  } catch (err) {
    logger.error(`cannot remove toy ${orderId}`, err);
    throw err;
  }
}

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
};
