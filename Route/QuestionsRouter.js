const router=require('express').Router()
const Questionscontroler=require('../controller/Questionscontroler')



router.post('CreateQuestions',Questionscontroler.CreateQuestions)
router.get('getQuestions',Questionscontroler.getQuestions)


module.exports=router