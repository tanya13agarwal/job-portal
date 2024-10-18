const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RegisteredSchema = new Schema({
  id: { 
    type: String, 
    default: () => uuid.v4(), 
    unique: true 
  },
  
  drive: { 
    type: Schema.Types.ObjectId, 
    ref: 'Drives', 
    required: true 
  },
  
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
});

module.exports = mongoose.model('Registered', RegisteredSchema);
  