const Lancamento = require('../models/Lancamento')

module.exports = {
    async show(req,res){

        const outcome = await Lancamento.find({ income: false });

        return res.json(outcome);
    }
}