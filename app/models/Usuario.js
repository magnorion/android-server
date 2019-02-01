module.exports = function (app) {
  const mongoose = app.config.database;

  const usuarioShema = new mongoose.Schema({
    username: String,
    pass: String
  });

  return mongoose.model('Usuario', usuarioShema);
}