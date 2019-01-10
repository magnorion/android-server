module.exports = (app) => {
    const Home = app.controllers.Home;
    
    app.get('/jogos', Home.index);
    app.get('/', Home.index);

    app.post('/jogos/novo', Home.novo);
    app.post('/jogos/remove', Home.remove);
}
