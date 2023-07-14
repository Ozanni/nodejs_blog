const Course = require('../models/Course');

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            res.json(await Course.find({}));
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
        // Course.find({}, function(err, courses) {
        //     if (!err) res.json(courses)
        //     res.status(400).json({ error: 'ERROR!!!' })
        // })
        // res.render('home');
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
