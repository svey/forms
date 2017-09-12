const router = require('express').Router();
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '',
    user : '',
    password : 'password',
    database : 'form'
  }
});

knex.schema.createTable('users', function(table) {  
    table.increments();
    table.string('password');
    table.string('username');
    table.string('firstName');
    table.string('lastName');
    table.string('email');
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

// middle where to handle if the service can’t provide a reasonable estimation for the given inputs
router.use('/', function(err, req, res, next) {
  if(err) {
    res.status(404).send('Oh no, 404! Something broke!')
  }
  next();
});

// routes
router.route('/user').post(function(req, res) {
    User.forge(req.body).save(null, {method: 'insert'}).then(function(user) {  
      res.send('User saved: ' + user.get('username'));
    });
  });

module.exports = router;
