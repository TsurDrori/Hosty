const stayService = require('./stay.service.js');
const logger = require('../../services/logger.service');

//4
async function getStays(req, res) {
  try {
    let filterBy = req.query;
    // console.log('the filter by parse', filterBy);
    // filterBy = JSON.parse(filterBy);
    const stays = await stayService.query(filterBy);
    res.json(stays);
  } catch (err) {
    // console.log(err);
    logger.error('Failed to get stays', err);
    res.status(500).send({ err: 'Failed to get stays' });
  }
}

async function getStayById(req, res) {
  try {
    const stayId = req.params.id;

    const stay = await stayService.getById(stayId);
    res.json(stay);
  } catch (err) {
    logger.error('Failed to get stay', err);
    res.status(500).send({ err: 'Failed to get stay' });
  }
}

// POST (add stay)
async function addStay(req, res) {
  try {
    const stay = req.body;
    const addedStay = await stayService.add(stay);
    res.json(addedStay);
  } catch (err) {
    logger.error('Failed to add stay', err);
    res.status(500).send({ err: 'Failed to add stay' });
  }
}

// PUT (Update stay)
async function updateStay(req, res) {
  try {
    const stay = req.body;
    const updatedStay = await stayService.update(stay);
    res.json(updatedStay);
  } catch (err) {
    logger.error('Failed to update stay', err);
    res.status(500).send({ err: 'Failed to update stay' });
  }
}

// DELETE (Remove toy)
async function removeStay(req, res) {
  try {
    const stayId = req.params.id;
    const removedId = await stayService.remove(stayId);
    res.send(removedId);
  } catch (err) {
    logger.error('Failed to remove stay', err);
    res.status(500).send({ err: 'Failed to remove stay' });
  }
}

module.exports = {
  getStays,
  getStayById,
  addStay,
  updateStay,
  removeStay,
};
