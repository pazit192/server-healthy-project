//סדר אימון

const mongoose = require('mongoose');

const Trainingorder = mongoose.Schema({

    id: { type: Number },
    codegroupes: { type: Number, ref: 'Groupes' },
    nameimon: { type: Number, ref: 'Typeoftraining'}

})
module.exports = mongoose.model("Trainingorder", Trainingorder)