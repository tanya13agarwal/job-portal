const mongoose = require("mongoose");

// Define the Courses schema
const companySchema = new mongoose.Schema({
	companyName: { 
        type: String, 
        require:true,
    },
    thumbnail: {
		type: String,
        default : "https://i.pinimg.com/originals/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg",
	},
	companyDescription: { 
        type: String 
    },
	companyLoaction: {
		type: String,
	},
	jobs: [
		{
			type: mongoose.Schema.Types.ObjectId,
            require : true,
			ref: "Job",
		},
	],
	companyWebsite: {
		type: String,
	},
	createdAt: {
		type:Date,
		default:Date.now
	},
});

// Export the Courses model
module.exports = mongoose.model("Company", companySchema);