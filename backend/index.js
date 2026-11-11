require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const connectDB = require('./config/db');

app.use(cors());              // ✅ add this
app.use(express.json());
app.use('/images', express.static('upload/images'))

connectDB()

app.get('/',(req,res)=>{
    res.send('working,')

})

app.use('/', require('./routes/uploadRoutes'))
app.use('/', require('./routes/productRoutes'))
app.use('/', require('./routes/userRoutes'))

app.listen(port,()=>{
    console.log('port working...')
})