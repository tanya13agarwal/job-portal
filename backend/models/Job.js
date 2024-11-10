const mongoose = require("mongoose");

// Define the Courses schema
const jobSchema = new mongoose.Schema({
	jobName: { 
        type: String 
    },
	jobDescription: { 
        type: String 
    },
	jobDescriptionFile: { 
        type: String 
    },
	stipend: {
		type:Number,
	},
	whatYouWillGet: {
		type: String,
	},
	// courseContent: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "Section",
	// 	},
	// ],
	// ratingAndReviews: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "RatingAndReview",
	// 	},
	// ],
	minSalary: {
		type: Number,
		required : true,
	},
	maxSalary: {
		type: Number,
        required : true,
	},
	thumbnail: {
		type: String,
	},
	jobLocation: {
		type: String,
	},
	branch: {
		type: [String],
		required: true,
	},
	batch: {
		type: [String],
		required: true,
	},
	category: {
		type: String,
        required : true
	},
	
	instructions: {
		type: [String],
	},
	status: {
		type: String,
		enum: ["Draft", "Published"],
	},
	createdAt: {
		type:Date,
		default:Date.now
	},
});

// Export the Courses model
module.exports = mongoose.model("Job", jobSchema);
