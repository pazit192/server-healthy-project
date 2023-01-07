// יצירת  ניסוי אנש חדש
const mongoose = require("mongoose");
const User = require("../model/user")();
const Groupes = require("../model/groupes")();

const getUser = async (req, res) => {
  console.log("check");
  try {
    let l = await User.find();
    res.send(l);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const NewUser = async (req, res) => {
  console.log("user");
  let user = req.body;
  console.log(user);
  try {
    if (
      user.name == "" ||
      user.id == "" ||
      user.age == "" ||
      user.email == "" ||
      user.data == "" ||
      user.pon == ""
    ) {
      res.send("לא נשלחו פרטים");
    } else {
      let ifexist = await User.find({ id: user.id });
      if (ifexist.length == 0) {
        let newUser = await new User(user);
        await newUser.save();
        //לא קיים כזה תז וניתן להוסיפו
        //מציאת הקוד קבוצה שאליו הוא משתבץ
        let groupe = await Groupes.findOne({ name: user.groupeId });
       
        if (groupe.members.length > 20) {
          res.send("הקבוצה מלאה");
        } else {        
          //שמירת המשתמש
          await Groupes.findByIdAndUpdate(groupe.id, {
            $push: { members: user.id },
          });
          //await Groupes.save()
          let newUser = await new User(user);
          await newUser.save();
          res.send("נוספת בהצלחה");
         }
      } else {        
        res.send("הנך קיים, אין אפשרות להירשם לכמה מסלולים");
      }
    }
    // let newGroupes = await new Grouptraining(Groupes)
    // await newGroupes.save()
  } catch (e) {
    res.send(e);
  }
};

const deleteuser = (req, res) => {
  User.deleteOne({  id: req.params.id })
    .then((data) => {
      res.send("delete successfully");
    })
    .catch((error) => {
      res.send(error);
    });
};
const adduser = async (req, res) => {
  let user1 = req.body.user;
  let adduser1 = new User({
    amount: 1,
    name: user1.name,
    age: user1.age,
  });
  let userid = user.userid;
  userid.User += adduser1;
  adduser1.save();
};

const updateuser = (req, res) => {
  let user2 = req.params;
  let newuser2 = req.body.user2;
  user2.find({ user2: newuser2 }).then((response) => {
    user2
      .forEach((element) => {
        if (user2 != newuser2) {
          res.send("Not found");
        } else {
          user2
            .findOneAndUpdate({ name: name }, { age: age })
            .then((response) => {
              res.send(`hello!! ${response} updated successfully`);
            });
        }
      })
      .catch((error) => {
        res.send("error :" + error);
      });
  });
};
module.exports = { NewUser, deleteuser, updateuser, adduser, getUser };
