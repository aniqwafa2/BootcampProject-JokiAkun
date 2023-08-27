const {Jam,Jadwal} = require('../models');

class JamController {
    static get(req, res){
        Jam.findAll()
            .then((data) => {
                res.render('jam/index.ejs',{data});
                //res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static create(req, res){
        let {sesi,jam} = req.body;
        Jam.create({sesi,jam})
            .then(() => {
                res.redirect('/Jam');
            })
            .catch((err) => {
                //res.redirect('/Jam');
                res.send(req.body);
            })
    }
    static createPage(req,res){
        Jam.findAll()
        .then((data) => {
            res.render('Jam/create.ejs',{data});
        })
        .catch((err) => {
            res.send(err);
        })
    }
    static async delete(req, res){
        let id = req.params.id;
        try{
            Jam.destroy({where: {id}});
            const result = Jadwal.findAll({where:{JamId : id}});
            if(result){
                Jadwal.destroy({where: {JamId : id}});
            }
            res.redirect('/Jam');
        }catch (err){
            res.send(err);
        }
    }
    static getById(req,res){
        let id = req.params.id;
        Jam.findAll({where: {id}})
            .then((data) => {
                data = data[0];
                res.render('jam/edit.ejs',{data});
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static edit(req, res){
        let {sesi, jam} = req.body;
        let id = req.params.id;
        Jam.update({sesi, jam},{where: {id}})
            .then(() => {
                res.redirect('/jam');
            })
            .catch((err) => {
                res.send(err);
            })
    }
}
module.exports = JamController;