const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserProfileSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },

    regno: { 
        type: String, 
        maxlength: 20, 
        required: true 
    }
});
  
module.exports = mongoose.model('UserProfile', UserProfileSchema);
