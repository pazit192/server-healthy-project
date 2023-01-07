const Menu = require('../model/menu')
const mongoose = require('mongoose')



// const getmenu = (req, res) => {

//     Menu.find().then((AllMenu) => {
//         res.send(AllMenu)
//     }).catch((err) => {
//         res.status(600).json({ message: err.message })

//     })

// }

const getAllmenu = async (req, res) => {
    try {
        let data = await Menu.find()
        res.send(data)
    }
    catch (error) {
        res.json({ message: error.message })
    }
}


const getmenubyid=(req,res)=>{

    let id=req.params.Menuid
    Menu.findOne({id:id}).then((i)=>{
        if(i){
            res.send(i)    
        }
        else
        res.send('error:Your ID was not found')

    }).catch((e)=>{
        res.send('error:  '+e)

    })
}


//then&catch
const CreateMenu = (req, res) => {
    let menu = req.body
    console.log(menu);
    let newMenu = new Menu(menu)
    newMenu.save().then((response) => {
        res.send(response)
    }).catch((error) => {
        console.log(error);
        res.send("my error", error)
    })
}
// , getmenu

module.exports = { CreateMenu,getAllmenu,getmenubyid }


