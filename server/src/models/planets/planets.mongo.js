const {Schema, model} = require('mongoose');

const planetSchema = new Schema({
    name: {type: String, required: true, unique: true}
});

const Planet = model('planet', planetSchema);

module.exports = Planet;