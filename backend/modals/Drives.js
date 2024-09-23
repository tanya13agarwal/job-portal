const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DrivesSchema = new Schema({
  id: { 
    type: String, 
    default: () => uuid.v4(), 
    unique: true 
  },

  drive_author: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  drive_name: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_role: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_desc: { 
    type: String, 
    default: '' 
  },
  
  drive_pckg: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_date: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_cdate: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_bklgs: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_cgpa: { 
    type: String, 
    maxlength: 255, 
    default: '' 
  },
  
  drive_img: { 
    type: String, 
    default: null 
  } // Store URL to the uploaded image
});
  
module.exports = mongoose.model('Drives', DrivesSchema);
  