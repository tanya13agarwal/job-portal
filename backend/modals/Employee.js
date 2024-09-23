const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
  Empcode: { 
    type: String, 
    maxlength: 10, 
    default: '' 
  },

  firstName: { 
    type: String, 
    maxlength: 150, 
    default: null 
  },
  
  middleName: { 
    type: String, 
    maxlength: 100, 
    default: null 
  },
  
  lastName: { 
    type: String, 
    maxlength: 100, 
    default: null 
  },
  
  email: { 
    type: String, 
    maxlength: 30, 
    default: null 
  },
  
  phoneNo: { 
    type: String, 
    maxlength: 12, 
    default: null 
  },
  
  address: { 
    type: String, 
    maxlength: 500, 
    default: '' 
  },
  
  DOB: { 
    type: Date, 
    default: null 
  },
  gender: { 
    type: String, 
    maxlength: 5, 
    default: '' 
  },
  
  qualification: { 
    type: String, 
    maxlength: 50, 
    default: '' 
  },
  
  salary: { 
    type: Number, 
    default: 0 
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
