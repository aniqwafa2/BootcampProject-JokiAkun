const route = require('express').Router();

//const jokiRoute = require('./jokiRoutes');
const akunRoute = require('./akunRoutes');
// const jadwalRoute = require('./jadwalRoutes');
const jamRoute = require('./jamRoutes');

// route.use('/joki', jokiRoute)
route.use('/akun', akunRoute)
// route.use('/jadwal', jadwalRoute)
route.use('/jam', jamRoute)

route.get("/", (req, res) => {
  res.render("index.ejs")
});

module.exports = route;