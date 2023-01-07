const router=require('express').Router()
// const {NewUser}=require('../controller/UserControler')
 const typeoftrainingcontroler=require('../controller/Typeoftrainingcontroler')

 router.get('/getTrainingo',typeoftrainingcontroler.getTrainingo)
 router.post('/CreateTrainingo',typeoftrainingcontroler.CreateTrainingo)


module.exports=router
