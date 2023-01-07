const Graph = require("../model/Graph");
const User = require("../model/User")();
const Groupes = require("../model/groupes")();

const setData = async (req, res) => {
  let filter2 = "";
  let update2 = "";
  console.log(req.body);
  try {
    userId = req.body.userId;

    const filter1 = { id: userId };
    const update1 = {
      percentMenu: req.body.percentMenu,
      percentTraining: req.body.percentTraining,
    };

    let doc1 = await User.findOneAndUpdate(filter1, update1, {
      returnOriginal: false,
    });
    console.log(doc1);

    groupId = req.body.groupId;
    let percentMenuGroupCalc = 0;
    let percentTrainingGroupCalc = 0;
    let allUserGroupe;
    User.find({ groupeId: doc1.groupeId })
      .then((allUser) => {
        allUserGroupe = allUser.length;
        // console.log("____________" + allUser)
        allUser.forEach((element) => {
          if (element.percentMenu != null) {
            percentMenuGroupCalc += element.percentMenu;
          }
          if (element.percentMenu != null) {
            percentTrainingGroupCalc += element.percentTraining;
          }
        });
      })
      .then(async (ress) => {
        // User.find().then((ress) => { console.log(ress) })

        percentMenuGroupCalc = percentMenuGroupCalc / allUserGroupe;
        percentTrainingGroupCalc = percentTrainingGroupCalc / allUserGroupe;

        filter2 = { id: doc1.groupeId };
        update2 = {
          percentMenuGroup: percentMenuGroupCalc,
          percentTrainingGroup: percentTrainingGroupCalc,
        };

        // console.log("+++++++++++++" + filter2 + "+++++++++++" + update2)
        let doc2 = await Groupes.findOneAndUpdate(filter2, update2, {
          returnOriginal: false,
        });
        console.log(doc1, doc2);
        res.status(200).json({ doc1, doc2 });
      });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { setData };
