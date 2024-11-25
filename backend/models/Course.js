const mongoose = require("mongoose");

// Define the Courses schema
const courseSchema = new mongoose.Schema({
	courseName: { 
        type: String, 
        require:true,
    },
    thumbnail: {
		type: String,
        default : "https://i.pinimg.com/originals/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg",
	},
	courseDescription: { 
        type: String 
    },
	courseLink: {
		type: String,
	},
	createdAt: {
		type:Date,
		default:Date.now
	},
});

// Export the Courses model
module.exports = mongoose.model("Course", courseSchema);