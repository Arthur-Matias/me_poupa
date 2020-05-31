const Lancamento = require('../models/Lancamento');
const lancamentoController = require('./lancamento');
module.exports = {
    async store(req, res) {

        const {data, titulo, descricao, valor, income} = req.body;
        

        const already_lancado = await lancamentoController.findLancamento({data, descricao, valor});

        const already_exists = already_lancado[0] != null;
        
        var a = null

        if (already_exists){
            const body_returned = req.body
            delete body_returned.data
            delete body_returned.descricao
            delete body_returned.valor
            return res.json(body_returned)
        }else{    
            a = await Lancamento.create({
                data,
                titulo,
                descricao,
                valor,
                income
            });
            return res.json(a);
        }
    }
}