const jadwalRoute = require('express').Router()
const JadwalController = require('../controllers/JadwalController')

jadwalRoute.get('/',JadwalController.get);
jadwalRoute.get('/create', JadwalController.createPage);
jadwalRoute.post('/create', JadwalController.create);

module.exports = jadwalRoute;