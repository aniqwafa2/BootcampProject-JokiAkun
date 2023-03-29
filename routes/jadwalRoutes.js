const jadwalRoute = require('express').Router()
const JadwalController = require('../controllers/JadwalController')

jadwalRoute.get('/',JadwalController.getjadwals);
jadwalRoute.get("/create", JadwalController.createPage);
jadwalRoute.post("/create", JadwalController.create);
jadwalRoute.get("/delete/:id", JadwalController.delete);

module.exports = jadwalRoute;