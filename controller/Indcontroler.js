const Individualtraining = require('../model/Individualtraining')
const Groupes = require('../model/groupes')()

const getind = (req, res) => {

    Individualtraining.find().then((AllIndividualtraining) => {
        res.send(AllIndividualtraining)
    }).catch((err) => {
        res.status(600).json({ message: err.message })

    })

}

//then&catch
const Createind = (req, res) => {
    let individualtraining1 = req.body
    console.log(individualtraining1);
    let newIndividualtraining = new Individualtraining(individualtraining1)
    newIndividualtraining.save().then((response) => {
        res.send(response)
    }).catch((error) => {
        console.log(error);
        res.send("my error", error)
    })
}


//לעשות פונקציה בקונטרולר שמקבלת שם קבוצה
// לעשות שליפה של כל הגרופס
//ולחפש מהרשימה את מי שהשם זהה למה שהגיע ולשמור את הID שלו(findOne)
// ואז לשלוף את כל האינדבידואל  
//לחפש את מי שהקוד שלו כמו הקוד שמצאנו
//להחזיר לריאקט את הטסקס
const getIndBynamegroup1 = async (req, res) => {
    try {
        let nameGn = req.params.codeGroupe
        let gn = await Groupes.findOne({ name: nameGn })
        await console.log(gn);
        let IdGn = await gn.id
        let all1 = await Individualtraining.findOne({code: IdGn})
        res.send(all1.tasks)

    }
    catch (error) {
        res.send({ error })
    }
}

//שליפת האוביקט לפי הקוד שהגיע
const getIndBynamegroup = async (req, res) => {
    try {
        let nameG = req.params.nameGroupe
        let g = await Individualtraining.findById(nameG)
        res.send(g)

    }
    catch (error) {
        res.send({ error })
    }
}




module.exports = { getind, Createind, getIndBynamegroup,getIndBynamegroup1 }