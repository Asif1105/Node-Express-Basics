const express = require('express');
const route = express();
const router = express.Router();

router.use((req, res, next) => {
    route.set('data', [{
            as: 'more',
            description: 'I\'m\' a coder and designer'
        },
        {
            as: 'coder',
            description: 'I\'m\' a coder'
        },
        {
            as: 'designer',
            description: 'I\'m\' a designer'
        }
    ]);
    next();
});

router.get('/', (req, res) => {
    res.render('Home', {
        title: 'Node Express Server',
        header: 'Welcome to Home Page'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Node Express Server',
        header: 'Welcome to About Page'
    });
});

router.get('/more', (req, res) => {
    res.render('More', {
        show: true,
        result: route.get('data')[0]
    });
});

router.get('/more/:as', (req, res) => {
    const data = route.get('data');
    debugger;
    let result = data.filter((e) => e.as === req.params.as)[0];
    res.render('More', {
        customPath: '../assets/css/style.css',
        show: false,
        result
    });
});

module.exports = router;