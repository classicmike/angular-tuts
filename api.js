var express = require('express'),
    Bourne =  require('bourne'),
    bodyParser = require('body-parser'),
    db = new Bourne('data.json'),
    router = express.Router();


router.use(function(req, res, next){
    if(!req.user){
        req.user = {id: 1};
        console.log(req.user);
        next();
    }
})
    .use(bodyParser.json())
    .route('/contact')
    .get(function(req, res){
        console.log(req.user.id);
        console.log(db);
        db.find({}, function(data){
            console.log(data);
            res.json(data);
        })
    })
    .post(function(req, res){
        var contact = req.body;
        contact.userId = req.user.id;

        db.insert(contact, function(err, data){
            res.json(data);
        });
    });

router.param('id', function(req, res, next){
    req.dbQuery = { id: parseInt(req.params.id, 10) }
}).route('/contact/:id')
    .get(function(req, res){
        db.findOne(req.dbQuery, function(err, data){
            res.json(data);
        });
    })
    .put(function(req, res){
        var contact = req.body;
        delete contact.$promise;
        delete contact.$resolved;
        db.update(req.dbQuery, contact, function(err, data){
            res.json(data[0]);
        });
    })
    .delete(function(req, res){
        db.delete(req.dbQuery, function(err, data){
            res.json(null);
        });
    });

module.exports = router;