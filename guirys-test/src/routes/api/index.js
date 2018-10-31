const router = require('express').Router();
const bookRoutes = require('./art');

router.use('/art', bookRoutes);

module.exports = router;