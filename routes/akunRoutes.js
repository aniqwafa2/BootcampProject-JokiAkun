const akunRoute = require('express').Router()
const AkunController = require('../controllers/AkunController')

akunRoute.get('/',AkunController.getAkuns);
akunRoute.get("/create", AkunController.createPage);
akunRoute.post("/create", AkunController.create);
akunRoute.get("/delete/:id", AkunController.delete);

module.exports = akunRoute;