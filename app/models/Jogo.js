module.exports = (app) => {
    const mongoose = app.config.database,
    Schema = mongoose.Schema;

    const jogoSchema = new Schema({
        titulo: String,
        descricao: String
    });

    return mongoose.model('Jogo', jogoSchema);
}
