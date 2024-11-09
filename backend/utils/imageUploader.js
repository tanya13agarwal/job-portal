// const cloudinary = require("cloudinary").v2

// exports.uploadImageToCloudinary = async (file , folder , height , quality) => {
//     const options = {folder};
//     // if(height) {
//     //     options.height = height;
//     // }
//     // if(quality) {
//     //     options.quality = quality;
//     // }
//     // options.resource_type = "auto";
//     // Explicitly set resource type based on the file type
//     if (file.mimetype === 'application/pdf') {
//         options.resource_type = "raw"; // Use "raw" specifically for PDFs
//     } else {
//         options.resource_type = "auto"; // "auto" for other types
//         if (height) options.height = height;
//         if (quality) options.quality = quality;
//     }

//     return await cloudinary.uploader.upload(file.tempFilePath , options);
// }

const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
    const options = { 
        folder, 
        access_mode: "public", // Make file publicly accessible
        public_id: file.name.split(".")[0], // Use the file name without extension as public ID
    };

    // Check if the file is a PDF
    if (file.mimetype === 'application/pdf') {
        options.resource_type = "raw"; // Set as "raw" for PDFs
        options.public_id += ".pdf";   // Append .pdf to ensure the file type is recognized
    } else {
        options.resource_type = "auto"; // Use "auto" for other files
        if (height) options.height = height;
        if (quality) options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
};
