var global = require('./GlobalVar')
const Lancamento = require('../models/Lancamento')


async function get(request,response) {
    const eliza_data = global.elizaData.Debito
    var month_4 = []
    var month_5 = []

    eliza_data_converted = eliza_data.map(function(data) {
        const datetime = data.Data
        dsplitted = datetime.split('/')
        console.log(dsplitted)

        
        const month = dsplitted[0]
        const day = dsplitted[1]
        const year = dsplitted[2]
        
        //console.log(day)
        //const data_string = '20' + year + '-' + month + '-' + day
        //const data_real = new Date(data_string)
        //console.log(data_real)
        //data.formatation = data_real
        //data.strinf = data_string
        //data.month = parseInt(month)


        if (month == 4){
            month_4.push(data)
        }
        else if(month == 5){
            month_5.push(data)
        }

    })
    return response.json({
        mes4 : month_4,
        mes5 : month_5
    })


}
module.exports = {

    
    get,
    async analyse (request,response) {
        resposta_comida = await Lancamento.find({titulo : 'comida'})
        resposta_viajem = await Lancamento.find({titulo : 'viajem'})
        var {mes4,mes5} = await get(null,{json : x => x})

        return response.json({})

      
    },
}