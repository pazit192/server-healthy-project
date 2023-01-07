const router=require('express').Router()
const Grouptrainingcontroler=require('../controller/Grouptrainingcontroler')

router.get('/getGrouptraining',Grouptrainingcontroler.getGrouptraining)
router.post('/CreateGrouptraining',Grouptrainingcontroler.CreateGrouptraining)

module.exports=router