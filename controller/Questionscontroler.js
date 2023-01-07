const Questions=require('../model/Questions')

const CreateQuestions= (req, res) => {
    let Question = req.body
    console.log(Question);
    let newQuestion = new Questions(Question)
    newQuestion.save().then((response) => {
        res.send(response)
    }).catch((error) => {
        console.log(error);
        res.send("my error", error)
    })
} 


const  getQuestions = async (req, res) => {
    try {
        let h = await Questions.find()
        res.send(h)
    }
    catch (error) {
        res.json({ message: err.message })

    }

}



module.exports = { getQuestions,CreateQuestions }