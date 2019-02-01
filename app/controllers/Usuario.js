module.exports = function (app) {
  const Usuario = app.models.Usuario;

  this.login = function (req, res) {
    const user = req.body.usuario;

    Usuario.find({username: user.username, pass: user.pass}, (err, u) => {
      if (err) {
        res.send(JSON.parse({
          message: 'usuario não existe'
        }));
      } else {
        res.send(JSON.parse({
          message: 'usuario autenticado'
        }));
      }
    });
  }

  this.cadastro = function (req, res) {
    const user = new Usuario(req.body.usuario);

    user.save(err => {
      if (err) {
        res.send(JSON.parse({
          message: 'houve um erro!'
        }));
      } else {
        res.send(JSON.parse({
          message: 'usuario criado'
        }));
      }
    });
  }

  return this;
}