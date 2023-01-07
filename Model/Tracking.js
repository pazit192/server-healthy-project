//מעקב

const mongoose = require('mongoose');

const Tracking = mongoose.Schema({
    grouplevel:{type:String},
    didyoumeetthecriteria:{type:String},
    howManyCaloriesDidYouLower:{type:Number},
    weight:{type:Number}

})
module.export = mongoose.model("Tracking", Tracking)