var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
console.log("Conectando con mongo");
mongoose.connect('mongodb://localhost:27017/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectado");
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and Controllers
var Models = require('./models')(app, mongoose);
var ClientCtrl = require('./controllers/client');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {
 res.send("Hola Mundo - www.programacion.com.py");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/')
  .get((req, res, next) => res.send("API"));

api.route('/clients')
 .get(ClientCtrl.findAll)
 .post(ClientCtrl.add);

api.route('/clients/:id')
 .get(ClientCtrl.findById)
 .put(ClientCtrl.update)
 .delete(ClientCtrl.delete);

app.use('/api', api);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});
