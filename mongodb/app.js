// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/saicart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function () {
//   console.log("Connected!");
// });

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "my name is " + this.name
  console.log(greeting);
}
var Kitten = mongoose.model('saiKitten', kittySchema);

var silkitty = new Kitten({ name: 'Silkitty' });
// console.log(silkitty.name);
// silkitty.speak();

silkitty.save(function (err, fluffy) {
  if (err) return console.error(err);
  // silkitty.speak();
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})