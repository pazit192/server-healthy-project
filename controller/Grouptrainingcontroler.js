const grouptraining= require('../model/Grouptraining')

const CreateGrouptraining = (req, res) => {
    let Grouptraining = req.body
    console.log(Grouptraining);
    let newGrouptraining = new grouptraining(Grouptraining)
    newGrouptraining.save().then((response) => {
        res.send(response)
    }).catch((error) => {
        console.log(error);
        res.send("my error", error)
    })
} 

const  getGrouptraining = async (req, res) => {
    try {
        let g = await grouptraining.find()
        res.send(g)
    }
    catch (error) {
        res.json({ message: err.message })

    }

}

 module.exports={CreateGrouptraining,getGrouptraining}
