const mongoose = require('mongoose');

const LancamentoSchema = new mongoose.Schema({
        data: Date,
        titulo: String,
        descricao: String,
        valor: Number,
        income: Boolean
});

module.exports = mongoose.model('Lancamento', LancamentoSchema);