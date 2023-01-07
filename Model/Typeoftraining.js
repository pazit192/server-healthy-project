//סוג אימון
const mongoose = require('mongoose');

const Typeoftraining = mongoose.Schema({
    id:{type:Number},
    nameday:{type:String},//יום
    sogimon:{type:String}//ריצה,הליכה
})
 // function loadModel(modelName, modelSchema) {
 //     return mongoose.models[modelName] // Check if the model exists
 //         ? mongoose.model(modelName) // If true, only retrieve it
 //         : mongoose.model(modelName, modelSchema) // If false, define it
// }
  
// module.exports = () => loadModel("Typeoftraining", Typeoftraining)
module.exports = mongoose.model("Typeoftraining", Typeoftraining)