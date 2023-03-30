const {Joki, Jadwal, Akun, Jam} = require('../models');

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
    static async detail(req, res){
        let id = req.params.id;
        try{
            let data = await Jadwal.findAll({
                where: {
                    JokiId : id
                },
                include: [Joki, Akun, Jam]
            });
            let Jokies = await Joki.findAll({where: {id}});
            res.render('joki/detail.ejs', {Jokies, data});
            //res.send({Jokies});
        }catch(err){
            res.send(err);
        }
    }
    static async deleteDetail(req, res){
        let {akunId, jamId, jokiId} = req.params;
        //res.send({akunId, jamId, jokiId});
        try{
            Jadwal.destroy({
                where: {
                    AkunId: akunId,
                    JamId: jamId,
                    JokiId: jokiId
                }
            })
            res.redirect('/joki');
        }catch(err){
            res.redirect('/joki');
        }
    }
    static async getByIdDetail(req,res){
        let {akunId, jamId, jokiId} = req.params;
        try{
            let data = await Jadwal.findAll({
                where: {
                    AkunId: akunId,
                    JamId: jamId,
                    JokiId: jokiId
                }
            });
            const joki = await Joki.findAll();
            const jam = await Jam.findAll();
            const akun = await Akun.findAll();
            data = data[0];
            res.render('Jadwal/edit.ejs',{data, joki, jam, akun});
            //res.send({data});
        }catch(err){
            res.send(err);
        }
    }
}
module.exports = JokiController;