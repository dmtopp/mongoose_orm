var mongoose = require('mongoose');
// this connects us to our database
var connectionString = process.env.DB

console.log('Attepmting to connect to MongoDB');
mongoose.connect(connectionString); // connect to the DB in the connection string

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to: ' + process.env.DB);
})

mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('There was an error!');
})

mongoose.connection.on('disconnected', function(){
  console.log('Disconnected, bro.');
})
