const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'form'
  }
});

const bookshelf = require('bookshelf')(knex);

app.set('bookshelf', bookshelf);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('static'));
app.use('/api', routes);

const User = bookshelf.Model.extend({  
    tableName: 'users',
    hasTimestamps: true,
});

knex.schema.createTable('users', function(table) {  
    table.increments();
    table.string('password');
    table.string('username');
    table.string('firstName');
    table.string('lastName');
    table.string('phone');
    table.string('city');
    table.string('street');
    table.string('state');
    table.string('zip');
    table.timestamps();
});


const Users = bookshelf.Collection.extend({  
    model: User
});

// User.forge(data).save().then(function(u) {  
//     console.log('User saved:', u.get('name'));
// });


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
});
