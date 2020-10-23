const router = require('express').Router();

const searchRoutes = require('./search');

const dqruledataRoutes = require('./dqruledata');

// routes

router.use('/search', searchRoutes);

router.use('/dqruledata', dqruledataRoutes);

module.exports = router;
