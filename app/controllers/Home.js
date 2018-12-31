module.exports = (app) => {
    
    const Jogo = app.models.Jogo;

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
            .then(() => res.send(JSON.stringify({msg: 'Jogo Adicionado'})))
            .catch((err) => res.send(JSON.stringify({msg: err})));
    }

    return this;
}
