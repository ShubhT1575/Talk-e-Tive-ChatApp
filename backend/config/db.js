const mongoose = require('mongoose');

const URI = "mongodb+srv://st9889394838:bTdzxJ1bsYJRyCaD@inotebook.grrntkz.mongodb.net/?retryWrites=true&w=majority&appName=iNotebook"

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(URI);
        console.log(`Connected to MongoDb : ${conn.connection.host}`)

    } catch(error) {
        console.log(`Error: ${error.message}`)
        process.exit();
    }
}

module.exports = connectDB