const router=require('express').Router()
// const {NewUser}=require('../controller/UserControler')
//  const menuController=require('../controller/menucontroler')
 const trainingordercontroler=require('../controller/trainingordercontroler')

 router.get('/getTraining',trainingordercontroler.getTraining)
 router.post('/CreateTraining',trainingordercontroler.CreateTraining)
 router.get('/getIdByidgroup/:Trainingorderid',trainingordercontroler.getIdByidgroup)

 module.exports=router
