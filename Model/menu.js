//תפריט

const mongoose = require('mongoose');


const Menu = mongoose.Schema({
    id: { type: Number },
    breakfast: [
        { type: String }
    ],
    lunch: [
        { type: String }
    ],
    Snack: [{ type: String }],
    dinner: [
        { type: String }
    ],
})
module.exports = mongoose.model("Menu", Menu)