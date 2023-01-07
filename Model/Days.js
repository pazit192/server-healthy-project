//ימי אימון

const mongoose = require('mongoose');

const Days = mongoose.Schema({

    id: { type: Number },
    codeTrainingorder: { type: String, ref: 'Trainingorder' }
})
module.export = mongoose.model("Day", Days)