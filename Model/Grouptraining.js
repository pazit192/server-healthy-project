//אימון קבוצתי

const mongoose = require('mongoose');

const Grouptraining = mongoose.Schema({

    id: { type: Number  },
    groupeCode: { type: Number,ref: 'Groupes'  },
    start: { type: String },//שעת התחלת אימון
    finish: { type: String },//שעת סיום

})
module.exports = mongoose.model("Grouptraining", Grouptraining)