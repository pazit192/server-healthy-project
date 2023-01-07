const Trainingorder = require('../model/Trainingorder')
//בעז"ה נעשה ונצליח

const CreateTraining= (req, res) => {
    try{
    let Training = req.body
    console.log(Training);
    let newTraining = new Trainingorder(Training)
    newTraining.save().then((response) => {
        res.send(response)
    })
}
catch(error) {
        console.log(error);
        res.send("my error", error)
    }
} 


const  getTraining = async (req, res) => {
    try {
        let h = await Trainingorder.find()
        res.send(h)
    }
    catch (error) {
        res.json({ message: err.message })

    }

}
//אני רוצה לפי הקבוצה שניכנס דרכה יצבע את השורה בדר אימון
const getIdByidgroup = async (req, res) => {
    try {
        let id = req.params.Trainingorderid
        let n = await Trainingorder.findById(id)
        res.send(n)

    }
    catch (error) {
        res.send({ error })
    }
}


module.exports = { getTraining,CreateTraining, getIdByidgroup}
