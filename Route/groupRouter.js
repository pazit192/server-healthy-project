const router = require("express").Router();
// const {NewUser}=require('../controller/UserControler')
const groupController = require("../controller/groupscontroler");

router.get("/getAllgroupes", groupController.getAllgroupes);
router.post("/newgroups", groupController.newgroups);

module.exports = router;
