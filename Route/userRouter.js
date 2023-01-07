const router = require("express").Router();
// const {NewUser}=require('../controller/UserControler')
const userController = require("../controller/UserControler");

router.get("/getUser", userController.getUser);

router.post("/newUser", userController.NewUser);

router.put("/updateuser", userController.updateuser);

router.delete("/deleteuser/:id", userController.deleteuser);

router.patch("/adduser", userController.adduser);

module.exports = router;

//get -  שליפת מידע
// post -  יצירת אוביקט חדש ושמירה בשרת
// put - עדכון של אוביקט קיים
// Patch  - עדכון של שדות בודדים
// delete - למחוק
