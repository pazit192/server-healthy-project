const express = require("express");
const app = express();
// כדי שנוכל לקבל נתונים מהbody
const bodyParser=require('body-parser')
app.use(bodyParser())

const cors =require('cors')
app.use(cors())
const env=require('dotenv')
env.config()

const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_CONNECTION).then(()=>{
    console.log('connect to mongo');
})


const userRouter=require('./Route/userRouter')
app.use('/user', userRouter)

const groupRouter=require('./Route/groupRouter')
app.use('/groupes', groupRouter)

const GrouptrainingRouter=require('./Route/GrouptrainingRouter')
app.use('/Grouptraining', GrouptrainingRouter)

const menuRouter=require('./Route/menuRouter')
app.use('/menu', menuRouter)

const trainingRouter=require('./Route/trainingRouter')
app.use('/Trainingorder', trainingRouter)

const typeRouter=require('./Route/typeRouter')
app.use('/Typeoftraining', typeRouter)

const indRouter=require('./Route/indRouter')
app.use('/Individualtraining', indRouter)

const graphRouter=require('./Route/graphRouter')
app.use('/graph', graphRouter)

app.listen(3030,()=>{

    console.log("listening on 3030")

})