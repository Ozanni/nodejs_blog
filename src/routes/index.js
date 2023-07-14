function route(app) {
    // Basic routing
    app.get('/', (req, res) => {
        res.render('home'); // thì file home.handlebars ở nằm trong {{{body}}}
    });

    app.get('/news', (req, res) => {
        res.render('news');
    });

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;
