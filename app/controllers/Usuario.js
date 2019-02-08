module.exports = function (app) {
  const Usuario = app.models.Usuario;

  this.login = function (req, res) {
    const user = {
      username: req.body.username,
      pass: req.body.pass
    };

    try {
      Usuario.find(user, (err, u) => {
        if (err || u.length == 0) {
          res.send(JSON.stringify({
            message: 'usuario não existe'
          }));
        } else {
          res.send(JSON.stringify({
            message: 'usuario autenticado'
          }));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  this.cadastro = function (req, res) {
    const user = new Usuario(req.body);

    user.save(err => {
      if (err) {
        res.send(JSON.stringify({
          message: 'houve um erro!'
        }));
      } else {
        res.send(JSON.stringify({
          message: 'usuario criado'
        }));
      }
    });
  }

  return this;
}