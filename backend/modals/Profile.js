const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    unique: true 
  },
  
  ph_num: { 
    type: String, 
    maxlength: 10, 
    default: null 
  },
  
  addr: { 
    type: String, 
    default: null 
  },
  
  clg_name: { 
    type: String, 
    maxlength: 50, 
    default: null 
  },
  
  sem: { 
    type: String, 
    maxlength: 10, 
    default: null 
  },
  
  brch: { 
    type: String, 
    default: null 
  },
  
  cgpa: { 
    type: Number, 
    default: null 
  },
  
  bklgs: { 
    type: Number, 
    default: null 
  },
  
  website: { 
    type: String, 
    default: null 
  },
  
  github: { 
    type: String, 
    default: null 
  },
  
  linkedin: { 
    type: String, 
    default: null 
  },
  
  stkoflw: { 
    type: String, 
    default: null 
  },
  
  codechef: { 
    type: String, 
    default: null 
  },
  
  dp_img: { 
    type: String, 
    default: null 
  }, // Store URL to the uploaded image
  
  resume: { 
    type: String, 
    default: null 
  }, // Store URL to the uploaded document
  
  isCordinator: { 
    type: Boolean,
     default: false 
  }
});

module.exports = mongoose.model('Profile', ProfileSchema);
