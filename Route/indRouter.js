const router=require('express').Router()
const Indcontroler=require('../controller/Indcontroler')


router.get('/getind',Indcontroler.getind)
router.post('/Createind',Indcontroler.Createind)
router.get('/getIndBynamegroup/:nameGroupe',Indcontroler.getIndBynamegroup)
router.get('/getIndBynamegroup1/:codeGroupe',Indcontroler.getIndBynamegroup1)

module.exports=router