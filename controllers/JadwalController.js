const {Jadwal, Jam, Joki, Akun} = require('../models');

class JadwalController{
    static async get(req, res){
        try{  
            let data = await Jadwal.findAll({include: [Jam, Joki, Akun]});
            res.render('jadwal/index.ejs',{data});
            //res.send(data)
        }catch (err){
            res.send(err);
        }
    }
    static async create(req, res){
        try{
            let {JokiId, AkunId, JamId} = req.body;
            Jadwal.create({JokiId,AkunId,JamId})
            res.redirect('/Jadwal');
        }catch (err){
            res.redirect('/Jadwal');
        }
    }
    static async createPage(req,res){
        try{
            const joki = await Joki.findAll();
            const jam = await Jam.findAll();
            const akun = await Akun.findAll();
            res.render('jadwal/create.ejs',{joki, jam, akun});
        }catch (err){
            res.send(err);
        }
    }
}

module.exports = JadwalController;