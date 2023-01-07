const mongoose = require('mongoose');
// אפשר לימחוק זה נימצא בקבוצות גם מהדאטה בייס
const Graph = mongoose.Schema({

    date:{type:Date},
   
    percentMenuGroup:{ type: Number },
    percentTrainingGroup:{ type: Number },
    
})
module.export = mongoose.model("Graph", Graph)