const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PlacedstudentSchema = new Schema({
  name: { 
    type: String, 
    maxlength: 100, 
    required: true 
  },

  roll_no: { 
    type: String, 
    maxlength: 100, 
    required: true 
  },

  company: { 
    type: String, 
    maxlength: 100, 
    required: true 
  },

  dept: { 
    type: String, 
    maxlength: 100, 
    required: true 
  },

  pck: { 
    type: Number, 
    default: 0 
  }
});
  
module.exports = mongoose.model('Placedstudent', PlacedstudentSchema);
  