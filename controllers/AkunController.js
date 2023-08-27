const {Akun} = require('../models');

class AkunController{
    static get(req, res){
        Akun.findAll()
            .then((data) => {
                res.render('akun/index.ejs',{data});
                //res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static create(req, res){
        let {name, gameID, server, phone} = req.body;
        Akun.create({name, gameID, server, phone})
            .then(() => {
                res.redirect('/akun');
            })
            .catch((err) => {
                //res.redirect('/akun');
                res.send(req.body);
            })
    }
    static createPage(req,res){
        Akun.findAll()
        .then((data) => {
            res.render('akun/create.ejs',{data});
        })
        .catch((err) => {
            res.send(err);
        })
    }
    static async delete(req, res){
        let id = req.params.id;
        try{
            Akun.destroy({where: {id}});
            let result = Jadwal.findAll({where: {AkunId : id}});
            if(result){
                Jadwal.destroy({where: {akunId : id}});
            }
            res.redirect('/akun');
        } catch (err){
            res.send(err);
        }
    }
    static getById(req,res){
        let id = req.params.id;
        Akun.findAll({where: {id}})
            .then((data) => {
                data = data[0];
                res.render('akun/edit.ejs',{data});
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static edit(req, res){
        let {name, gameID, server, phone} = req.body;
        let id = req.params.id;
        Akun.update({name, gameID, server, phone},{where: {id}})
            .then(() => {
                res.redirect('/akun');
            })
            .catch((err) => {
                res.send(err);
            })
    }
}
module.exports = AkunController;