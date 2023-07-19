const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes'); // nó sẽ tự nạp file index.js
const db = require('./config/db');

// Connect db
db.connect();

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// HTTP
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
