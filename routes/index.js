const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs")
});

const jokiRoute = require('./jokiRoutes');
const akunRoute = require("./akunRoutes");
const jadwalRoute = require("./jadwalRoutes");

route.use('/jokis', jokiRoute)
route.use('/akuns', akunRoute)
route.use('/jadwals', jadwalRoute)

module.exports = route;