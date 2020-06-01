var global = require('./GlobalVar')

module.exports = {
    async definir (request,response) {
        const {produto,valor} = request.body
        global.meta = {produto,valor}
        
        return response.json({status : true,})
    },

    async obter (request, response) {
        
        const rps  = global.get_eliza_data()
        const listOf_eliza_comida = rps.comida
        const listOf_eliza_viajem = rps.viajem
        const sum_eliza_comida = listOf_eliza_comida.reduce((a, b) => a + b, 0)
        const sum_eliza_viajem = listOf_eliza_viajem.reduce((a, b) => a + b, 0)
        const eliza_cost = sum_eliza_comida + sum_eliza_viajem
        
        const x = (global.meta.valor + eliza_cost) / global.economia
        global.metaAtingidaEmMeses = x

        
        delete global.elizaData


        response.json(global)
    },

    async economizar(request,response) {
        var {valor} = request.body
        global.economia = valor
        console.log("VALOR DE ECONOMICA" + global.economia)
        return response.json({status : true})
    }
}