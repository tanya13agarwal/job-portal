const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
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
  cgpa: { 
    type: Number, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  bklgs: { 
    type: Number, 
    default: 0 
  }
});

module.exports = mongoose.model('Student', StudentSchema);
  