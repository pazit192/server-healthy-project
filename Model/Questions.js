//שאלות

const mongoose = require('mongoose');

const questions= mongoose.Schema({

    questions:{type:String},
    Answers:{type:String},
    email:{type:String}

})
module.export = mongoose.model("Questions", questions)