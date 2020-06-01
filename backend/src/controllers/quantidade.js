const Lancamento = require('../models/Lancamento')
const global = require('./GlobalVar')
categories = []

module.exports = {
    async define(request,response) {
        resposta_comida = await Lancamento.find({titulo : 'comida'})
        resposta_viajem = await Lancamento.find({titulo : 'viajem'})


        /*


        //insere os novos dados para conversão
        eliza_comida = global.elizaData.Debito.map(function(x) {
            viajem_type = ['Posto','Uber']
            comida_type = ['IFood','Mercado']

            if(comida_type.includes(x.Item)){
                x.titulo =  'comida'
                x.valor = x.Valor.split(" ")[1]
                return x
            }
        })
        eliza_viajem = global.elizaData.Debito.map(function(x) {
            viajem_type = ['Posto','Uber']
            comida_type = ['IFood','Mercado']

            if(viajem_type.includes(x.Item)){
                x.titulo =  'viajem'
                x.valor = x.Valor.split(" ")[1]
                return x
            }
        })

        //apaga os nulos
        eliza_comida = eliza_comida.filter(function(x) {
            return x !== undefined
        })

        eliza_viajem = eliza_viajem.filter(function(x) {
            return x !== undefined
        })

        console.log("COMIDDDDA")
        console.log(eliza_comida)
        const listOf_eliza_comida = eliza_comida.map(function(x){
            return parseFloat(x.valor)
        })
        const listOf_eliza_viajem = eliza_viajem.map(function(x){
            return parseFloat(x.valor)
        })
        */
        const rps  = global.get_eliza_data()
        const listOf_eliza_comida = rps.comida
        const listOf_eliza_viajem = rps.viajem
        const sum_eliza_comida = listOf_eliza_comida.reduce((a, b) => a + b, 0)
        const sum_eliza_viajem = listOf_eliza_viajem.reduce((a, b) => a + b, 0)

        console.log("EHASUIASHEI")
        console.log(listOf_eliza_comida)

        var nome_cat_gasto = ""
        var valor_cat_gasto = 0

        const tm1 = resposta_comida.length + listOf_eliza_comida.length
        const tm2 = resposta_viajem.length + listOf_eliza_viajem.length
// sum_eliza_viajem

        if (tm1 < tm2){
            nome_cat_gasto = "viajem"
            console.log("CHECK")
            console.log(resposta_viajem)

            const value = resposta_viajem.map(function(x) {
                return x.valor
            })
            const sumarization = value.reduce((a, b) => a + b, 0)
            valor_cat_gasto = sumarization + sum_eliza_viajem
            console.log("VALOR TOTAL" + value)
            console.log("VALOR TOTAL" + sumarization)
        }
        else{
            nome_cat_gasto = "comida"
            console.log("CHECK")
            console.log(resposta_comida)

            const value = resposta_comida.map(function(x) {
                return x.valor
            })
            const sumarization = value.reduce((a, b) => a + b, 0) 
            valor_cat_gasto = sumarization + sum_eliza_comida
            console.log("VALOR TOTAL" + value)
            console.log("VALOR TOTAL" + sumarization)

            
        }




        return response.json({gasto_comida : tm1,
        gasto_viajem : tm2,
    categoria_mais_gasto : nome_cat_gasto, valor_total_do_mais_gasto : valor_cat_gasto,
    })
    }
    

}