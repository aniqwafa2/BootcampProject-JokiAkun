const jamRoute = require('express').Router()
const JamController = require('../controllers/JamController')

jamRoute.get('/',JamController.get);
jamRoute.get('/create', JamController.createPage);
jamRoute.get('/delete/:id', JamController.delete);
jamRoute.get('/edit/:id', JamController.getById);

jamRoute.post('/create', JamController.create);
jamRoute.post('/edit/:id', JamController.edit);

module.exports = jamRoute;