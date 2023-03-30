const {Joki, Jadwal} = require('../models');

class JokiController {
    static get(req, res){
        Joki.findAll()
            .then((data) => {
                res.render('joki/index.ejs',{data});
                //res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static create(req, res){
        let {name, age, phone, address} = req.body;
        Joki.create({name, age, phone, address})
            .then(() => {
                res.redirect('/joki');
            })
            .catch((err) => {
                //res.redirect('/joki');
                res.send(req.body);
            })
    }
    static createPage(req,res){
        Joki.findAll()
        .then((data) => {
            res.render('joki/create.ejs',{data});
        })
        .catch((err) => {
            res.send(err);
        })
    }
    static async delete(req, res){
        let id = req.params.id;
        try{
            Joki.destroy({where: {id}})
            const result = await Jadwal.findAll({where: {JokiId : Number(id)}});
            if (result){
                Jadwal.destroy({where: {JokiId : id}});
            }
            res.redirect('/joki');
        }catch (err){
            res.send(err);
        }
    }
    static getById(req,res){
        let id = req.params.id;
        Joki.findAll({where: {id}})
            .then((data) => {
                data = data[0];
                res.render('joki/edit.ejs',{data});
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static edit(req, res){
        let {name, age, phone, adress, image, status} = req.body;
        let id = req.params.id;
        Joki.update({name, age, phone, adress, image, status},{where: {id}})
            .then(() => {
                res.redirect('/joki');
            })
            .catch((err) => {
                res.send(err);
            })
    }
}
module.exports = JokiController;