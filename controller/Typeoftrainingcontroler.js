const Typeoftraining = require('../Model/Typeoftraining')



//עובד
const CreateTrainingo = (req, res) => {
    let Trainingo = req.body
    console.log(Trainingo);
    let newTrainingo = new Typeoftraining(Trainingo)
    newTrainingo.save().then((response) => {
        res.send(response)
    }).catch((error) => {
        console.log(error);
        res.send("my error", error)
    })
} 


const getTrainingo = async (req, res) => {
    try {
        let l = await Typeoftraining.find()
        res.send(l)
    }
    catch (error) {
        res.json({ message: err.message })

    }

}

 module.exports={getTrainingo,CreateTrainingo }
