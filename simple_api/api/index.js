var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/banner', function (req, res, next) {
    var banner = mocks.banner.map(function (info) {
            return assign({}, info)
        });

    res.json(banner)
});


router.get('/sliderinfo', function (req, res, next) {
    var sliderInfoItems = mocks.sliderinfo.map(function (info) {
            return assign({}, info)
        });

    res.json(sliderInfoItems)
});

module.exports = router;
