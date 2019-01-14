module.exports = (app) => {
    
    const Jogo = app.models.Jogo,
    self = this;

    this.index = function (req, res) {
        Jogo.find({}, (err, jogos) => {
            if (err) {
                console.log(err);
                return false;
            }

            res.send(JSON.stringify(jogos));
        })
    }

    this.novo = function (req, res) {
        if (typeof req.body.titulo == 'undefined' 
            || typeof req.body.descricao == 'undefined') {
                res.send(JSON.stringify({msg: 'por favor, informar todos os campos'}));
                
                return false;
            }
        
        const game = new Jogo(req.body);
        
        game.save()
            .then(() => res.send(JSON.stringify({msg: 'Jogo adicionado'})))
            .catch((err) => res.send(JSON.stringify({msg: err})));
    }

    this.remove = function (req, res) {
        const id = req.body.id || undefined;
        if (typeof id == 'undefined') {
            res.send(JSON.stringify({
                msg: 'Por favor, informe o id do jogo'
            }));
        }

        Jogo.remove({_id: id})
            .then(() => res.send(JSON.stringify({msg: 'Jogo removido'})))
            .catch((err) => res.send(JSON.stringify({msg: err})));
    }

    this.editar = function (req, res) {
        const id = req.body.id || undefined;

        if (typeof id == 'undefined') {
            res.send(JSON.stringify({
                msg: 'Por favor, informe o id do jogo'
            }));
        }

        Jogo.findById(id, (err, game) => {
            if (err) {
                res.send(JSON.stringify({
                    msg: 'Este jogo não existe!'
                }));

                return false;
            }

            game.titulo = req.body.titulo;
            game.descricao = req.body.descricao;

            game.save()
            .then(() => res.send(JSON.stringify({msg: 'Jogo alterado!'})))
            .catch((err) => res.send(JSON.stringify({msg: err})));
        });
    }

    return this;
}
