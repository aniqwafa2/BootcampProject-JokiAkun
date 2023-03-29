const jokiRoute = require('express').Router()
const JokiController = require('../controllers/JokiController')

jokiRoute.get('/',JokiController.getjokis);
jokiRoute.get("/create", JokiController.createPage);
jokiRoute.post("/create", JokiController.create);
jokiRoute.get("/delete/:id", JokiController.delete);

module.exports = jokiRoute;