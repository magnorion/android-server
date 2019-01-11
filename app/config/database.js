module.exports = (app) => {
    const mongoose = require('mongoose');
    mongoose.connect(
        'mongodb+srv://magno:magno@appcluster-a9qxu.mongodb.net/test?retryWrites=true', 
        { useNewUrlParser: true }
    );

    return mongoose;
}
