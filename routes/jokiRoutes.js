const jokiRoute = require('express').Router()
const JokiController = require('../controllers/JokiController')

jokiRoute.get('/',JokiController.get);
jokiRoute.get('/create', JokiController.createPage);
jokiRoute.get('/delete/:id', JokiController.delete);
jokiRoute.get('/edit/:id', JokiController.getById);
jokiRoute.get('/detail/:id', JokiController.detail);
jokiRoute.get('/detail/delete/:akunId/:jamId/:jokiId', JokiController.deleteDetail);
jokiRoute.get('/detail/edit/:akunId/:jamId/:jokiId', JokiController.getByIdDetail);

jokiRoute.post('/create', JokiController.create);
jokiRoute.post('/edit', JokiController.edit);

module.exports = jokiRoute;