var mongoose = require('mongoose');
var Client = mongoose.model('Client');

//GET - Return all registers
exports.findAll = function(req, res) {
      Client.find((err, clients) => {
         if(err) res.send(500, err.message);
         res.status(200).jsonp(clients);
     });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
 Client.findById(req.params.id, function(err, client) {
 if(err) return res.send(500, err.message);
 console.log('GET /clients/' + req.params.id);
 res.status(200).jsonp(client);
 });
};

//POST - Insert a new register
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var client = new Client({
 name: req.body.name,
 email: req.body.email,
 genre: req.body.genre,
 paciente : {
    dni : 12123321,
    name : "paciente",
    nacionalidad : "argentino"
},
medico : {
    name : "medico",
    matricula : 12345
}
 //name: req.param('name'),
 //email: req.param('email'),
 //genre: req.param('genre')
 });
 client.save(function(err, client) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(client);
 });
};

/* PAGINASS */
//http://mongoosejs.com/docs/schematypes.html

/*exports.add = function(params) {
   console.log('POST');
   //console.log(req.body);
   var client = new Client({
       name: params.data.name,
       email: params.data.email,
       genre: params.data.genre
   });
   client.save(function(err, client) {
     if(err) return res.send(500, err.message);
     res.status(200).jsonp(client);
   });
};*/






//PUT - Update a register already exists
exports.update = function(req, res) {
 Client.findById(req.params.id, function(err, client) {
 client.name = req.body.name;
 client.email = req.body.email;
 client.genre = req.body.genre;
 client.save(function(err) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(client);
 });
 });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
 Client.findById(req.params.id, function(err, client) {
 client.remove(function(err) {
 if(err) return res.send(500, err.message);
 res.json({ message: 'Successfully deleted' });
 });
 });
};

//https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp