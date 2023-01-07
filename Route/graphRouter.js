const router=require('express').Router()
 const graphController=require('../controller/graphscontoler')

 router.post('/setData',graphController.setData)
 
module.exports=router