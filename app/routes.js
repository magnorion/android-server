module.exports = (app) => {
    const Home = app.controllers.Home,
    Usuario = app.controllers.usuario;
    
    // Cors
    const cors = require('cors');
    app.use(cors());

    const checker = {
        origin: (origin, callback) => callback(null, true)
    }
    
    app.get('/', cors(checker), Home.index);
    app.get('/jogos', cors(checker), Home.index);

    app.post('/jogos/novo', cors(checker), Home.novo);
    app.post('/jogos/remove', cors(checker), Home.remove);
    app.post('/jogos/editar', cors(checker), Home.editar);

    app.post('/usuario/login', cors(checker), Usuario.login);
    app.post('/usuario/cadastro', cors(checker), Usuario.cadastro);
}
