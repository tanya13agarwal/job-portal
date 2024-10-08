const express = require("express");
const app = express();

const database = require("./config/database");
database.connect();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
// const cors = require("cors");

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/drive', driveRoutes);
app.use('/api/profile', profileRoutes);

app.get("/" , (req , res) => {
    // return res.send("<p>Hello World!</p>") 
    return res.json({
        status : true,
        message : "Your server is Up and Running.."
    }) 
})

app.listen(PORT , () => {
    console.log(`App is running at ${PORT}`)
})