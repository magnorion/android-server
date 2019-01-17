module.exports = (app) => {
    const Home = app.controllers.Home;
    
    // Cors
    const cors = require('cors');
    app.use(cors());

    const checker = {
        origin: (origin, callback) => callback(null, true)
    }
    
    app.get('/jogos', cors(checker), Home.index);
    app.get('/', cors(checker), Home.index);

    app.post('/jogos/novo', cors(checker), Home.novo);
    app.post('/jogos/remove', cors(checker), Home.remove);
    app.post('/jogos/editar', cors(checker), Home.editar);
}
