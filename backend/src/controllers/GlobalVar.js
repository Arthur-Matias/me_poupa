var meta = {
    produto : "",
    valor : 0.,
}

var economia = 0;

const elizaData = {
    "Debito": [
        {
            "Data": "5/28/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 1,002.95"
        },
        {
            "Data": "5/26/20",
            "Item": "Posto",
            "Valor": "R$ 8.99",
            "Saldo": "R$ 902.95"
        },
        {
            "Data": "5/26/20",
            "Item": "Farmácia",
            "Valor": "R$ 6.78",
            "Saldo": "R$ 911.94"
        },
        {
            "Data": "5/26/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 918.72"
        },
        {
            "Data": "5/26/20",
            "Item": "Entrada",
            "Valor": "R$ 150.00",
            "Saldo": "R$ 818.72"
        },
        {
            "Data": "5/25/20",
            "Item": "Taxa",
            "Valor": "R$ 12.40",
            "Saldo": "R$ 668.72"
        },
        {
            "Data": "5/25/20",
            "Item": "Mercado",
            "Valor": "R$ 250.56",
            "Saldo": "R$ 681.12"
        },
        {
            "Data": "5/25/20",
            "Item": "IFood",
            "Valor": "R$ 75.00",
            "Saldo": "R$ 931.68"
        },
        {
            "Data": "5/22/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 1,006.68"
        },
        {
            "Data": "5/18/20",
            "Item": "IFood",
            "Valor": "R$ 42.00",
            "Saldo": "R$ 906.68"
        },
        {
            "Data": "5/15/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 948.68"
        },
        {
            "Data": "5/15/20",
            "Item": "Entrada",
            "Valor": "R$ 60.00",
            "Saldo": "R$ 848.68"
        },
        {
            "Data": "5/14/20",
            "Item": "IFood",
            "Valor": "R$ 60.97",
            "Saldo": "R$ 788.68"
        },
        {
            "Data": "5/14/20",
            "Item": "Entrada",
            "Valor": "R$ 85.00",
            "Saldo": "R$ 849.65"
        },
        {
            "Data": "5/13/20",
            "Item": "IFood",
            "Valor": "R$ 41.49",
            "Saldo": "R$ 764.65"
        },
        {
            "Data": "5/13/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 806.14"
        },
        {
            "Data": "5/12/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 706.14"
        },
        {
            "Data": "5/11/20",
            "Item": "IFood",
            "Valor": "R$ 48.90",
            "Saldo": "R$ 606.14"
        },
        {
            "Data": "5/11/20",
            "Item": "Médico",
            "Valor": "R$ 340.00",
            "Saldo": "R$ 655.04"
        },
        {
            "Data": "5/8/20",
            "Item": "Entrada",
            "Valor": "R$ 49.00",
            "Saldo": "R$ 995.04"
        },
        {
            "Data": "5/7/20",
            "Item": "Mercado",
            "Valor": "R$ 88.40",
            "Saldo": "R$ 946.04"
        },
        {
            "Data": "5/5/20",
            "Item": "Entrada",
            "Valor": "R$ 62.00",
            "Saldo": "R$ 1,034.44"
        },
        {
            "Data": "5/4/20",
            "Item": "Mercado",
            "Valor": "R$ 51.69",
            "Saldo": "R$ 972.44"
        },
        {
            "Data": "5/4/20",
            "Item": "Entrada",
            "Valor": "R$ 33.00",
            "Saldo": "R$ 1,024.44"
        },
        {
            "Data": "5/27/20",
            "Item": "Taxa",
            "Valor": "R$ 12.40",
            "Saldo": "R$ 991.13"
        },
        {
            "Data": "4/27/20",
            "Item": "IFood",
            "Valor": "R$ 62.68",
            "Saldo": "R$ 1,003.53"
        },
        {
            "Data": "4/20/20",
            "Item": "Entrada",
            "Valor": "R$ 200.00",
            "Saldo": "R$ 1,066.21"
        },
        {
            "Data": "4/20/20",
            "Item": "Entrada",
            "Valor": "R$ 94.00",
            "Saldo": "R$ 866.21"
        },
        {
            "Data": "4/15/20",
            "Item": "Entrada",
            "Valor": "R$ 200.00",
            "Saldo": "R$ 772.21"
        },
        {
            "Data": "4/14/20",
            "Item": "Farmácia",
            "Valor": "R$ 200.59",
            "Saldo": "R$ 576.21"
        },
        {
            "Data": "4/14/20",
            "Item": "Transferência",
            "Valor": "R$ 55.00",
            "Saldo": "R$ 772.80"
        },
        {
            "Data": "4/14/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 827.80"
        },
        {
            "Data": "4/13/20",
            "Item": "Mercado",
            "Valor": "R$ 107.25",
            "Saldo": "R$ 727.80"
        },
        {
            "Data": "4/13/20",
            "Item": "Posto",
            "Valor": "R$ 13.98",
            "Saldo": "R$ 835.05"
        },
        {
            "Data": "4/13/20",
            "Item": "IFood",
            "Valor": "R$ 86.68",
            "Saldo": "R$ 849.03"
        },
        {
            "Data": "4/9/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 935.71"
        },
        {
            "Data": "4/8/20",
            "Item": "Entrada",
            "Valor": "R$ 65.00",
            "Saldo": "R$ 835.71"
        },
        {
            "Data": "4/7/20",
            "Item": "IFood",
            "Valor": "R$ 64.90",
            "Saldo": "R$ 770.71"
        },
        {
            "Data": "4/7/20",
            "Item": "Médico",
            "Valor": "R$ 340.00",
            "Saldo": "R$ 835.61"
        },
        {
            "Data": "4/7/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 1,175.61"
        },
        {
            "Data": "4/7/20",
            "Item": "Entrada",
            "Valor": "R$ 100.00",
            "Saldo": "R$ 1,075.61"
        },
        {
            "Data": "Saldo inicial",
            "Saldo": "R$ 975.61"
        }
    ],
    "Crédito": [
        {
            "Data": "5/23/20",
            "Item": "Uber",
            "Valor": "R$ 9.58"
        },
        {
            "Data": "5/23/20",
            "Item": "Uber",
            "Valor": "R$ 9.21"
        },
        {
            "Data": "5/23/20",
            "Item": "Uber",
            "Valor": "R$ 8.15"
        },
        {
            "Data": "5/22/20",
            "Item": "Uber",
            "Valor": "R$ 6.92"
        },
        {
            "Data": "5/21/20",
            "Item": "Uber",
            "Valor": "R$ 6.31"
        },
        {
            "Data": "5/21/20",
            "Item": "Uber",
            "Valor": "R$ 6.03"
        },
        {
            "Data": "5/21/20",
            "Item": "Uber",
            "Valor": "R$ 12.96"
        },
        {
            "Data": "5/21/20",
            "Item": "Uber",
            "Valor": "R$ 11.39"
        },
        {
            "Data": "5/18/20",
            "Item": "Spotify",
            "Valor": "R$ 21.90"
        },
        {
            "Data": "5/15/20",
            "Item": "IFood",
            "Valor": "R$ 29.99"
        },
        {
            "Data": "5/5/20",
            "Item": "99 Food",
            "Valor": "R$ 42.99"
        },
        {
            "Data": "5/5/20",
            "Item": "Uber",
            "Valor": "R$ 9.97"
        },
        {
            "Data": "5/5/20",
            "Item": "Uber",
            "Valor": "R$ 13.12"
        },
        {
            "Data": "4/29/20",
            "Item": "IFood",
            "Valor": "R$ 26.99"
        },
        {
            "Data": "4/19/20",
            "Item": "Uber",
            "Valor": "R$ 6.24"
        },
        {
            "Data": "4/19/20",
            "Item": "Uber",
            "Valor": "R$ 10.90"
        },
        {
            "Data": "4/19/20",
            "Item": "Uber",
            "Valor": "R$ 10.86"
        },
        {
            "Data": "5/18/20",
            "Item": "Spotify",
            "Valor": "R$ 21.90"
        },
        {
            "Data": "4/11/20",
            "Item": "Uber",
            "Valor": "R$ 5.81"
        },
        {
            "Data": "4/11/20",
            "Item": "Uber",
            "Valor": "R$ 6.97"
        },
        {
            "Data": "4/10/20",
            "Item": "Uber",
            "Valor": "R$ 5.15"
        },
        {
            "Data": "4/10/20",
            "Item": "Uber",
            "Valor": "R$ 5.67"
        }
    ]
}



function get_eliza_data(){
    //insere os novos dados para conversão
    eliza_comida = elizaData.Debito.map(function(x) {
        viajem_type = ['Posto','Uber']
        comida_type = ['IFood','Mercado']

        if(comida_type.includes(x.Item)){
            x.titulo =  'comida'
            x.valor = x.Valor.split(" ")[1]
            return x
        }
    })
    eliza_viajem = elizaData.Debito.map(function(x) {
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


    return {
        comida : listOf_eliza_comida,
        viajem : listOf_eliza_viajem
    }
}

module.exports = {meta,economia,elizaData,get_eliza_data}