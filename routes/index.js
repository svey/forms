const router = require('express').Router();
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig);

knex.schema.createTable('users', function(table) {
    table.string('id').unique(); 
    table.string('username').unique();
    table.string('email').unique();
    table.string('password');
    table.string('firstName');
    table.string('lastName');
    table.string('phone');
    table.string('city');
    table.string('street');
    table.string('state');
    table.string('zip');
    table.timestamps();
}).then();

const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({  
    tableName: 'users',
    hasTimestamps: true,
});

const Users = bookshelf.Collection.extend({  
    model: User
});

router.use('/', function(err, req, res, next) {
  if(err) {
    res.status(404).send('Oh no, 404! Something broke!')
  }
  next();
});

router.route('/user').post(function(req, res) {
  User.forge(req.body).save(null, { method: 'insert' }).then(function(user) {  
    res.send('User saved: ' + user.get('username'));
  });
});

router.route('/user/update').post(function(req, res) {
  const { username } = req.body;
  User.forge({ id: username }).save(req.body, { method: 'update', patch: true }).then(function(user) {  
    res.send('User saved: ' + user.get('username'));
  });
});

module.exports = router;
