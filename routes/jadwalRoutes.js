const jadwalRoute = require('express').Router()
const JadwalController = require('../controllers/JadwalController')

jadwalRoute.get('/',JadwalController.get);
jadwalRoute.get('/create', JadwalController.createPage);

jadwalRoute.post('/create', JadwalController.create);
jadwalRoute.post('/edit/:akunId/:jamId/:jokiId', JadwalController.editDetail);
module.exports = jadwalRoute;