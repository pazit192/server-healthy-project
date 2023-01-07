const router=require('express').Router()
// const {NewUser}=require('../controller/UserControler')
 const menucontroler=require('../controller/menucontroler')

 router.get('/getAllmenu',menucontroler.getAllmenu)
 router.post('/CreateMenu',menucontroler.CreateMenu)
 router.get('/getmenubyid/:Menuid',menucontroler.getmenubyid)


module.exports=router
