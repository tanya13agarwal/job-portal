const mongoose = require("mongoose");

// Define the Courses schema
const jobSchema = new mongoose.Schema({
	jobName: { 
        type: String 
    },
	jobDescription: { 
        type: String 
    },
	// instructor: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	required: true,
	// 	ref: "user",
	// },
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
	// studentsEnrolled: [
	// 	{
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		required: true,
	// 		ref: "user",
	// 	},
	// ],
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