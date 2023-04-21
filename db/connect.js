const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const connectDB = (url) => {
    // console.log('Connecting to MongoDB database at', url);
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;