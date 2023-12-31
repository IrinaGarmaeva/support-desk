const express = require('express');
const router = express.Router();
const { getTickets, getTicket, createTicket, deleteTicket, updateTicket } = require('../controllers/ticketController');

const {protect} = require('../middlewares/authMiddleware')

router.route('/').get(protect, getTickets).post(protect, createTicket)
router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).patch(protect, updateTicket)

module.exports = router
