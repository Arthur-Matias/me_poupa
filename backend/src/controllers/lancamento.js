// index, show, store, update, destroy
const Lancamento = require('../models/Lancamento');

async function findLancamento(data_to_find) {
    return await Lancamento.find(data_to_find)
}


module.exports = {
    async store(req, res){
        const { data, descricao, valor } = req.body;

        let lancamento = await findLancamento({data, descricao, valor});
        console.log(lancamento)
        if (!lancamento){
            return lancamento;
        }
        return res.json(lancamento);
    },
    findLancamento
};