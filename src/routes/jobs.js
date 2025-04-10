const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Routes
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJob);
router.post('/', jobController.createJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

module.exports = router; 