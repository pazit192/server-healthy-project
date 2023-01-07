//נירשמים לאתר
const mongoose = require("mongoose");

const RecordingUser = new mongoose.Schema({
  name: { type: String },
  id: { type: String },
  age: { type: Number },
  email: { type: String },
  pon: { type: String },
  date: { type: String },
  groupeId: { type: Number, ref: "Groupe" },
  percentMenu: { type: Number },
  percentTraining: { type: Number },
});
function loadModel(modelName, modelSchema) {
  return mongoose.models[modelName] // Check if the model exists
    ? mongoose.model(modelName) // If true, only retrieve it
    : mongoose.model(modelName, modelSchema); // If false, define it
}
module.exports = () => loadModel("User", RecordingUser);
