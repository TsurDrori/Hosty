const express = require('express');
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
const { log } = require('../../middlewares/logger.middleware');
const { getReviews } = require('../review/review.controller');
const { getStays, getStayById, addStay, updateStay, removeStay } = require('./stay.controller');

//3
const router = express.Router();

router.get('/', getStays);
router.get('/:id', getStayById);

//host only!

//dev version

router.post('/', addStay);
router.put('/:id', updateStay);
router.delete('/:id', removeStay);

//prod version!

// router.post('/', requireAuth, requireAdmin, addStay)
// router.put('/:id', requireAuth, requireAdmin, updateStay)
// router.delete('/:id', requireAuth, requireAdmin, removeStay)

module.exports = router;
