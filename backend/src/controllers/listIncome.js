const Lancamento = require('../models/Lancamento')

module.exports = {
    async show(req,res){

        const income = await Lancamento.find({ income: true });

        return res.json(income);
    }
}