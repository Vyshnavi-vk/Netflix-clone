const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoute')

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI).
    then(() => { console.log('DB connected') })
    .catch((err) => console.log(err))



app.use('/api/user', userRoutes)
app.listen(5000, () => {
    console.log('Server running on port 5000')
})
