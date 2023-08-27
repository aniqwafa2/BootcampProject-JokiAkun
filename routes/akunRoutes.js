const akunRoute = require('express').Router()
const AkunController = require('../controllers/AkunController')

akunRoute.get('/',AkunController.get);
akunRoute.get('/create', AkunController.createPage);
akunRoute.get('/delete/:id', AkunController.delete);
akunRoute.get('/edit/:id', AkunController.getById);

akunRoute.post('/create', AkunController.create);
akunRoute.post('/edit/:id', AkunController.edit);

module.exports = akunRoute;