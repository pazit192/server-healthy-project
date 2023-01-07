//קבוצות דיאטה
const mongoose = require("mongoose");


const Groupes = new mongoose.Schema({

    id: { type: Number },
    name: { type: String },
    calories: { type: Number },
    // קהל יעד מסוג סטרינג
    crowd: { type: String },
    numWeeks: { type: Number },
    members: [{ type: String, ref: 'User' }],
    menu: { type: Number, ref: 'Menu' },
    Individualtraining:{type:mongoose.Schema.Types.ObjectId,ref:'Individualtraining'},
    //לפי הקבוצות דיאטה שיהיה בטרנינג מודגש
    Trainingorder:{type:Number,ref:"Trainingorder"},
    description: { type: String },//הסבר על הקבוצה שבחר
    max:{type:Number},
    percentMenuGroup:{ type: Number },
    percentTrainingGroup:{ type: Number },
})

function loadModel(modelName, modelSchema) {
    return mongoose.models[modelName] // Check if the model exists
        ? mongoose.model(modelName) // If true, only retrieve it
        : mongoose.model(modelName, modelSchema) // If false, define it
}


module.exports = () => loadModel('Groupes', Groupes)
 