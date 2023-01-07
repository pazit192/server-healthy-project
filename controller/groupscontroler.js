const Groupes = require("../model/groupes")();

const newgroups = (req, res) => {
  let groups = req.body;
  let newgroups = new Groupes(groups);
  newgroups
    .save()
    .then((data) => {
      res.send("the groups added successfully!");
    })
    .catch((error) => {
      res.send(error);
    });
};

const getAllgroupes = async (req, res) => {
  try {
    let data = await Groupes.find();
    res.send(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { getAllgroupes, newgroups };
