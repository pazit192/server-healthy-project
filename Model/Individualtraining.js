//אימון יחידני

const mongoose = require('mongoose');

const Individualtraining = mongoose.Schema({

    code:{type:Number,ref:"Groupe"},
    tasks:[
        {type:String}
    ]


})
module.exports = mongoose.model("Individualtraining", Individualtraining)

//לעשות פונקציה בקונטרולר שמקבלת שם קבוצה
// לעשות שליפה של כל הגרופס
//ולחפש מהרשימה את מי שהשם זהה למה שהגיע ולשמור את הID שלו(findOne)
// ואז לשלוף את כל האינדבידואל  
//לחפש את מי שהקוד שלו כמו הקוד שמצאנו
//להחזיר לריאקט את הטסקס